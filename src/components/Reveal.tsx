"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A group whose children arrive in order the first time it is scrolled to.
 *
 * The resting state — what the server renders, what a reader without
 * JavaScript gets, and what `prefers-reduced-motion` gets — is the finished
 * group. `armed` is only ever set from the client, and only while the group is
 * still off screen, so nothing is ever seen being hidden.
 *
 * Measured on scroll rather than observed: the same mechanism the guest
 * journey and the pricing figure use, so every scroll-triggered thing on the
 * site works the same way.
 */
export function Reveal({
  as: Tag = "div",
  className,
  children,
  ...rest
}: {
  as?: "div" | "ol" | "ul";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const [motion, setMotion] = useState<"rest" | "armed" | "run" | "shown">(
    "rest",
  );
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen when the script runs: first entry has effectively
    // happened. Hiding it now to bring it back would be a flash, not an
    // arrival, so the group keeps its resting state.
    const box = node.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom > 0) return;

    setMotion("armed");

    /* Measured synchronously in the scroll handler, not inside a frame
       callback. `armed` means invisible, so anything that can stall — a
       background tab, a stalled main thread, an embedded context that never
       schedules frames — would otherwise strand this content off screen
       permanently. One getBoundingClientRect per scroll event is cheaper than
       that risk. */
    let last = 0;
    const measure = () => {
      const now = Date.now();
      if (now - last < 16) return;
      last = now;

      const b = node.getBoundingClientRect();
      if (b.top > window.innerHeight - 80 || b.bottom < 0) return;
      run();
    };

    const stop = () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      clearTimeout(safety);
    };

    const run = () => {
      stop();
      setMotion("run");
    };

    /* The backstop, and the reason this is safe to hide content with at all.
       `run` still animates, and an animation needs frames — so if frames have
       stopped, `run` would leave the group at opacity 0 just as `armed` did.
       This path skips the transition and simply shows the group. Hidden
       content is a bug in a way that an unplayed animation is not. */
    const safety = setTimeout(() => {
      stop();
      setMotion("shown");
    }, 3000);

    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      clearTimeout(safety);
    };
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-motion={motion}
      className={["au-reveal", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
}
