import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <section className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <span>Linkedin © 2020</span>
        </li>
        <li className="footer__item">
          <a href="/" className="footer_item-link">
            About
          </a>
        </li>
        <li className="footer__item">
          <a href="/" className="footer_item-link">
            User Agreement
          </a>
        </li>
        <li className="footer__item">
          <a href="/" className="footer_item-link">
            Privacy Policy
          </a>
        </li>
        <li className="footer__item">
          <a href="/" className="footer_item-link">
            Cookie Policy
          </a>
        </li>
        <li className="footer__item">
          <a href="/" className="footer_item-link">
            Copyright Policy
          </a>
        </li>
        <li className="footer__item">
          <a href="/" className="footer_item-link">
            Brand Policy
          </a>
        </li>
        <li className="footer__item">
          <a href="/" className="footer_item-link">
            Guest Controls
          </a>
        </li>
        <li className="footer__item">
          <a href="/" className="footer_item-link">
            Community Guidelines
          </a>
        </li>
        <li className="footer__item">
          <a href="/" className="footer_item-link">
            Language
          </a>
        </li>
      </ul>
    </section>
  );
}
