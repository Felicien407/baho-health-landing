import { useEffect, useState } from "react";
import { Menu, X, Globe, LayoutDashboard } from "lucide-react";
import logo from "../../assets/baho-intelligence.png";
import { Button } from "../ui/Button";
import { ADMIN_DASHBOARD_URL, SURVEY_FORM_URL } from "../../config/site";

const navItems = (t) => [
  { id: "hero", label: t("nav_home") },
  { id: "features", label: t("nav_features") },
  { id: "dashboard-access", label: t("nav_dashboard") },
  { id: "download", label: t("nav_download") },
  { id: "contact", label: t("nav_contact") },
];

export function Navbar({ t, language, supported, switchLanguage }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = navItems(t);

  return (
    <header
      className={cnHeader(scrolled)}
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2 no-underline"
          aria-label={t("brand_aria")}
        >
          <img
            src={logo}
            alt=""
            width={140}
            height={40}
            className="h-9 w-auto object-contain sm:h-10"
          />
          <span className="sr-only">Baho Health Intelligence</span>
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label={t("nav_aria_primary")}
        >
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 transition hover:text-health-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 sm:flex"
            role="group"
            aria-label={t("nav_aria_lang")}
          >
            <Globe className="size-3.5 text-slate-500" aria-hidden />
            {supported.map((locale) => (
              <button
                key={locale}
                type="button"
                className={
                  language === locale
                    ? "rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-health-700 shadow-sm"
                    : "rounded-full px-2 py-0.5 text-xs font-medium text-slate-500 hover:text-slate-800"
                }
                onClick={() => switchLanguage(locale)}
                aria-pressed={language === locale}
              >
                {locale}
              </button>
            ))}
          </div>

          <Button asChild variant="outline" className="hidden text-xs uppercase tracking-wide sm:inline-flex">
            <a
              href={SURVEY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              {t("nav_survey")}
            </a>
          </Button>

          <Button asChild variant="primary" className="hidden sm:inline-flex">
            <a href={ADMIN_DASHBOARD_URL} className="no-underline">
              <LayoutDashboard className="size-4 shrink-0" aria-hidden />
              {t("nav_go_dashboard")}
            </a>
          </Button>

          <button
            type="button"
            className="inline-flex rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
            onClick={() => setShowMobileMenu((v) => !v)}
            aria-expanded={showMobileMenu}
            aria-label={showMobileMenu ? t("nav_close") : t("nav_open")}
          >
            {showMobileMenu ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {showMobileMenu && (
        <div
          className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden"
          role="dialog"
          aria-label={t("nav_aria_mobile")}
        >
          <div className="flex flex-col gap-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-[4px] px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-health-50 hover:text-health-800"
                onClick={() => setShowMobileMenu(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="outline" className="mt-3 w-full justify-center uppercase tracking-wide">
              <a
                href={SURVEY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
                onClick={() => setShowMobileMenu(false)}
              >
                {t("nav_survey")}
              </a>
            </Button>
            <Button asChild variant="primary" className="mt-2 w-full justify-center">
              <a
                href={ADMIN_DASHBOARD_URL}
                className="no-underline"
                onClick={() => setShowMobileMenu(false)}
              >
                <LayoutDashboard className="size-4" aria-hidden />
                {t("nav_go_dashboard")}
              </a>
            </Button>
            <div
              className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4"
              role="group"
              aria-label={t("nav_aria_lang")}
            >
              <Globe className="size-4 text-slate-500" aria-hidden />
              {supported.map((locale) => (
                <button
                  key={locale}
                  type="button"
                  className={
                    language === locale
                      ? "rounded-full bg-health-100 px-3 py-1 text-xs font-semibold text-health-800"
                      : "rounded-full px-3 py-1 text-xs text-slate-600"
                  }
                  onClick={() => switchLanguage(locale)}
                >
                  {locale}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function cnHeader(scrolled) {
  return [
    "sticky top-0 z-50 border-b transition-colors",
    scrolled
      ? "border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md"
      : "border-transparent bg-white/90 backdrop-blur-sm",
  ].join(" ");
}
