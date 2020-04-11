import React from "react";
import imgLogo from "../../../assets/image/img-header/logo_in.png";
import "./Logo.scss";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <div className="Logo">
      <Link to="/">
        <img src={imgLogo} />
        <span>LEARNING</span>
      </Link>
    </div>
  );
}
