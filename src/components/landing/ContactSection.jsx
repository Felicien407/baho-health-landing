import { Mail, MapPin } from "lucide-react";
import { Button } from "../ui/Button";
import { SURVEY_FORM_URL } from "../../config/site";

export function ContactSection({ t }) {
  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[4px] border border-slate-200 bg-slate-50/50 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-health-700">
                {t("contact_badge")}
              </p>
              <h2
                id="contact-heading"
                className="heading-section mt-2 text-2xl sm:text-3xl"
              >
                {t("contact_h")}
              </h2>
              <p className="text-subtitle mt-3 max-w-md">{t("contact_p")}</p>
              <Button asChild variant="primary" className="mt-6">
                <a
                  href={SURVEY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  {t("contact_cta")}
                </a>
              </Button>
            </div>
            <address className="not-italic">
              <ul className="space-y-6 text-slate-700">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-health-600" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {t("contact_email_label")}
                    </p>
                    <a
                      href="mailto:bahohealthintelligence@gmail.com"
                      className="text-sm text-health-700 underline-offset-2 hover:underline"
                    >
                      bahohealthintelligence@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-health-600" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {t("contact_office_label")}
                    </p>
                    <p className="text-sm text-slate-600">{t("footer_location")}</p>
                  </div>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
