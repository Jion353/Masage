import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header>
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
            <Link to="/" className="header_buttons-button-text">
              HOME
            </Link>
          </div>
          <div className="header_buttons-button">
            <Link to="/staff" className="header_buttons-button-text">
              STAFF
            </Link>
          </div>
          <div className="header_buttons-button">
            <Link to="/reserv" className="header_buttons-button-text">
              RESERV
            </Link>
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
