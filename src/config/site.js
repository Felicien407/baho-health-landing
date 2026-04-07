/** Public marketing site (encoded in QR codes). Override with VITE_PUBLIC_SITE_URL if needed. */
const publicSiteBase = (
  import.meta.env.VITE_PUBLIC_SITE_URL ?? "https://baho-rwanda.vercel.app"
).replace(/\/+$/, "");

export const PUBLIC_SITE_URL = publicSiteBase;
/** Exact string embedded in QR scanners (trailing slash as deployed). */
export const SITE_QR_URL = `${publicSiteBase}/`;

/** Live admin app (fixed URL; not read from env). */
export const ADMIN_DASHBOARD_URL = "https://bahodashboard.vercel.app/";

export const IOS_APP_URL =
  import.meta.env.VITE_IOS_APP_URL ??
  "https://apps.apple.com/app/baho-health-intelligence";

export const ANDROID_APP_URL =
  import.meta.env.VITE_ANDROID_APP_URL ??
  "https://play.google.com/store/apps/details?id=com.baho.health";

/** Partner / intake survey (Google Form) */
export const SURVEY_FORM_URL =
  import.meta.env.VITE_SURVEY_FORM_URL ??
  "https://docs.google.com/forms/d/e/1FAIpQLSf6kk1FDw7ynLCF0a56N41l6pToK_3h3W1BgbbeIs3LWajl7w/viewform?usp=header";

export const APP_STORE_BADGE_SRC = "/badges/app-store-badge.svg";
export const GOOGLE_PLAY_BADGE_SRC = "/badges/google-play-badge.png";
