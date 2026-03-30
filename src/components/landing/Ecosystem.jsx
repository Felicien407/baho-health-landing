import { useState } from "react";
import { Brain, Activity, TrendingUp, ShieldCheck, WifiOff, MapPin, ChevronDown } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";

const featureItems = [
  {
    icon: Brain,
    title: "AI Symptom Checker",
    description: "Natural language triage that routes patients to the right level of care.",
    tag: "Patient · NLP",
  },
  {
    icon: Activity,
    title: "Disease Monitoring",
    description: "Live aggregation of anonymized health signals across Rwanda.",
    tag: "Population · Live",
  },
  {
    icon: TrendingUp,
    title: "Outbreak Prediction",
    description: "Early alerts for health authorities before cases peak.",
    tag: "Intelligence · Alerts",
  },
  {
    icon: ShieldCheck,
    title: "Doctor-in-the-Loop",
    description: "Critical flags are reviewed by clinicians before action is taken.",
    tag: "Trust · Safety",
  },
  {
    icon: WifiOff,
    title: "Offline Mode",
    description: "Works in rural settings with intermittent connectivity.",
    tag: "Accessibility · Rural",
  },
  {
    icon: MapPin,
    title: "Medication Tracking",
    description: "Improves adherence through reminders and pharmacy integration.",
    tag: "Patient · Adherence",
  },
];

export function Ecosystem({ t }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="ecosystem" className="section-block">
      <div className="section-header">
        <span className="section-badge">{t("eco_badge")}</span>
        <h2>{t("eco_h")}</h2>
        <p>{t("eco_sub")}</p>
      </div>

      <div className="feature-grid">
        {featureItems.map((item, index) => {
          const Icon = item.icon;
          const isOpen = expanded === index;
          return (
            <GlassCard key={item.title} className="feature-card">
              <div className="feature-icon">
                <Icon size={20} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{isOpen ? item.description : `${item.description.slice(0, 60)}...`}</p>
              </div>
              <div className="feature-footer">
                <span>{item.tag}</span>
                <Button variant="secondary" className="feature-toggle" onClick={() => setExpanded(isOpen ? null : index)}>
                  {isOpen ? "Collapse" : t("eco_readmore")} <ChevronDown size={14} />
                </Button>
              </div>
            </GlassCard>
          );
        })}
      </div>

      <div className="stats-grid">
        {t("stats").map((value, index) => (
          <GlassCard key={value} className="stat-card">
            <div className="stat-value">{value}</div>
            <div className="stat-label">{t("stat_labels")[index]}</div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
