import { QRCodeSVG } from "qrcode.react";
import { SITE_QR_URL } from "../../config/site";

/**
 * QR code that opens the live site (default: https://baho-rwanda.vercel.app/).
 */
export function SiteQrCode({
  size = 168,
  fgColor = "#14532d",
  bgColor = "#ffffff",
  className = "",
}) {
  return (
    <QRCodeSVG
      value={SITE_QR_URL}
      size={size}
      level="M"
      marginSize={1}
      fgColor={fgColor}
      bgColor={bgColor}
      className={className}
    />
  );
}
