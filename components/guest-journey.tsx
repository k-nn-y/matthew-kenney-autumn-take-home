"use client"

import { useEffect, useRef, useState } from "react"
import { FadingImage } from "@/components/fading-image"
import { SectionHeader } from "@/components/primitives"
import { journey } from "@/lib/content"

/**
 * The single narrative motion moment. On FIRST viewport entry only:
 * 520ms total, four 220ms steps at 100ms stagger, cubic-bezier(0.2,0,0,1).
 * Never loops, never re-fires. prefers-reduced-motion renders final state.
 * Without JS the steps are simply visible (the "pending" class is only
 * added client-side before observing).
 */
export function GuestJourney() {
  const railRef = useRef<HTMLOListElement>(null)
  const [phase, setPhase] = useState<"idle" | "pending" | "run" | "done">("idle")
  const firedRef = useRef(false)

  useEffect(() => {
    const el = railRef.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done")
      return
    }
    // Already in view on mount? Render final state, no animation.
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setPhase("done")
      return
    }
    setPhase("pending")
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !firedRef.current) {
            firedRef.current = true
            setPhase("run")
            observer.disconnect()
          }
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section aria-label="What we actually do" className="bg-ground">
      <div className="mx-auto max-w-[1312px] px-6 py-16 md:px-16 md:py-[128px]">
        <SectionHeader
          eyebrow={journey.eyebrow}
          headline={journey.headline}
          lead={journey.lead}
          leadMobile={journey.leadMobile}
        />

        <div className="mt-14 flex flex-col gap-12 md:mt-20 md:flex-row md:gap-20">
          {/* Rail with four steps */}
          <ol
            ref={railRef}
            className={`au-journey relative flex flex-1 list-none flex-col gap-12 border-l border-wet-slate pl-8 md:gap-14 md:pl-10 ${
              phase === "pending" ? "au-journey-pending" : ""
            } ${phase === "run" ? "au-journey-run" : ""} ${phase === "done" ? "au-journey-done" : ""}`}
          >
            {journey.steps.map((step) => (
              <li key={step.place} className="au-journey-step relative">
                {/* 20px slate ring with 6px core */}
                <span
                  aria-hidden="true"
                  className="absolute top-1 -left-8 flex size-5 -translate-x-1/2 items-center justify-center rounded-full border border-wet-slate bg-ground md:-left-10"
                >
                  <span className="size-1.5 rounded-full bg-wet-slate" />
                </span>
                <p className="au-label au-tnum text-quiet">
                  {step.time} · {step.place}
                </p>
                <h3 className="au-track-body mt-3 max-w-xl text-[19px] leading-snug text-sash">
                  {"titleMobile" in step && step.titleMobile ? (
                    <>
                      <span className="hidden md:inline">{step.title}</span>
                      <span className="md:hidden">{step.titleMobile}</span>
                    </>
                  ) : (
                    step.title
                  )}
                </h3>
                {step.quote && (
                  <p className="au-track-body mt-3 text-[19px] text-slate-deep">{step.quote}</p>
                )}
                {step.body && (
                  <p className="au-track-body mt-3 max-w-xl text-[16px] leading-relaxed text-body">
                    {step.body}
                  </p>
                )}
              </li>
            ))}
          </ol>

          {/* Booking card */}
          <div className="w-full self-start rounded-[20px] border border-rule bg-ground p-[26px] md:max-w-md">
            <div className="au-plate overflow-hidden rounded-xl" style={{ aspectRatio: "4 / 3" }}>
              <FadingImage
                src="/images/breakfast-tray.png"
                alt="Breakfast tray with coffee and a croissant on a bed at an inn"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 448px"
                className="size-full object-cover [object-position:50%_58%]"
              />
            </div>
            <p className="au-label mt-6 text-quiet">{journey.card.label}</p>
            <p className="au-track-22 mt-2 text-[22px] text-ink">{journey.card.title}</p>
            <dl className="au-tnum mt-5 flex flex-col">
              {journey.card.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between border-t border-rule py-3"
                >
                  <dt className="au-track-body text-[16px] text-body">{row.label}</dt>
                  <dd className="au-track-body text-[16px] text-ink">{row.value}</dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between border-t border-rule-strong py-3">
                <dt className="au-label text-ink">{journey.card.total.label}</dt>
                <dd className="au-track-body text-[16px] text-ink">{journey.card.total.value}</dd>
              </div>
            </dl>
            {/* Ad-cost strip: outside the arithmetic */}
            <div className="mt-4 rounded-lg bg-ground-warm px-4 py-3">
              <p className="au-track-body text-[14.5px] leading-relaxed text-body">
                <span className="au-tnum text-ink">{journey.card.adCost.figure}</span>{" "}
                {journey.card.adCost.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
