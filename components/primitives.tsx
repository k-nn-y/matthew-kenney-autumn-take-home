export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 8h10M9 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type SectionHeaderProps = {
  eyebrow: string
  headline: string
  lead: string
  leadMobile?: string
  onInk?: boolean
}

export function SectionHeader({ eyebrow, headline, lead, leadMobile, onInk }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16">
      <div className="flex max-w-2xl flex-col gap-5">
        <p className={`au-label ${onInk ? "text-on-ink-quiet" : "text-quiet"}`}>{eyebrow}</p>
        <h2
          className={`au-track-display text-[40px] leading-[0.96] text-balance md:text-[60px] ${
            onInk ? "text-on-ink" : "text-ink"
          }`}
        >
          {headline}
        </h2>
      </div>
      <div className="max-w-md">
        {leadMobile ? (
          <>
            <p
              className={`au-track-body hidden text-[19px] leading-relaxed md:block ${
                onInk ? "text-on-ink-quiet" : "text-body"
              }`}
            >
              {lead}
            </p>
            <p
              className={`au-track-body text-[19px] leading-relaxed md:hidden ${
                onInk ? "text-on-ink-quiet" : "text-body"
              }`}
            >
              {leadMobile}
            </p>
          </>
        ) : (
          <p
            className={`au-track-body text-[19px] leading-relaxed ${
              onInk ? "text-on-ink-quiet" : "text-body"
            }`}
          >
            {lead}
          </p>
        )}
      </div>
    </div>
  )
}
