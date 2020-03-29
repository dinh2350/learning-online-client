import React from "react";
import launch from "../../../assets/image/img-header/launch.svg";
import "./Logo.scss";
export default function LogoContainer() {
  return (
    <div className="Logo">
      <a href="#">
        <img src={launch} />
        <p href="#"> Startup</p>
      </a>
    </div>
  );
}
