import { useEffect, useState } from "react";
import { Menu, X, Globe, ChevronRight } from "lucide-react";
import logo from "../../assets/icon.svg";
import { Button } from "../ui/Button";

const navItems = [
  { id: "problem", labelKey: "nav_problem" },
  { id: "ecosystem", labelKey: "nav_solution" },
  { id: "intelligence", labelKey: "nav_intel" },
];

export function Navbar({ t, language, supported, switchLanguage }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar navbar-sticky" : "navbar"}>
      <div className="navbar-inner">
        <a href="#hero" className="brand-link" aria-label="Baho Health Intelligence home">
          <img src={logo} alt="Baho Health Intelligence" className="brand-logo" />
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {t(item.labelKey)}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <div className="language-switcher" role="group" aria-label="Language switcher">
            <Globe size={14} aria-hidden="true" />
            {supported.map((locale) => (
              <button
                key={locale}
                type="button"
                className={language === locale ? "language-button active" : "language-button"}
                onClick={() => switchLanguage(locale)}
                aria-pressed={language === locale}
              >
                {locale}
              </button>
            ))}
          </div>

          <Button className="navbar-cta" variant="primary" onClick={() => document.getElementById("partner").scrollIntoView({ behavior: "smooth" })}>
            {t("nav_cta")} <ChevronRight size={14} />
          </Button>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setShowMobileMenu((current) => !current)}
            aria-label={showMobileMenu ? "Close menu" : "Open menu"}
          >
            {showMobileMenu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {showMobileMenu && (
        <div className="mobile-menu" role="menu">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="mobile-link" onClick={() => setShowMobileMenu(false)}>
              {t(item.labelKey)}
            </a>
          ))}
          <Button className="mobile-cta" variant="secondary" onClick={() => setShowMobileMenu(false)}>
            {t("nav_cta")}
          </Button>
        </div>
      )}
    </header>
  );
}
