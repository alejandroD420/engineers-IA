import React from "react";
import { QRCodeSVG } from "qrcode.react";
import "./QRCode.css";

const QRCode = ({
  url,
  size = 180,
  caption = "Escanea con tu celular",
  showLink = true,
}) => {
  return (
    <div className="qr-container">
      <div className="qr-code">
        <QRCodeSVG value={url} size={size} />
      </div>
      {caption && <p className="qr-caption">{caption}</p>}
      {showLink && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="qr-link"
        >
          o haz clic aquí ↗
        </a>
      )}
    </div>
  );
};

export default QRCode;
