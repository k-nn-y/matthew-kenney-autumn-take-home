import { priceBand } from "@/lib/content"

export function PriceBand() {
  return (
    <section aria-label="What a booking costs you" className="bg-ink">
      <div className="mx-auto max-w-[1312px] px-6 py-16 md:px-16 md:py-[120px]">
        {/* Lead label with lit dot */}
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="size-2 rounded-full bg-on-ink" />
          <p className="au-label text-on-ink">{priceBand.leadLabel}</p>
        </div>

        {/* Three hairline-separated columns */}
        <div className="mt-10 flex flex-col md:mt-14 md:flex-row">
          {priceBand.columns.map((col, i) => (
            <div
              key={col.label}
              className={`flex flex-1 flex-col gap-4 py-8 md:px-10 md:py-2 ${
                i > 0
                  ? "border-t border-rule-on-ink md:border-t-0 md:border-l"
                  : "md:pl-0"
              }`}
            >
              <p className="au-label text-on-ink-quiet">{col.label}</p>
              <p
                className={`au-tnum au-track-36 md:au-track-display text-[34px] leading-[0.96] md:text-[60px] ${
                  col.recessive ? "text-on-ink-quiet" : "text-on-ink"
                }`}
              >
                {col.figure}
              </p>
              <p className="au-track-body hidden text-[14.5px] leading-relaxed text-on-ink-quiet md:block">
                {col.note}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="au-track-22 mt-12 max-w-3xl text-[22px] leading-snug text-on-ink md:mt-16">
          {priceBand.closing}
        </p>

        {/* Reassurance stack */}
        <div className="mt-10 md:mt-12">
          {/* Desktop: stacked */}
          <ul className="hidden flex-col gap-3 md:flex">
            {priceBand.stack.map((s) => (
              <li key={s} className="au-label text-on-ink">
                {s}
              </li>
            ))}
          </ul>
          {/* Mobile: first two merge to one line */}
          <ul className="flex flex-col gap-3 md:hidden">
            <li className="au-label text-on-ink">
              {priceBand.stack[0]} · {priceBand.stack[1]}
            </li>
            <li className="au-label text-on-ink">{priceBand.stack[2]}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
