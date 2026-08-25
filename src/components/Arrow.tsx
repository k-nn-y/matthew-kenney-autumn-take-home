/**
 * Button arrow. 16px on the mobile board, 15px on desktop — that switch lives
 * in CSS (`--au-arrow-size` on .au-btn), so the size is not written inline
 * where a stylesheet could never reach it. `size` pins it for the one place
 * the board asks for something else: the compact nav CTA at 14px.
 */
export function Arrow({ size }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="au-btn-arrow"
      style={
        size
          ? ({ "--au-arrow-size": `${size}px` } as React.CSSProperties)
          : undefined
      }
    >
      <path
        d="M3 8h10M9 3l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
