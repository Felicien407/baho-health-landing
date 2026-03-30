import "./styles/globals.css";
import { useTranslation } from "./hooks/useTranslation";
import { Navbar } from "./components/shared/Navbar";
import { Hero } from "./components/landing/Hero";
import { Ecosystem } from "./components/landing/Ecosystem";
import { Dashboard } from "./components/landing/Dashboard";
import { Footer } from "./components/landing/Footer";

function ProblemSection({ t }) {
  return (
    <section id="problem" className="section-block">
      <div className="section-header">
        <span className="section-badge">{t("problem_badge")}</span>
        <h2>{t("problem_h")}</h2>
        <p>{t("problem_p")}</p>
      </div>
      <div className="feature-grid">
        {t("problem_items").map((item) => (
          <div key={item} className="glass-card">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PartnerSection({ t }) {
  return (
    <section id="partner" className="partner-section section-block">
      <div className="glass-card partner-card">
        <span className="section-badge">{t("partner_badge")}</span>
        <h2>{t("partner_h")}</h2>
        <p>{t("partner_sub")}</p>
        <a className="btn btn-primary" href="mailto:contact@bahohealth.com">
          {t("partner_cta")}
        </a>
      </div>
    </section>
  );
}

export default function App() {
  const { t, language, supported, switchLanguage } = useTranslation();

  return (
    <div className="app-shell">
      <Navbar t={t} language={language} supported={supported} switchLanguage={switchLanguage} />
      <main>
        <Hero t={t} />
        <ProblemSection t={t} />
        <Ecosystem t={t} />
        <Dashboard t={t} />
        <PartnerSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
