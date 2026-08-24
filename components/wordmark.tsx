type WordmarkProps = {
  width?: number
  height?: number
  className?: string
}

/**
 * Autumn wordmark: leaf glyph + lowercase wordmark, viewBox 0 0 106 16.
 * Rendered as SVG paths/strokes in currentColor — never live text.
 */
export function Wordmark({ width = 113, height = 17, className }: WordmarkProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 106 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Autumn"
      className={className}
    >
      {/* Leaf glyph */}
      <path
        d="M7 0.8C3.2 3.6 1.4 7.2 2.2 11.4C2.4 12.4 2.8 13.2 3.3 13.9C6.9 13.5 9.8 11.8 11.3 8.6C12.5 6 12.3 3.2 11 0.5C9.6 0.4 8.2 0.5 7 0.8Z"
        fill="currentColor"
      />
      <path d="M3.3 13.9L1.2 15.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* a */}
      <circle cx="22" cy="9.25" r="3.55" stroke="currentColor" strokeWidth="1.9" />
      <path d="M25.55 5.7V13" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      {/* u */}
      <path
        d="M30.5 5.7V9.4A3.6 3.6 0 0 0 37.7 9.4V5.7"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path d="M37.7 9.4V13" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      {/* t */}
      <path
        d="M44.4 2V10A3 3 0 0 0 47.4 13"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path d="M41.9 5.7H47.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      {/* u */}
      <path
        d="M52.1 5.7V9.4A3.6 3.6 0 0 0 59.3 9.4V5.7"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path d="M59.3 9.4V13" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      {/* m */}
      <path d="M64.3 13V5.7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path
        d="M64.3 9.2A3.4 3.4 0 0 1 71.1 9.2V13"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M71.1 9.2A3.4 3.4 0 0 1 77.9 9.2V13"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      {/* n */}
      <path d="M83 13V5.7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path
        d="M83 9.2A3.4 3.4 0 0 1 89.8 9.2V13"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  )
}
