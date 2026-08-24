"use client"

import { useState } from "react"
import { questions } from "@/lib/content"
import { SectionHeader } from "@/components/primitives"

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`au-chevron shrink-0 text-quiet ${open ? "au-chevron-open" : ""}`}
    >
      <path
        d="M3.5 6l4.5 4.5L12.5 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="questions" aria-label="Questions" className="border-t border-rule bg-ground">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-20 md:gap-16 md:px-8 md:py-28">
        <SectionHeader eyebrow={questions.eyebrow} headline={questions.headline} lead={questions.lead} />
        <ul className="flex flex-col">
          {questions.items.map((item, i) => {
            const open = openIndex === i
            return (
              <li key={item.q} className={open ? "border-t border-rule-strong" : "border-t border-rule"}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="au-faq-row flex min-h-[44px] w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="au-track-body text-[19px] font-medium leading-snug text-ink">{item.q}</span>
                  <Chevron open={open} />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`au-faq-panel ${open ? "au-faq-panel-open" : ""}`}
                >
                  <div>
                    <p className="au-track-body max-w-2xl pb-6 text-[17px] leading-relaxed text-body">{item.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
