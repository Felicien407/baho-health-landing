import {
  Brain,
  LineChart,
  BellRing,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { Card } from "../ui/Card";

export function Features({ t }) {
  const items = [
    {
      icon: Brain,
      title: t("feature_pred_title"),
      description: t("feature_pred_desc"),
    },
    {
      icon: LineChart,
      title: t("feature_rt_title"),
      description: t("feature_rt_desc"),
    },
    {
      icon: BellRing,
      title: t("feature_alert_title"),
      description: t("feature_alert_desc"),
    },
    {
      icon: BarChart3,
      title: t("feature_viz_title"),
      description: t("feature_viz_desc"),
    },
    {
      icon: ShieldCheck,
      title: t("feature_sec_title"),
      description: t("feature_sec_desc"),
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-health-200/50 bg-gradient-to-b from-health-100/90 via-health-50/70 to-health-50/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="features-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-white/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-0 size-[22rem] rounded-full bg-health-200/25 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-health-700">
            {t("features_badge")}
          </p>
          <h2
            id="features-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            {t("features_h")}
          </h2>
          <p className="text-subtitle mt-3 max-w-2xl">{t("features_sub")}</p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((item) => {
            const FeatureIcon = item.icon;
            return (
              <li key={item.title}>
                <Card className="flex h-full flex-col p-5 transition hover:border-health-200 hover:shadow-md">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-[4px] bg-health-100 text-health-700">
                    <FeatureIcon className="size-5" aria-hidden />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
