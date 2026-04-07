import { Fragment } from "react";
import { Smartphone, Monitor } from "lucide-react";
import { media } from "../../config/media";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

const appImages = [
  { src: media.app.aiChat, altKey: "media_alt_app_ai_chat" },
  { src: media.app.aiChats, altKey: "media_alt_app_chats" },
  { src: media.app.map, altKey: "media_alt_app_map" },

];

const dashboardRows = [
  {
    src: media.dashboard.overview,
    altKey: "media_alt_dashboard_overview",
    titleKey: "scroll_r4_h",
    descKey: "scroll_r4_p",
    imageLeft: false,
  },
  {
    src: media.dashboard.analytics,
    altKey: "media_alt_dashboard_analytics",
    titleKey: "scroll_r5_h",
    descKey: "scroll_r5_p",
    imageLeft: true,
  },
  {
    src: media.dashboard.patients,
    altKey: "media_alt_dashboard_patients",
    titleKey: "scroll_r6_h",
    descKey: "scroll_r6_p",
    imageLeft: false,
  },
  {
    src: media.dashboard.healthCenter,
    altKey: "media_alt_dashboard_health_center",
    titleKey: "scroll_r7_h",
    descKey: "scroll_r7_p",
    imageLeft: true,
  },
];

function AppScreenConnector() {
  return (
    <div
      className="flex shrink-0 items-center justify-center py-2 sm:px-5 sm:py-0 md:px-8 lg:px-10"
      aria-hidden="true"
    >
      {/* Mobile: vertical link between stacked screens */}
      <div className="flex flex-col items-center gap-1 sm:hidden">
        <span className="size-1.5 rounded-full bg-health-500" />
        <div className="h-10 w-0.5 rounded-full bg-gradient-to-b from-health-400 via-health-600 to-health-400" />
        <span className="size-1.5 rounded-full bg-health-500" />
      </div>
      {/* Tablet+: horizontal link between side-by-side screens */}
      <div className="hidden items-center gap-1 sm:flex">
        <span className="size-1.5 shrink-0 rounded-full bg-health-500" />
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-health-400 via-health-600 to-health-400 md:w-16 lg:w-24" />
        <span className="size-1.5 shrink-0 rounded-full bg-health-500" />
      </div>
    </div>
  );
}

export function AppScreensMarquee({ t }) {
  return (
    <section
      id="app-showcase"
      className="relative overflow-hidden border-y border-slate-200 bg-white py-20 sm:py-24"
      aria-labelledby="app-showcase-heading"
    >
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-wider text-health-700">
          {t("app_strip_badge")}
        </p>
        <h2
          id="app-showcase-heading"
          className="heading-section mt-3 text-2xl sm:text-3xl lg:text-4xl"
        >
          {t("app_strip_h")}
        </h2>
        <p className="text-subtitle mx-auto mt-4 max-w-2xl">
          {t("app_strip_sub")}
        </p>
        <div className="mt-3 inline-flex items-center gap-2 text-health-800">
          <Smartphone className="size-4" aria-hidden />
          <span className="text-sm font-semibold">{t("preview_mobile_label")}</span>
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-center">
          {appImages.map((item, i) => (
            <Fragment key={item.src}>
              <div className="flex w-full shrink-0 justify-center sm:w-auto">
                <img
                  src={item.src}
                  alt={t(item.altKey)}
                  width={390}
                  height={844}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="max-h-[min(68vh,580px)] w-full max-w-[min(88vw,280px)] rounded-[4px] object-cover object-top shadow-[0_20px_50px_-12px_rgba(15,23,42,0.22)] ring-[3px] ring-white sm:max-w-[260px] sm:ring-4 md:max-w-[280px]"
                />
              </div>
              {i < appImages.length - 1 ? <AppScreenConnector /> : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DashboardGreenShowcase({ t }) {
  return (
    <section
      className="relative overflow-hidden bg-[#041910] text-emerald-50"
      aria-labelledby="dashboard-showcase-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(34,197,94,0.12),transparent),linear-gradient(180deg,rgba(6,78,59,0.35)_0%,transparent_40%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-4 pt-20 text-center sm:px-6 sm:pt-24 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-wider text-health-400">
          {t("dash_showcase_badge")}
        </p>
        <h2
          id="dashboard-showcase-heading"
          className="mt-3 text-balance text-2xl font-bold uppercase tracking-[0.07em] text-white sm:text-3xl lg:text-4xl"
        >
          {t("preview_web_h")}
        </h2>
        <p className="text-subtitle-on-dark mx-auto mt-4 max-w-2xl">
          {t("preview_web_p")}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 text-health-300">
          <Monitor className="size-4" aria-hidden />
          <span className="text-sm font-semibold">{t("preview_web_label")}</span>
        </div>
      </div>

      <div className="relative mt-8 space-y-0 pb-4">
        {dashboardRows.map((row, index) => (
          <DashboardGreenRow key={row.src} row={row} t={t} index={index} />
        ))}
      </div>
    </section>
  );
}

function DashboardGreenRow({ row, t, index }) {
  const { ref, visible } = useRevealOnScroll();
  const { imageLeft, src, altKey, titleKey, descKey } = row;

  const imageMotion = visible
    ? "translate-x-0 translate-y-0 opacity-100"
    : imageLeft
      ? "translate-y-10 opacity-0 lg:translate-y-0 lg:-translate-x-16"
      : "translate-y-10 opacity-0 lg:translate-y-0 lg:translate-x-16";

  const textMotion = visible
    ? "translate-x-0 translate-y-0 opacity-100"
    : imageLeft
      ? "translate-y-8 opacity-0 lg:translate-y-0 lg:translate-x-14"
      : "translate-y-8 opacity-0 lg:translate-y-0 lg:-translate-x-14";

  const band =
    index % 2 === 0
      ? "bg-[#051f15]/90"
      : "bg-[#062a1c]/95";

  return (
    <div ref={ref} className={band}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20 xl:gap-24">
        <div
          className={`order-1 flex justify-center ${imageLeft ? "lg:order-1 lg:justify-start" : "lg:order-2 lg:justify-end"} transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${imageMotion}`}
        >
          <img
            src={src}
            alt={t(altKey)}
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
            className="w-full max-h-[min(92vh,960px)] object-contain object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          />
        </div>

        <div
          className={`order-2 max-w-xl lg:max-w-none ${imageLeft ? "lg:order-2" : "lg:order-1"} transition-all delay-150 duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${textMotion}`}
        >
          <div className="mb-3 inline-flex items-center gap-2 text-health-400">
            <Monitor className="size-5 shrink-0" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-wider">
              {t("preview_web_label")}
            </span>
          </div>
          <h3 className="text-xl font-bold uppercase tracking-[0.06em] text-white sm:text-2xl">
            {t(titleKey)}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-emerald-100/80 sm:text-lg">
            {t(descKey)}
          </p>
        </div>
      </div>
    </div>
  );
}
