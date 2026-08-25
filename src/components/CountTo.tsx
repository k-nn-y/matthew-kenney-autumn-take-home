"use client";

import { useEffect, useRef, useState } from "react";

/** Decelerating, so the figure settles rather than stopping dead. */
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * A figure that counts to its value once, the first time it is 60% on screen.
 *
 * `docs/DESIGN.md` bans count-ups on every other number on the site, and that
 * still holds — this is one deliberate exception, for the one figure whose
 * whole argument is that it is lower than what the reader is used to paying.
 *
 * Three things keep it honest:
 *   - the settled value is what the server renders, so no JavaScript, a failed
 *     hydration or reduced motion all show the real number and nothing moves;
 *   - the counting digits are hidden from the accessibility tree and the real
 *     value is exposed beside them, so a screen reader is never read a number
 *     the page does not claim;
 *   - it runs once. Scrolling back never replays it.
 */
export function CountTo({
  from,
  to,
  suffix = "",
  duration = 900,
  className,
}: {
  from: number;
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [value, setValue] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let countFrame = 0;
    let settle: ReturnType<typeof setTimeout> | undefined;
    let started = false;
    let start = 0;

    const step = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(from + (to - from) * easeOut(t)));
      if (t < 1) {
        countFrame = requestAnimationFrame(step);
        return;
      }
      clearTimeout(settle);
    };

    // Measured on scroll rather than observed: this is the same mechanism the
    // guest-journey rail uses, and it does not depend on IntersectionObserver
    // delivering a first callback, which some embedded contexts never do.
    let last = 0;
    const measure = () => {
      if (started) return;
      const now = Date.now();
      if (now - last < 16) return;
      last = now;

      const box = node.getBoundingClientRect();
      const shown =
        Math.min(box.bottom, window.innerHeight) - Math.max(box.top, 0);
      if (box.height <= 0 || shown / box.height < 0.6) return;

      started = true;
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      setValue(from);
      countFrame = requestAnimationFrame(step);

      // The backstop, and the reason this is safe to do to a price at all.
      // requestAnimationFrame stalls whenever the tab stops painting — a
      // background tab, a throttled device, a stalled main thread — and
      // without this the figure would be left showing whatever number the
      // count had reached. On this page that number could be 100%, which is
      // not a rounding error, it is a lie. Time-based, not frame-based, so it
      // fires even when frames do not.
      settle = setTimeout(() => {
        if (countFrame) cancelAnimationFrame(countFrame);
        setValue(to);
      }, duration + 400);
    };

    measure();
    if (!started) {
      window.addEventListener("scroll", measure, { passive: true });
      window.addEventListener("resize", measure, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      if (countFrame) cancelAnimationFrame(countFrame);
      clearTimeout(settle);
    };
  }, [from, to, duration]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">
        {value}
        {suffix}
      </span>
      <span className="au-sr-only">
        {to}
        {suffix}
      </span>
    </span>
  );
}
