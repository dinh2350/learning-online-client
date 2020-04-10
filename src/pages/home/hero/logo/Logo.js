import React from "react";
import imgLogo from "../../../../assets/image/logo.svg";
import "./Logo.scss";
export default function Logo() {
  return (
    <div className="Logo">
      <img src={imgLogo} />
    </div>
  );
}
