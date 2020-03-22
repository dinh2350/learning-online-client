import React from "react";
import "./Course.scss";
export default function Course() {
  return (
    <section className="course">
      <div className="course__wrapper">
        <a href="/" className="course__link">
          <div className="course__image">
            <img
              src="https://i.pinimg.com/474x/35/05/d1/3505d1eeccedf946787683e7afd4bfcf.jpg"
              alt="gai xinh"
            />
          </div>
          <h3 className="course__name">lap trinh c</h3>
          <p className="course__description">
            mon nay rat hay nha cac ban , giup cac ban hoc tot vl
          </p>
          <span className="course__view">222 view</span>
        </a>
      </div>
    </section>
  );
}
