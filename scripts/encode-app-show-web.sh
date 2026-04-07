#!/usr/bin/env bash
set -euo pipefail
# Creates web-friendly H.264 + AAC MP4 (faststart). Uses system ffmpeg, or ffmpeg from ffmpeg-static after `npm install`.
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${1:-$ROOT/public/app-show.mov}"
OUT="${2:-$ROOT/public/app-show.mp4}"

FFMPEG_BIN=""
if command -v ffmpeg >/dev/null 2>&1; then
  FFMPEG_BIN="ffmpeg"
else
  STATIC_PATH="$(cd "$ROOT" && node -p "require('ffmpeg-static')" 2>/dev/null || true)"
  if [[ -n "${STATIC_PATH}" && -f "${STATIC_PATH}" ]]; then
    [[ -x "${STATIC_PATH}" ]] || chmod u+x "${STATIC_PATH}" 2>/dev/null || true
    if [[ -x "${STATIC_PATH}" ]]; then
      FFMPEG_BIN="${STATIC_PATH}"
    fi
  fi
fi

if [[ -z "${FFMPEG_BIN}" ]]; then
  echo "No ffmpeg found. Either:" >&2
  echo "  sudo apt install ffmpeg" >&2
  echo "  or run: npm install   (adds ffmpeg-static), then retry." >&2
  exit 1
fi

"${FFMPEG_BIN}" -y -i "$SRC" \
  -vf "scale='min(1280,iw)':-2" \
  -c:v libx264 -crf 23 -preset medium \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  "$OUT"
echo "Wrote $OUT"
