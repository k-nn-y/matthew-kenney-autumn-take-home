import { SectionHeader } from "@/components/primitives"
import { howItWorks } from "@/lib/content"

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-label="How it works" className="border-t border-rule bg-ground">
      <div className="mx-auto max-w-[1312px] px-6 py-16 md:px-16 md:py-[128px]">
        <SectionHeader
          eyebrow={howItWorks.eyebrow}
          headline={howItWorks.headline}
          lead={howItWorks.lead}
        />

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
          {howItWorks.steps.map((step) => (
            <div key={step.label} className="flex flex-col gap-4 border-t-[1.5px] border-sash pt-6">
              <p className="au-label text-quiet">{step.label}</p>
              <h3 className="au-track-22 text-[22px] leading-snug text-ink">{step.title}</h3>
              <p className="au-track-body text-[16px] leading-relaxed text-body">{step.body}</p>
              <p className="au-track-body text-[16px] leading-relaxed text-slate-deep">
                {step.yourPart}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
