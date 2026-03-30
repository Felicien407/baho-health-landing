import { GlassCard } from "../ui/GlassCard";
import { TrendingUp, Globe, Activity } from "lucide-react";

const dashboardItems = [
  { title: "Prediction Accuracy", value: "94%", icon: TrendingUp },
  { title: "Resource Allocation", value: "Optimized", icon: Globe },
  { title: "Patient Reach", value: "2.4M", icon: Activity },
];

export function Dashboard({ t }) {
  return (
    <section id="dashboard" className="section-block section-dark">
      <div className="section-header">
        <span className="section-badge">{t("trust_badge")}</span>
        <h2>{t("trust_h")}</h2>
        <p>{t("trust_sub")}</p>
      </div>

      <div className="dashboard-grid">
        {dashboardItems.map((item) => {
          const Icon = item.icon;
          return (
            <GlassCard key={item.title} className="dashboard-card">
              <div className="dashboard-card-icon">
                <Icon size={18} />
              </div>
              <p className="dashboard-card-title">{item.title}</p>
              <span className="dashboard-card-value">{item.value}</span>
            </GlassCard>
          );
        })}
      </div>

      <GlassCard className="dashboard-chart-card">
        <h3 className="dashboard-chart-title">Predictive trend</h3>
        <div className="dashboard-chart">
          {[72, 84, 90, 94, 95, 96, 94].map((height, index) => (
            <div key={index} className="dashboard-bar" style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="dashboard-chart-labels">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
