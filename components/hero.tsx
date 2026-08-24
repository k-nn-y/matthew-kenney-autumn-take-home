import { FadingImage } from "@/components/fading-image"
import { Wordmark } from "@/components/wordmark"
import { ArrowIcon } from "@/components/primitives"
import { hero, MAILTO } from "@/lib/content"

export function Hero() {
  return (
    <div className="au-plate relative h-[782px] w-full md:h-[860px]">
      {/* Hero photograph — the LCP */}
      <FadingImage
        src="/images/houses-water.png"
        alt="Clapboard houses and an inn at the edge of still water in autumn"
        priority
        fill
        sizes="100vw"
        className="object-cover [object-position:26%_50%] md:[object-position:50%_46%]"
      />

      {/* Top scrim for nav legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[210px]"
        style={{
          background: "linear-gradient(to bottom, rgba(17,17,18,0.55), rgba(17,17,18,0))",
        }}
      />

      {/* Bottom legibility scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[740px] md:h-[700px]"
        style={{
          background:
            "linear-gradient(to top, rgba(17,17,18,0.94) 0%, rgba(17,17,18,0.88) 24%, rgba(17,17,18,0.74) 48%, rgba(17,17,18,0.44) 74%, rgba(17,17,18,0) 100%)",
        }}
      />

      {/* Nav */}
      <header className="absolute inset-x-0 top-0">
        <div className="mx-auto flex max-w-[1312px] items-center justify-between px-6 py-6 md:px-16 md:py-8">
          <a href="#" aria-label="Autumn home" className="text-on-ink">
            <Wordmark width={113} height={17} className="hidden md:block" />
            <Wordmark width={100} height={15} className="md:hidden" />
          </a>
          <nav aria-label="Primary" className="flex items-center gap-8">
            <a href="#how-it-works" className="au-nav-link hidden md:block">
              How it works
            </a>
            <a href="#what-it-did" className="au-nav-link hidden md:block">
              What it did
            </a>
            <a href="#questions" className="au-nav-link hidden md:block">
              Questions
            </a>
            <a href={MAILTO} className="au-btn-primary">
              <span className="hidden md:inline">{hero.primary}</span>
              <span className="md:hidden">Reply</span>
              <ArrowIcon className="au-arrow" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero copy */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-[1312px] px-6 pb-14 md:px-16 md:pb-20">
          <div className="flex max-w-2xl flex-col items-start gap-6" data-hero-ctas>
            <p className="au-label hidden text-on-ink-quiet md:block">{hero.eyebrow}</p>
            <p className="au-label text-on-ink-quiet md:hidden">{hero.eyebrowMobile}</p>
            <h1 className="au-track-36 md:au-track-display text-[40px] leading-[0.96] text-on-ink md:text-[56px]">
              {hero.h1Line1}
              <br />
              {hero.h1Line2}
            </h1>
            <p className="au-track-body max-w-xl text-[19px] leading-relaxed text-on-ink">
              {hero.lead}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={MAILTO} className="au-btn-primary">
                {hero.primary}
                <ArrowIcon className="au-arrow" />
              </a>
              <a href="#what-it-did" className="au-btn-secondary-inverted">
                {hero.secondary}
              </a>
            </div>
            <hr className="w-full border-0 border-t border-rule-on-ink" />
            <p className="text-[13px] tracking-normal text-on-ink-quiet">
              {hero.strip.map((s, i) => (
                <span key={s}>
                  {i > 0 && <span aria-hidden="true"> × </span>}
                  {s}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
