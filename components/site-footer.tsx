import { footer, EMAIL, MAILTO } from "@/lib/content"
import { CopyAddress } from "@/components/copy-address"
import { Wordmark } from "@/components/wordmark"
import { ArrowIcon } from "@/components/primitives"

export function SiteFooter() {
  return (
    <footer id="site-footer" className="bg-sash">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-5 pb-10 pt-20 md:px-8 md:pb-12 md:pt-28">
        <div className="flex flex-col gap-8">
          <p className="au-label text-on-ink-quiet">{footer.eyebrow}</p>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
            <span className="au-track-display select-all break-all text-[28px] leading-tight text-on-ink md:text-[44px]">
              {EMAIL}
            </span>
            <CopyAddress />
          </div>
          <p className="au-track-body max-w-md text-[17px] leading-relaxed text-on-ink-quiet">{footer.line}</p>
          <a href={MAILTO} className="au-btn-on-ink self-start">
            {footer.cta}
            <ArrowIcon />
          </a>
        </div>
        <div className="flex flex-col gap-4 border-t border-rule-on-ink pt-6 md:flex-row md:items-center md:justify-between">
          <Wordmark width={88} height={13} className="text-on-ink" />
          <div className="flex items-center gap-6">
            <p className="au-track-body text-[14px] text-on-ink-quiet">{footer.bottomLeft}</p>
            <p className="au-track-body text-[14px] text-on-ink-quiet">{footer.bottomRight}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
