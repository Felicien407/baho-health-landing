import { Share2, Briefcase, Code, MessageCircle } from "lucide-react";
import logo from "../../assets/baho-intelligence.png";
import {
  IOS_APP_URL,
  ANDROID_APP_URL,
  ADMIN_DASHBOARD_URL,
  SURVEY_FORM_URL,
  SITE_QR_URL,
  APP_STORE_BADGE_SRC,
  GOOGLE_PLAY_BADGE_SRC,
} from "../../config/site";
import { Button } from "../ui/Button";
import { SiteQrCode } from "../shared/SiteQrCode";

export function Footer({ t }) {
  const connectLinks = [
    { href: "https://instagram.com/baho_hi", label: t("footer_social_ig"), Icon: Share2 },
    { href: "https://facebook.com/Baho Health Intelligence", label: t("footer_social_fb"), Icon: Briefcase },
    { href: "https://wa.me/250796848781", label: t("footer_social_wa"), Icon: MessageCircle },
    { href: "https://github.com/Felicien407/baho-health-landing", label: t("footer_social_gh"), Icon: Code },
  ];

  const navLinks = [
    { href: "#hero", label: t("nav_home") },
    { href: "#features", label: t("nav_features") },
    { href: "#dashboard-access", label: t("nav_dashboard") },
    { href: "#download", label: t("nav_download") },
    { href: "#contact", label: t("nav_contact") },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img
              src={logo}
              alt=""
              width={160}
              height={48}
              className="h-11 w-auto object-contain"
            />
            <p className="sr-only">Baho Health Intelligence</p>
            <p className="mt-4 max-w-sm text-sm font-normal italic leading-relaxed tracking-wide text-slate-400">
              {t("footer_tagline")}
            </p>
            <Button
              asChild
              variant="secondary"
              className="mt-6 border-health-700/50 bg-health-950/50 text-health-100 hover:bg-health-900/60"
            >
              <a
                href={SURVEY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                {t("footer_survey_cta")}
              </a>
            </Button>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-2 xl:grid-cols-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("footer_col_nav")}
              </h3>
              <ul className="mt-4 space-y-2">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("footer_col_downloads")}
              </h3>
              <div className="mt-4 flex flex-col items-start gap-3">
                <a
                  href={IOS_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-white p-2 shadow-sm ring-1 ring-white/10 transition hover:opacity-95"
                >
                  <img
                    src={APP_STORE_BADGE_SRC}
                    alt=""
                    width={180}
                    height={60}
                    className="h-9 w-auto"
                    decoding="async"
                  />
                  <span className="sr-only">{t("download_app_store_alt")}</span>
                </a>
                <a
                  href={ANDROID_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-white p-2 shadow-sm ring-1 ring-white/10 transition hover:opacity-95"
                >
                  <img
                    src={GOOGLE_PLAY_BADGE_SRC}
                    alt=""
                    width={646}
                    height={250}
                    className="h-11 w-auto"
                    decoding="async"
                  />
                  <span className="sr-only">{t("download_play_store_alt")}</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start pt-1 xl:items-center">
              <a
                href={SITE_QR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-[4px] bg-white p-2 shadow-sm ring-1 ring-white/10 transition hover:opacity-95"
                aria-label={t("site_qr_alt")}
              >
                <SiteQrCode size={120} />
              </a>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t("footer_col_connect")}
              </h3>
              <ul className="mt-4 space-y-2">
                {connectLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                    >
                      <item.Icon className="size-4 text-health-500" aria-hidden />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-2">
                {connectLinks.map((item) => {
                  const SocialIcon = item.Icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-health-600 hover:text-health-400"
                      aria-label={item.label}
                    >
                      <SocialIcon className="size-4" aria-hidden />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">{t("footer_copy")}</p>
          <a
            href={ADMIN_DASHBOARD_URL}
            className="text-sm font-semibold uppercase tracking-wide text-health-400 hover:text-health-300"
            rel="noopener noreferrer"
          >
            {t("nav_go_dashboard")}
          </a>
        </div>
      </div>
    </footer>
  );
}
