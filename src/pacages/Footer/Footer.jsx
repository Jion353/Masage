import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_info">
          <span>© 2025 Massage Salon</span>
          <span>м. Київ, вул. Прикладна, 1</span>
          <span>+380XX XXX XXXX</span>
        </div>
        <div className="footer_socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer_socials-link">
            <p>Facebook</p>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer_socials-link">
            <p>Instagram</p>
          </a>
          <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" className="footer_socials-link">
            <p>Telegram</p>
          </a>
        </div>
      </div>
      <div className="footer_bg-logo">
        <img src={process.env.PUBLIC_URL + "/LogoMasage.png"} alt="Логотип" />
      </div>
    </footer>
  );
}