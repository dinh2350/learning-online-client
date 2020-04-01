import React from "react";
import "./PillListModule.scss";
export default function PillListModule(props) {
  const handleClickShow = () => {};
  return (
    <div className="PillListModule">
      <div className="PillListModule__wrap">
        <div className="PillListModule__cta">
          <h2 className="PillListModule__cta-title">
            Find the right course for you
          </h2>
          <p className="pill-list-module__cta-subtitle">
            Choose from over 15,000 courses, dozens added each week.
          </p>
        </div>
        <div className="pill-list-module__list-container">
          <h3>POPULAR TOPICS</h3>
          <ul>
            <li>
              <a href="#">Spreadsheets</a>{" "}
            </li>
            <li>
              <a href="#">Data Analysis</a>{" "}
            </li>
            <li>
              <a href="#">Web Development Foundations</a>{" "}
            </li>
            <li>
              <a href="#"> Project Management Institute (PMI)®</a>{" "}
            </li>
            <li>
              <a href="#"> Programming Languages</a>{" "}
            </li>
            <li>
              <a href="#"> Web Standards</a>
            </li>
            <li>
              <a href="#"> Leadership Skills</a>{" "}
            </li>
            <li>
              <a href="#">Front-End Web Development</a>{" "}
            </li>
            <li>
              <a href="#"> Design Thinking</a>
            </li>
            <li>
              <a href="#"> Management Skills</a>
            </li>
            <li>
              <a href="#"> Data Science Careers</a>
            </li>
            <li>
              <a href="#">Creativity</a>{" "}
            </li>
            <li>
              <a href="#">NASBA Continuing Professional Education (CPE)</a>{" "}
            </li>
            <li>
              <a href="#">Big Data</a>{" "}
            </li>
            <li>
              <a href="#">Layout and Composition</a>{" "}
            </li>
          </ul>
          <div onClick={handleClickShow}> show more </div>
        </div>
      </div>
    </div>
  );
}
