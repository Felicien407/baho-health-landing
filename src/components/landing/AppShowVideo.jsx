import { useEffect, useRef, useState } from "react";
import { media } from "../../config/media";

/**
 * Prefer H.264 MP4 for broad browser playback; many `.mov` files (e.g. HEVC) won't play in Chrome/Firefox.
 * If `public/app-show.mp4` exists we use it; otherwise fall back to `app-show.mov`.
 */
function useWebVideoSource() {
  const [choice, setChoice] = useState("probing");

  useEffect(() => {
    let cancelled = false;
    const mp4Url = media.baho.appShowVideoMp4;
    fetch(mp4Url, { method: "HEAD" })
      .then((r) => {
        if (!cancelled) setChoice(r.ok ? "mp4" : "mov");
      })
      .catch(() => {
        if (!cancelled) setChoice("mov");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return choice;
}

export function AppShowVideo({ t }) {
  const videoRef = useRef(null);
  const srcChoice = useWebVideoSource();
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onError = () => setLoadError(true);
    v.addEventListener("error", onError);
    return () => v.removeEventListener("error", onError);
  }, [srcChoice]);

  const src =
    srcChoice === "mp4"
      ? media.baho.appShowVideoMp4
      : srcChoice === "mov"
        ? media.baho.appShowVideo
        : null;

  return (
    <section
      id="app-video"
      className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="app-video-heading"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-health-700">
          {t("app_video_badge")}
        </p>
        <h2
          id="app-video-heading"
          className="heading-section mt-3 text-2xl sm:text-3xl lg:text-4xl"
        >
          {t("app_video_h")}
        </h2>
        <p className="text-subtitle mx-auto mt-4 max-w-2xl">{t("app_video_sub")}</p>
      </div>

      <div className="relative mx-auto mt-10 max-w-4xl">
        <div className="overflow-hidden rounded-2xl bg-black shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/90">
          {srcChoice === "probing" || !src ? (
            <div
              className="aspect-video w-full animate-pulse bg-slate-800"
              aria-hidden
            />
          ) : (
            <div className="aspect-video w-full">
              <video
                ref={videoRef}
                key={srcChoice}
                className="h-full w-full object-contain"
                controls
                playsInline
                preload="auto"
                poster={media.baho.appShowPoster}
                aria-label={t("app_video_aria")}
              >
                {srcChoice === "mp4" ? (
                  <source src={media.baho.appShowVideoMp4} type="video/mp4" />
                ) : (
                  <source src={media.baho.appShowVideo} type="video/quicktime" />
                )}
              </video>
            </div>
          )}
        </div>

        {loadError && srcChoice !== "probing" ? (
          <p className="mt-4 text-center text-sm text-red-700" role="alert">
            {t("app_video_error")}
          </p>
        ) : null}
      </div>
    </section>
  );
}
