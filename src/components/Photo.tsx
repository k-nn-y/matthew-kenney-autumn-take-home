"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Every photograph on the page sits on a ground-warm plate that reserves its
 * exact aspect ratio, so nothing reflows on decode (the CLS budget is 0.05)
 * and a failed image leaves a considered empty plate rather than a broken icon.
 *
 * The fade is CSS, keyed off data-loaded, for two reasons an inline opacity
 * could not satisfy: prefers-reduced-motion has to be able to switch it off,
 * and the <noscript> rule in the layout has to be able to force every
 * photograph visible on a page with JavaScript disabled.
 */
export function Photo({
  src,
  alt,
  width,
  height,
  objectPosition,
  priority = false,
  sizes,
  radius,
  className,
  fill = true,
  style,
}: {
  src: string;
  alt: string;
  /** Intrinsic dimensions, used only to reserve the plate's aspect ratio. */
  width: number;
  height: number;
  objectPosition: string;
  priority?: boolean;
  sizes: string;
  radius?: string;
  className?: string;
  /** false renders at the plate's natural aspect ratio instead of filling a box. */
  fill?: boolean;
  style?: React.CSSProperties;
}) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // A cached image can finish decoding before hydration, so onLoad never
  // fires. Catch that case on mount rather than leaving the plate showing.
  useEffect(() => {
    const img = ref.current?.querySelector("img");
    if (img?.complete) setLoaded(true);
  }, []);

  return (
    <div
      ref={ref}
      className={["au-photo", className].filter(Boolean).join(" ")}
      data-loaded={loaded ? "true" : undefined}
      style={{
        borderRadius: radius,
        ...(fill ? null : { aspectRatio: `${width} / ${height}` }),
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onLoad={() => setLoaded(true)}
        style={{ objectFit: "cover", objectPosition }}
      />
    </div>
  );
}
