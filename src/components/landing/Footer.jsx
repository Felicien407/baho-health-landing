import { Twitter, Linkedin, Github, MapPin, Mail } from "lucide-react";

export function Footer({ t }) {
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
              {t("footer_links_connect").map((item) => (
                <li key={item}><a href="#">{item}</a></li>
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
          <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href="#" aria-label="GitHub"><Github size={16} /></a>
        </div>
      </div>

      <div className="footer-copy">{t("footer_copy")}</div>
    </footer>
  );
}
