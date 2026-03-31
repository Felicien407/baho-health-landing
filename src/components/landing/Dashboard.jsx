import { useState } from "react";
import { GlassCard } from "../ui/GlassCard";
import { TrendingUp, Globe, Activity } from "lucide-react";

const trendValues = [72, 84, 90, 94, 95, 96, 94];
const chartWidth = 640;
const chartHeight = 220;
const chartPadding = 20;

export function Dashboard({ t }) {
  const [activeIndex, setActiveIndex] = useState(trendValues.length - 1);

  const dashboardItems = [
    { titleKey: "dashboard_accuracy", value: "94%", icon: TrendingUp },
    { titleKey: "dashboard_allocation", value: "Optimized", icon: Globe },
    { titleKey: "dashboard_reach", value: "2.4M", icon: Activity },
  ];

  const translatedDays = t("dashboard_days");
  const dayLabels = Array.isArray(translatedDays)
    ? translatedDays
    : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const minValue = Math.min(...trendValues) - 6;
  const maxValue = Math.max(...trendValues) + 4;
  const usableWidth = chartWidth - chartPadding * 2;
  const usableHeight = chartHeight - chartPadding * 2;

  const points = trendValues.map((value, index) => {
    const x = chartPadding + (usableWidth / (trendValues.length - 1)) * index;
    const y = chartHeight - chartPadding - ((value - minValue) / (maxValue - minValue)) * usableHeight;
    return { x, y, value };
  });

  const linePath = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${chartHeight - chartPadding} L ${points[0].x} ${chartHeight - chartPadding} Z`;
  const activePoint = points[activeIndex] ?? points[points.length - 1];

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const nextIndex = Math.round(relativeX * (trendValues.length - 1));
    setActiveIndex(Math.max(0, Math.min(trendValues.length - 1, nextIndex)));
  };

  return (
    <section id="intelligence" className="section-block section-dark">
      <div className="section-header">
        <span className="section-badge">{t("trust_badge")}</span>
        <h2>{t("trust_h")}</h2>
        <p>{t("trust_sub")}</p>
      </div>

      <div className="dashboard-grid">
        {dashboardItems.map((item) => {
          const Icon = item.icon;
          return (
            <GlassCard key={item.titleKey} className="dashboard-card">
              <div className="dashboard-card-icon">
                <Icon size={18} />
              </div>
              <p className="dashboard-card-title">{t(item.titleKey)}</p>
              <span className="dashboard-card-value">{item.value}</span>
            </GlassCard>
          );
        })}
      </div>

      <GlassCard className="dashboard-chart-card">
        <div className="dashboard-chart-header">
          <h3 className="dashboard-chart-title">{t("dashboard_trend")}</h3>
          <div className="dashboard-chart-summary" aria-live="polite">
            <span>{dayLabels[activeIndex]}</span>
            <strong>{trendValues[activeIndex]}%</strong>
          </div>
        </div>

        <div
          className="dashboard-chart"
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setActiveIndex(trendValues.length - 1)}
          role="img"
          aria-label={`${t("dashboard_trend")} line chart`}
        >
          <div
            className="dashboard-chart-tooltip"
            style={{ left: `${(activePoint.x / chartWidth) * 100}%` }}
          >
            <span>{dayLabels[activeIndex]}</span>
            <strong>{trendValues[activeIndex]}%</strong>
          </div>

          <svg className="dashboard-chart-svg" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
            <defs>
              <linearGradient id="dashboardTrendLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00e475" />
                <stop offset="100%" stopColor="#7cf7b7" />
              </linearGradient>
              <linearGradient id="dashboardTrendFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 228, 117, 0.26)" />
                <stop offset="100%" stopColor="rgba(0, 228, 117, 0)" />
              </linearGradient>
            </defs>

            {[0.2, 0.45, 0.7].map((ratio) => (
              <line
                key={ratio}
                className="dashboard-chart-grid"
                x1={chartPadding}
                x2={chartWidth - chartPadding}
                y1={chartPadding + usableHeight * ratio}
                y2={chartPadding + usableHeight * ratio}
              />
            ))}

            <path d={areaPath} className="dashboard-chart-area" />
            <path d={linePath} className="dashboard-chart-line" />
            <line
              className="dashboard-chart-cursor"
              x1={activePoint.x}
              x2={activePoint.x}
              y1={chartPadding}
              y2={chartHeight - chartPadding}
            />

            {points.map((point, index) => (
              <circle
                key={`${dayLabels[index]}-${point.value}`}
                className={index === activeIndex ? "dashboard-chart-point active" : "dashboard-chart-point"}
                cx={point.x}
                cy={point.y}
                r={index === activeIndex ? 6 : 4.5}
              />
            ))}
          </svg>
        </div>

        <div className="dashboard-chart-labels">
          {dayLabels.map((label, index) => (
            <span key={label} className={index === activeIndex ? "active" : ""}>
              {label}
            </span>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
