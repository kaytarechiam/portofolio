"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * next/image with a graceful fallback. If the file is missing (404) or no src
 * is provided, renders a branded placeholder block instead of a broken image.
 * Parent must be `relative` with a defined size (uses fill).
 */
export default function SmartImage({
  src,
  alt,
  fallbackLabel,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  className = "object-cover",
}) {
  const [errored, setErrored] = useState(!src);

  if (errored) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-sunken bg-grid">
        <span className="font-pixel text-sm uppercase tracking-widest text-muted-foreground">
          {fallbackLabel || alt || "image"}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
