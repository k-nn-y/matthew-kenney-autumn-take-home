"use client"

import { useEffect, useState } from "react"
import { hero, MAILTO } from "@/lib/content"
import { ArrowIcon } from "@/components/primitives"

/**
 * Progressive enhancement: <768px only. Slides up once the hero CTAs leave
 * the viewport, retires when the footer enters. Never rendered without JS.
 */
export function MobileReplyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const heroCtas = document.getElementById("hero-ctas")
    const footer = document.getElementById("site-footer")
    if (!heroCtas || !footer) return

    let heroGone = false
    let footerIn = false
    const update = () => setVisible(heroGone && !footerIn)

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroGone = !entry.isIntersecting
        update()
      },
      { threshold: 0 },
    )
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        footerIn = entry.isIntersecting
        update()
      },
      { threshold: 0 },
    )
    heroObserver.observe(heroCtas)
    footerObserver.observe(footer)
    return () => {
      heroObserver.disconnect()
      footerObserver.disconnect()
    }
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={`au-reply-bar fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-ground p-3 md:hidden ${
        visible ? "au-reply-bar-visible" : ""
      }`}
    >
      <a href={MAILTO} className="au-btn-primary w-full" tabIndex={visible ? 0 : -1}>
        {hero.primary}
        <ArrowIcon className="au-arrow" />
      </a>
    </div>
  )
}
