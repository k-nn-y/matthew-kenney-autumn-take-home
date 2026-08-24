import { everythingElse } from "@/lib/content"

export function EverythingElse() {
  return (
    <section aria-label="Everything else" className="border-t border-rule bg-ground">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-20 md:flex-row md:gap-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-5 md:w-2/5 md:justify-between">
          <div className="flex flex-col gap-5">
            <p className="au-label text-quiet">{everythingElse.eyebrow}</p>
            <h2 className="au-track-display text-[40px] leading-[0.96] text-balance text-ink md:text-[60px]">
              {everythingElse.headline}
            </h2>
          </div>
          <div>
            <p className="au-track-body hidden text-[19px] leading-relaxed text-body md:block">
              {everythingElse.lead}
            </p>
            <p className="au-track-body text-[19px] leading-relaxed text-body md:hidden">
              {everythingElse.leadMobile}
            </p>
          </div>
        </div>
        <ul className="flex flex-col md:w-3/5">
          {everythingElse.rows.map((row) => (
            <li key={row.label} className="border-t border-rule py-6 first:border-t-0 md:first:border-t">
              <h3 className="text-[16px] font-semibold leading-snug text-ink">{row.label}</h3>
              <p className="au-track-body mt-2 text-[16px] leading-relaxed text-body">{row.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
