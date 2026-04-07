import "./styles/globals.css";
import { useTranslation } from "./hooks/useTranslation";
import { Navbar } from "./components/shared/Navbar";
import { Hero } from "./components/landing/Hero";
import { Features } from "./components/landing/Features";
import { AppShowVideo } from "./components/landing/AppShowVideo";
import {
  AppScreensMarquee,
  DashboardGreenShowcase,
} from "./components/landing/AppPreview";
import { DownloadSection } from "./components/landing/DownloadSection";
import { DashboardAccess } from "./components/landing/DashboardAccess";
import { ContactSection } from "./components/landing/ContactSection";
import { Footer } from "./components/landing/Footer";

export default function App() {
  const { t, language, supported, switchLanguage } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        t={t}
        language={language}
        supported={supported}
        switchLanguage={switchLanguage}
      />
      <main>
        <Hero key={language} t={t} />
        <Features t={t} />
        <AppShowVideo t={t} />
        <AppScreensMarquee t={t} />
        <DashboardGreenShowcase t={t} />
        <DownloadSection t={t} />
        <DashboardAccess t={t} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
