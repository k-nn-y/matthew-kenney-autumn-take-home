import { Arrow } from "./Arrow";

type Variant =
  "primary" | "primary-on-ink" | "secondary" | "secondary-on-photo";

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "au-btn au-btn-primary",
  "primary-on-ink": "au-btn au-btn-primary-on-ink",
  secondary: "au-btn au-btn-secondary",
  "secondary-on-photo": "au-btn au-btn-secondary-on-photo",
};

/**
 * Every action on the page is a real <a>. There are no forms and no
 * JavaScript-only controls, so the page stays fully actionable without JS.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  block = false,
  arrowSize,
  className,
  tabIndex,
  "aria-label": ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  block?: boolean;
  arrowSize?: number;
  className?: string;
  tabIndex?: number;
  "aria-label"?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      className={[
        VARIANT_CLASS[variant],
        block ? "au-btn-block" : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span>{children}</span>
      {arrow ? <Arrow size={arrowSize} /> : null}
    </a>
  );
}
