#!/usr/bin/env bash
# Encode the Seedance hero take for scroll-scrubbing.
#
# A default long-GOP MP4 seeks badly, especially backward: the decoder has to
# walk from the last keyframe to the target frame on every seek, so scrubbing
# stutters. Short GOP trades file size for seek accuracy, which is the right
# trade for a hero that is driven by scroll position.
#
# Usage: scripts/encode-hero-scrub.sh <input.mp4> [outdir]

set -euo pipefail

IN="${1:?usage: encode-hero-scrub.sh <input.mp4> [outdir]}"
OUT="${2:-public/hero}"
mkdir -p "$OUT"

# Poster frame — this is the static hero. It renders first, and it is what
# prefers-reduced-motion and no-JS keep permanently.
ffmpeg -y -i "$IN" -vframes 1 -q:v 2 "$OUT/hero-poster.jpg"

# Every frame a keyframe. Largest file, perfect scrubbing in both directions.
ffmpeg -y -i "$IN" -an -c:v libx264 -crf 20 -g 1 -preset slow \
  -pix_fmt yuv420p -movflags +faststart "$OUT/hero-scrub-g1.mp4"

# GOP of 5 — the usual compromise. Try this one first; only fall back to g1 if
# reverse scrubbing visibly stutters on the target hardware.
ffmpeg -y -i "$IN" -an -c:v libx264 -crf 20 -g 5 -preset slow \
  -pix_fmt yuv420p -movflags +faststart "$OUT/hero-scrub-g5.mp4"

# VP9/WebM alternate — usually a good bit smaller at matched quality.
ffmpeg -y -i "$IN" -an -c:v libvpx-vp9 -crf 32 -b:v 0 -g 5 \
  -pix_fmt yuv420p "$OUT/hero-scrub-g5.webm"

echo
echo "Wrote to $OUT:"
ls -lh "$OUT" | awk 'NR>1 {printf "  %-24s %s\n", $9, $5}'
echo
echo "Ship the smallest one that scrubs cleanly. Poster loads first, video after,"
echo "and only on a fast connection."
