import { useState } from "react";
import { Brain, Activity, TrendingUp, ShieldCheck, WifiOff, MapPin, ChevronDown } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";

export function Ecosystem({ t }) {
  const [expanded, setExpanded] = useState(null);

  const featureItems = [
    {
      icon: Brain,
      titleKey: "feature_1_title",
      descriptionKey: "feature_1_description",
      tagKey: "feature_1_tag",
    },
    {
      icon: Activity,
      titleKey: "feature_2_title",
      descriptionKey: "feature_2_description",
      tagKey: "feature_2_tag",
    },
    {
      icon: TrendingUp,
      titleKey: "feature_3_title",
      descriptionKey: "feature_3_description",
      tagKey: "feature_3_tag",
    },
    {
      icon: ShieldCheck,
      titleKey: "feature_4_title",
      descriptionKey: "feature_4_description",
      tagKey: "feature_4_tag",
    },
    {
      icon: WifiOff,
      titleKey: "feature_5_title",
      descriptionKey: "feature_5_description",
      tagKey: "feature_5_tag",
    },
    {
      icon: MapPin,
      titleKey: "feature_6_title",
      descriptionKey: "feature_6_description",
      tagKey: "feature_6_tag",
    },
  ];

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
          const title = t(item.titleKey);
          const description = t(item.descriptionKey);
          const tag = t(item.tagKey);
          return (
            <GlassCard key={item.titleKey} className="feature-card">
              <div className="feature-icon">
                <Icon size={20} />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{isOpen ? description : `${description.slice(0, 60)}...`}</p>
              </div>
              <div className="feature-footer">
                <span>{tag}</span>
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
