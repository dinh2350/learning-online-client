import React from "react";
import "./CricleModule.scss";
import imgCircle from "../../../assets/image/img-header/circle.jpg";
export default function CricleModule() {
  return (
    <div className="CricleModule">
      <div className="CricleModule__wrap">
        <div className="CricleModule__content">
          <h2>Drive business impact</h2>
          <h3>
            Get access to courses for your
            <a href="/"> business,</a>
            <a href="/">higher education </a>,or
            <a href="/"> government </a>
            team
          </h3>
          <div className="CircleModule__cta">
            <a href="/">Buy for my team</a>
          </div>
        </div>
        <img src={imgCircle} />
      </div>
    </div>
  );
}
