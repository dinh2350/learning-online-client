import React from "react";
import imgLogo from "../../../assets/image/img-header/logo_in.png";
import "./Logo.scss";
export default function Logo() {
  return (
    <div className="Logo">
      <a href="#">
        <img src={imgLogo} />
        <span>LEARNING</span>
      </a>
    </div>
  );
}
