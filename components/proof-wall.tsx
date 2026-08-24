"use client"

import { useState } from "react"
import { FadingImage } from "@/components/fading-image"
import { SectionHeader } from "@/components/primitives"
import { proofWall } from "@/lib/content"

type MetricCard = typeof proofWall.cards.metric1

function PhotoMetricCard({ card }: { card: MetricCard }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-rule bg-ground">
      <div className="au-plate" style={{ aspectRatio: "3 / 2" }}>
        <FadingImage
          src={card.image}
          alt={card.alt}
          width={900}
          height={600}
          sizes="(max-width: 768px) 100vw, 416px"
          className={`size-full object-cover ${
            card.image.includes("mug") ? "[object-position:50%_84%]" : "[object-position:50%_55%]"
          }`}
        />
      </div>
      <div className="flex flex-1 flex-col p-[26px]">
        <p className="au-tnum au-track-36 text-[40px] leading-[0.96] text-ink">
          {card.figure}{" "}
          <span className="au-track-body block pt-1 text-[16px] tracking-normal text-body">
            {card.figureLabel}
          </span>
        </p>
        <p className="au-label mt-6 text-quiet">{card.provenanceLabel}</p>
        <p className="au-track-body mt-2 text-[16px] leading-relaxed text-body">
          {card.provenance}
        </p>
      </div>
    </div>
  )
}

function QuoteCard({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <figure className="flex h-full flex-col justify-between gap-8 rounded-[20px] border border-rule bg-ground p-[26px]">
      <blockquote className="au-track-body text-[19px] leading-relaxed text-ink">
        {quote}
      </blockquote>
      <figcaption className="au-track-body text-[14.5px] leading-relaxed text-quiet">
        {attribution}
      </figcaption>
    </figure>
  )
}

function GuestNoteCard() {
  const note = proofWall.cards.guestNote
  return (
    <div className="flex h-full flex-col justify-between gap-8 rounded-[20px] border border-rule bg-ground p-[26px]">
      <div>
        <p className="au-label au-tnum text-quiet">
          {note.label} · {note.stamp}
        </p>
        <p className="au-track-body mt-4 text-[19px] leading-relaxed text-ink">{note.body}</p>
      </div>
      <p className="au-track-body text-[14.5px] leading-relaxed text-quiet">{note.attribution}</p>
    </div>
  )
}

function ReservedCard() {
  const r = proofWall.cards.reserved
  return (
    <div className="flex h-full flex-col rounded-[20px] border border-dashed border-rule-strong bg-transparent p-[26px]">
      {/* 34px square mark with a 12px dash, 6px radius */}
      <span
        aria-hidden="true"
        className="flex size-[34px] items-center justify-center rounded-[6px] border border-rule-strong"
      >
        <span className="h-px w-3 bg-quiet" />
      </span>
      <p className="au-label mt-6 text-quiet">{r.label}</p>
      <p className="au-track-body mt-4 text-[16px] leading-relaxed text-body">{r.line1}</p>
      <p className="au-track-body mt-3 text-[16px] leading-relaxed text-body">{r.line2}</p>
    </div>
  )
}

export function ProofWall() {
  const [expanded, setExpanded] = useState(false)
  const { metric1, quote1, metric2, quote2 } = proofWall.cards

  return (
    <section id="what-it-did" aria-label="What it did" className="bg-ground-alt">
      <div className="mx-auto max-w-[1312px] px-6 py-16 md:px-16 md:py-[128px]">
        <SectionHeader
          eyebrow={proofWall.eyebrow}
          headline={proofWall.headline}
          lead={proofWall.lead}
        />

        {/* Desktop: six cards, 3-column grid, no stagger */}
        <div className="mt-14 hidden grid-cols-3 items-stretch gap-6 md:mt-20 md:grid">
          <PhotoMetricCard card={metric1} />
          <QuoteCard quote={quote1.quote} attribution={quote1.attribution} />
          <PhotoMetricCard card={metric2} />
          <QuoteCard quote={quote2.quote} attribution={quote2.attribution} />
          <GuestNoteCard />
          <ReservedCard />
        </div>

        {/* Mobile: four cards + labelled expander revealing two more */}
        <div className="mt-12 flex flex-col gap-5 md:hidden">
          <PhotoMetricCard card={metric1} />
          <QuoteCard quote={quote2.quote} attribution={quote2.attribution} />
          <PhotoMetricCard card={metric2} />
          <ReservedCard />
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
            className="au-track-body flex min-h-[44px] items-center justify-between gap-4 border-t border-rule py-4 text-left text-[16px] text-ink"
          >
            {proofWall.mobileExpanderLabel}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className={`au-chevron shrink-0 ${expanded ? "au-chevron-open" : ""}`}
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {expanded && (
            <div className="flex flex-col gap-5">
              <QuoteCard quote={quote1.quote} attribution={quote1.attribution} />
              <GuestNoteCard />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
