import { flagship, MAILTO } from "@/lib/content"
import { FadingImage } from "@/components/fading-image"
import { ArrowIcon } from "@/components/primitives"

export function Flagship() {
  return (
    <section aria-label="The Flagship program" className="bg-ground-alt">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-[120px]">
        <div className="flex flex-col overflow-hidden rounded-sm border border-rule bg-card md:flex-row">
          <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[480px] md:w-[544px] md:shrink-0">
            <FadingImage
              src={flagship.image}
              alt={flagship.imageAlt}
              fill
              sizes="(min-width: 768px) 544px, 100vw"
              className="object-cover"
              style={{ objectPosition: "52% 50%" }}
            />
          </div>
          <div className="flex flex-col gap-8 p-[26px] md:justify-center md:p-14">
            <div className="flex flex-col gap-4">
              <p className="au-label text-quiet">{flagship.eyebrow}</p>
              <h2 className="au-track-display text-[28px] leading-[1.05] text-balance text-ink md:text-[32px]">
                {flagship.headline}
              </h2>
              <p className="au-track-body max-w-xl text-[17px] leading-relaxed text-body">{flagship.lead}</p>
            </div>
            <dl className="grid grid-cols-3 gap-6 border-t border-rule pt-6">
              {flagship.miniColumns.map((col) => (
                <div key={col.label} className="flex flex-col gap-1.5">
                  <dd className="au-track-display order-1 text-[26px] leading-none text-ink md:text-[30px]">
                    {col.figure}
                  </dd>
                  <dt className="au-label order-2 text-quiet">{col.label}</dt>
                </div>
              ))}
            </dl>
            <div className="flex flex-col gap-3">
              <a href={MAILTO} className="au-btn-primary self-start">
                {flagship.cta}
                <ArrowIcon />
              </a>
              <p className="au-track-body text-[14px] leading-relaxed text-quiet">{flagship.underCta}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
