import { useEffect, useMemo, useState } from "react";
import { LayoutDashboard } from "lucide-react";
import { Button } from "../ui/Button";
import { ADMIN_DASHBOARD_URL } from "../../config/site";

const CYCLE_MS = 5200;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function Hero({ t }) {
  const reducedMotion = usePrefersReducedMotion();
  const headlines = useMemo(
    () => [
      {
        line1: t("hero_h1_line1"),
        highlight: t("hero_h1_highlight"),
        line2: t("hero_h1_line2"),
      },
      {
        line1: t("hero_h1_b_line1"),
        highlight: t("hero_h1_b_highlight"),
        line2: t("hero_h1_b_line2"),
      },
      {
        line1: t("hero_h1_c_line1"),
        highlight: t("hero_h1_c_highlight"),
        line2: t("hero_h1_c_line2"),
      },
    ],
    [t],
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion, headlines.length]);

  const active = reducedMotion ? headlines[0] : headlines[index];

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_85%_60%_at_50%_-10%,rgba(22,101,52,0.09),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <h1
          id="hero-heading"
          className="font-display uppercase text-[1.65rem] font-bold leading-[1.12] tracking-[-0.02em] text-slate-900 sm:text-4xl sm:leading-[1.1] lg:text-[2.65rem] lg:leading-[1.08]"
        >
          <span
            key={reducedMotion ? "static" : index}
            className={`block text-balance ${reducedMotion ? "" : "hero-headline-enter"}`}
          >
            <span className="text-slate-800">{active.line1}</span>{" "}
            <span className="bg-gradient-to-r from-health-600 via-health-700 to-health-900 bg-clip-text text-transparent">
              {active.highlight}
            </span>{" "}
            <span className="text-slate-800">{active.line2}</span>
          </span>
        </h1>

        {!reducedMotion ? (
          <div
            className="mt-8 flex justify-center gap-2"
            role="presentation"
            aria-hidden="true"
          >
            {headlines.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ease-out ${
                  i === index
                    ? "w-8 bg-health-600"
                    : "w-1.5 bg-slate-200"
                }`}
              />
            ))}
          </div>
        ) : null}

        <p className="text-subtitle-lg mx-auto mt-8 max-w-xl sm:mt-10">
          {t("hero_sub")}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12">
          <Button asChild variant="primary" className="min-h-12 px-8 text-base">
            <a href="#download" className="no-underline">
              {t("cta_get_started")}
            </a>
          </Button>
          <Button asChild variant="secondary" className="min-h-12 px-8 text-base">
            <a href={ADMIN_DASHBOARD_URL} className="no-underline">
              <LayoutDashboard className="size-4" aria-hidden />
              {t("cta_view_dashboard")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
