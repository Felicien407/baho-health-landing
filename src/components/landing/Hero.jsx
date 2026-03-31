import { motion } from "framer-motion";
import { Smartphone, LayoutDashboard, ChevronRight, HeartPulse } from "lucide-react";
import { Button } from "../ui/Button";
import { useParallax } from "../../hooks/useParallax";

export function Hero({ t }) {
  const offset = useParallax(0.12);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-content" style={{ transform: `translateY(${offset * 0.3}px)` }}>
        <span className="hero-badge">{t("hero_badge")}</span>
        <h1 className="hero-title">
          {t("hero_h1a")} <span className="hero-highlight">{t("hero_h1b")}</span>
          <br />
          {t("hero_h1c")}
        </h1>
        <p className="hero-copy">{t("hero_sub")}</p>

        <div className="hero-actions">
          <a href="#ecosystem" className="hero-link">
            <Button>
              <Smartphone size={16} /> {t("cta_patient")}
            </Button>
          </a>
          <a href="#intelligence" className="hero-link">
            <Button variant="secondary">
              <LayoutDashboard size={16} /> {t("cta_admin")}
            </Button>
          </a>
        </div>

        <div className="hero-card-wrapper">
          <motion.div
            className="hero-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-card-top">
              <span className="hero-card-pill">{t("hero_live_analysis")}</span>
              <HeartPulse size={18} />
            </div>
            <div className="hero-card-stat">2.4M</div>
            <p className="hero-card-footer">{t("hero_daily_insights")}</p>
          </motion.div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>{t("scroll")}</span>
        <div className="hero-scroll-line" aria-hidden="true" />
      </div>
    </section>
  );
}
