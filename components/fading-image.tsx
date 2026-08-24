"use client"

import Image from "next/image"
import { useState } from "react"

type FadingImageProps = {
  src: string
  alt: string
  priority?: boolean
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  className?: string
  style?: React.CSSProperties
}

/**
 * next/image on a #F2F2F0 plate that reserves the aspect ratio.
 * 300ms opacity fade on decode; the plate persists on failure.
 */
export function FadingImage({
  src,
  alt,
  priority,
  fill,
  width,
  height,
  sizes,
  className,
  style,
}: FadingImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  if (failed) {
    // Plate persists on failure
    return null
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      priority={priority}
      fill={fill}
      width={width}
      height={height}
      sizes={sizes}
      className={`au-img ${loaded ? "au-img-loaded" : ""} ${className ?? ""}`}
      style={style}
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
    />
  )
}
