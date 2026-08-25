"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import styles from "./HeroScrub.module.css";

const SRC_WEBM = "/hero/hero-scrub.webm";
const SRC_MP4 = "/hero/hero-scrub.mp4";

/** 121 frames at 24fps. Read from the file rather than trusted from metadata. */
const FALLBACK_DURATION = 5.0416;

/* Whether this reader should get the video at all. It is a browser fact, not
   component state, so it is read as an external store: the server says no, the
   client answers once, and React reconciles the two on hydrate. */
const subscribeNever = () => () => {};
const neverOnServer = () => false;

function readShouldPlay() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;
  if (connection?.saveData) return false;
  if (connection?.effectiveType && !/4g/.test(connection.effectiveType)) return false;

  return true;
}

/**
 * The camera travels only while the reader scrolls, and reverses when they
 * scroll back — nothing on this page performs at anyone, which is the posture
 * of the offer itself. It is a decoration with a job: the hero is the one
 * place the page is allowed to be beautiful, and it still holds still unless
 * moved.
 *
 * It is strictly an enhancement on top of the still:
 *   - no JavaScript      -> the still, and the video element never exists
 *   - prefers-reduced-motion -> the still
 *   - Save-Data or a 2g/3g connection -> the still, because 3.9MB in front of
 *     the offer is worse than no motion at all
 *   - video that cannot decode -> the still, because opacity only lifts on
 *     canplaythrough
 */
export function HeroScrub({ heroId }: { heroId: string }) {
  const enabled = useSyncExternalStore(
    subscribeNever,
    readShouldPlay,
    neverOnServer,
  );
  const [ready, setReady] = useState(false);
  /* The clip is ~3.9MB. Fetching it at preload="auto" the moment the page
     parses puts it in contention with the hero photograph, which is the LCP —
     so the element is not mounted at all until the browser goes idle. The
     reader sees the still sooner and never knows why. Flipping `preload`
     after mount would not work: the fetch has already been decided. */
  const [armed, setArmed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!enabled) return;
    let idle = 0;
    const start = () => setArmed(true);
    if ("requestIdleCallback" in window) {
      idle = window.requestIdleCallback(start, { timeout: 2500 });
      return () => window.cancelIdleCallback(idle);
    }
    const id = setTimeout(start, 1200);
    return () => clearTimeout(id);
  }, [enabled]);

  // Drive currentTime from scroll position. rAF-coalesced, so a burst of
  // scroll events costs one seek per frame rather than one seek per event.
  useEffect(() => {
    const video = videoRef.current;
    const hero = document.getElementById(heroId);
    if (!enabled || !ready || !video || !hero) return;

    let frame = 0;
    let last = -1;

    const draw = () => {
      frame = 0;
      const runway = hero.offsetHeight;
      if (runway <= 0) return;

      const progress = Math.min(1, Math.max(0, window.scrollY / runway));
      const duration = Number.isFinite(video.duration)
        ? video.duration
        : FALLBACK_DURATION;
      // Stop short of the end: seeking to duration fires `ended`, and the
      // browser then snaps currentTime back to 0 — which reads as the camera
      // teleporting home the instant the hero clears the viewport. Three
      // frames of a five-second clip is not a visible loss.
      const t = progress * Math.max(0, duration - 0.125);

      // Half a frame of slack: below that the seek is invisible and the
      // decoder work is wasted.
      if (Math.abs(t - last) < 1 / 48) return;
      last = t;
      video.currentTime = t;
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [enabled, ready, heroId]);

  if (!enabled || !armed) return null;

  return (
    <video
      ref={videoRef}
      className={`${styles.layer} ${styles.video}${ready ? ` ${styles.ready}` : ""}`}
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
      onCanPlayThrough={() => {
        const video = videoRef.current;
        if (!video || ready) return;
        // Prime the decoder so the first seeks are smooth rather than
        // stepping between keyframes — then park it back at frame 0 before
        // handing control to the scroll listener, because play() is async
        // and anything it advanced would otherwise become the new zero.
        const prime = video.play();
        const settle = () => {
          video.pause();
          video.currentTime = 0;
          setReady(true);
        };
        if (prime && typeof prime.then === "function") {
          void prime.then(settle, settle);
        } else {
          settle();
        }
      }}
    >
      <source src={SRC_WEBM} type="video/webm" />
      <source src={SRC_MP4} type="video/mp4" />
    </video>
  );
}
