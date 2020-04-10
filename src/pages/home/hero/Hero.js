import React from "react";
import "./Hero.scss";
import banner from "../../../assets/image/logo/banner.svg";
export default function SectionHero() {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__information">
          <div className="hero__content">
            <h1>Keep learning in the moments that matter</h1>
            <p>
              Courses for every step of your career. Instructors with real-world
              experience.
            </p>
            <button className="hero__start">Start my free month</button>
            <button className="hero__buy">Buy for my team</button>
          </div>
        </div>
        <div className="hero__logo">
          <img src={banner} />
        </div>
      </div>
    </section>
  );
}
