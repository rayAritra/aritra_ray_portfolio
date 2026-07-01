#!/usr/bin/env node
/**
 * Generates solid-color placeholder PNG files for development.
 * Run: node scripts/create-placeholders.js
 * Replace with real images before deploying.
 */

const zlib = require("zlib");
const fs = require("fs");
const path = require("path");

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBytes = Buffer.from(type, "ascii");
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crcVal = crc32(Buffer.concat([typeBytes, data]));
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crcVal, 0);
  return Buffer.concat([len, typeBytes, data, crcBuf]);
}

function createPNG(width, height, r, g, b) {
  const raw = Buffer.alloc(height * (1 + width * 3));
  for (let y = 0; y < height; y++) {
    raw[y * (1 + width * 3)] = 0; // filter: None
    for (let x = 0; x < width; x++) {
      const o = y * (1 + width * 3) + 1 + x * 3;
      raw[o] = r;
      raw[o + 1] = g;
      raw[o + 2] = b;
    }
  }
  const compressed = zlib.deflateSync(raw);
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 2; // RGB
  return Buffer.concat([sig, chunk("IHDR", ihdrData), chunk("IDAT", compressed), chunk("IEND", Buffer.alloc(0))]);
}

const publicDir = path.join(__dirname, "..", "public");
const projectsDir = path.join(publicDir, "projects");
const logosDir = path.join(publicDir, "logos");

fs.mkdirSync(projectsDir, { recursive: true });
fs.mkdirSync(logosDir, { recursive: true });

// Project images: 800x450, varying muted colors
const projectImages = [
  ["linkedin-gtm-agent", 210, 220, 235],
  ["airedify", 220, 235, 220],
  ["lumio", 235, 225, 210],
  ["youth", 230, 215, 235],
  ["reviewiq", 215, 230, 235],
  ["uber-clone", 235, 235, 215],
  ["chess-game", 225, 215, 215],
];

for (const [name, r, g, b] of projectImages) {
  const filePath = path.join(projectsDir, `${name}.png`);
  fs.writeFileSync(filePath, createPNG(800, 450, r, g, b));
  console.log(`created: public/projects/${name}.png`);
}

// Profile photo: 400x400, warm gray
fs.writeFileSync(path.join(publicDir, "aritra.jpg"), createPNG(400, 400, 210, 200, 195));
console.log("created: public/aritra.jpg");

// Faunly logo: 64x64, light blue-gray
fs.writeFileSync(path.join(logosDir, "faunly.png"), createPNG(64, 64, 100, 140, 200));
console.log("created: public/logos/faunly.png");

// OG image: 1200x630
fs.writeFileSync(path.join(publicDir, "og-image.png"), createPNG(1200, 630, 245, 245, 245));
console.log("created: public/og-image.png");

console.log("\nAll placeholder images created. Replace with real images before deploying.");
