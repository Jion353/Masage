import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header >
      <div className="header">
        <div className="header_logo">
          <img
            src={"/LogoMasage.png"}
            alt="Логотип масажного салону"
            className="header_logo"
          />
        </div>

        <div className="header_buttons">
        <div className="header_buttons-button">
          <a href="./" className="header_buttons-button-text">
            HOME
          </a>
        </div>
        <div className="header_buttons-button">
          <a href="staff" className="header_buttons-button-text">
            STAFF
          </a>
        </div>
        <div className="header_buttons-button">
          <a href="reserv" className="header_buttons-button-text">
            RESERV
          </a>
        </div>
        </div>

        <div className="header_phones">
          <a href="tel:+380XX XXX XXXX" className="header_phones_phone">
            +380XX XXX XXXX
          </a>
        </div>
      </div>
    </header>
  );
}
