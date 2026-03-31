import { Share2, Briefcase, Code, MapPin, Mail, MessageCircle } from "lucide-react";

export function Footer({ t }) {
  const connectLabels = t("footer_links_connect");
  const connectLinks = [
    { href: "https://instagram.com/baho_hi", label: connectLabels[0], Icon: Share2 },
    { href: "https://facebook.com/baho_hi", label: connectLabels[1], Icon: Briefcase },
    { href: "https://wa.me/250796848781", label: connectLabels[2], Icon: MessageCircle },
    { href: "https://github.com/Felicien407/baho-health-landing", label: connectLabels[3], Icon: Code },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <span className="brand-mark-footer">BH</span>
          <p className="footer-tagline">{t("footer_tagline")}</p>
        </div>

        <div className="footer-links-grid">
          <div>
            <h3>{t("footer_platform")}</h3>
            <ul>
              {t("footer_links_platform").map((item) => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t("footer_company")}</h3>
            <ul>
              {t("footer_links_company").map((item) => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{t("footer_connect")}</h3>
            <ul>
              {connectLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-contact">
          <MapPin size={14} />
          <span>{t("footer_location")}</span>
        </div>
        <div className="footer-contact">
          <Mail size={14} />
          <span>bahohealthintelligence@gmail.com</span>
        </div>
        <div className="footer-socials">
          {connectLinks.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-copy">{t("footer_copy")}</div>
    </footer>
  );
}
