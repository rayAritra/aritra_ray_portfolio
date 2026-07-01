"use client";

import Image from "next/image";
import { useState } from "react";
import { marqueeImages } from "@/lib/data";

function MarqueeImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative w-52 h-[130px] rounded-lg overflow-hidden flex-shrink-0 bg-[var(--subtle)] border border-[var(--border)]">
      {errored ? (
        <div className="w-full h-full flex items-center justify-center text-[11px] text-[var(--muted)] select-none">
          {alt}
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setErrored(true)}
          unoptimized
        />
      )}
    </div>
  );
}

export default function Marquee() {
  const doubled = [...marqueeImages, ...marqueeImages];

  return (
    <div className="overflow-hidden marquee-container -mx-4 sm:-mx-6">
      <div className="flex gap-3 animate-marquee marquee-track will-change-transform w-max py-1">
        {doubled.map((img, i) => (
          <MarqueeImage key={`${img.src}-${i}`} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}
