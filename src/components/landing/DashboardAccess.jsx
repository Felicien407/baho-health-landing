import { LayoutDashboard, Shield } from "lucide-react";
import { Button } from "../ui/Button";
import { ADMIN_DASHBOARD_URL } from "../../config/site";

export function DashboardAccess({ t }) {
  return (
    <section
      id="dashboard-access"
      className="border-t border-slate-200 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="dashboard-access-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 rounded-[4px] border border-slate-200 bg-slate-50/60 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-health-700">
              {t("dashboard_access_badge")}
            </p>
            <h2
              id="dashboard-access-heading"
              className="heading-section mt-2 text-2xl sm:text-3xl lg:text-4xl"
            >
              {t("dashboard_access_h")}
            </h2>
            <p className="text-subtitle mt-3 max-w-xl text-slate-600">
              {t("dashboard_access_p")}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Shield className="size-4 shrink-0 text-health-600" aria-hidden />
                {t("dashboard_access_li1")}
              </li>
              <li className="flex items-center gap-2">
                <Shield className="size-4 shrink-0 text-health-600" aria-hidden />
                {t("dashboard_access_li2")}
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:items-start">
            <Button asChild variant="primary" className="justify-center sm:min-w-[240px]">
              <a
                href={ADMIN_DASHBOARD_URL}
                className="no-underline"
                rel="noopener noreferrer"
              >
                <LayoutDashboard className="size-5" aria-hidden />
                {t("dashboard_access_cta")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
