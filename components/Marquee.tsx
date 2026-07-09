"use client";

import Image from "next/image";
import { useState } from "react";
import { marqueeImages } from "@/lib/data";

function MarqueeImage({
  src,
  alt,
  url,
}: {
  src: string;
  alt: string;
  url?: string;
}) {
  const [errored, setErrored] = useState(false);

  const content = errored ? (
    <div className="w-full h-full flex items-center justify-center text-xs text-[var(--muted)] select-none">
      {alt}
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
      onError={() => setErrored(true)}
      unoptimized
    />
  );

  const className =
    "group relative w-52 h-[130px] rounded-lg overflow-hidden flex-shrink-0 bg-[var(--subtle)] border border-[var(--border)] transition-colors hover:border-[var(--fg)]";

  if (!url) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${alt}`}
      className={className}
    >
      {content}
    </a>
  );
}

export default function Marquee() {
  const doubled = [...marqueeImages, ...marqueeImages];

  return (
    <div className="overflow-hidden marquee-container -mx-4 sm:-mx-6">
      <div className="flex gap-3 animate-marquee marquee-track will-change-transform w-max py-1">
        {doubled.map((img, i) => (
          <MarqueeImage key={`${img.src}-${i}`} src={img.src} alt={img.alt} url={img.url} />
        ))}
      </div>
    </div>
  );
}
