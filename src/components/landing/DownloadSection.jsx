import {
  IOS_APP_URL,
  ANDROID_APP_URL,
  APP_STORE_BADGE_SRC,
  GOOGLE_PLAY_BADGE_SRC,
  SITE_QR_URL,
} from "../../config/site";
import { SiteQrCode } from "../shared/SiteQrCode";

export function DownloadSection({ t }) {
  return (
    <section
      id="download"
      className="border-t border-slate-200 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="download-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-health-700">
              {t("download_badge")}
            </p>
            <h2
              id="download-heading"
              className="heading-section mt-3 text-2xl sm:text-3xl lg:text-4xl"
            >
              {t("download_h")}
            </h2>
            <p className="text-subtitle mx-auto mt-4 max-w-2xl lg:mx-0">
              {t("download_sub")}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap lg:justify-start lg:gap-8">
              <a
                href={IOS_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block shrink-0 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-health-600"
              >
                <img
                  src={APP_STORE_BADGE_SRC}
                  alt=""
                  width={180}
                  height={60}
                  className="h-12 w-auto sm:h-14"
                  decoding="async"
                />
                <span className="sr-only">{t("download_app_store_alt")}</span>
              </a>
              <a
                href={ANDROID_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block shrink-0 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-health-600"
              >
                <img
                  src={GOOGLE_PLAY_BADGE_SRC}
                  alt=""
                  width={646}
                  height={250}
                  className="h-[52px] w-auto sm:h-[60px]"
                  decoding="async"
                />
                <span className="sr-only">{t("download_play_store_alt")}</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <a
              href={SITE_QR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[4px] border border-slate-200 bg-white p-5 shadow-sm transition hover:border-health-200 hover:shadow-md"
              aria-label={t("site_qr_alt")}
            >
              <SiteQrCode size={200} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
