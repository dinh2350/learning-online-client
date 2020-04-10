import React from "react";
import "./Directory.scss";
export default function Directory() {
  return (
    <section className="directory">
      <div className="directory__wrapper">
        <div className="directory__logo"></div>
        <div className="directory__lists">
          <div className="directory__column">
            <p className="directory__list-item directory__list-item--heading">
              General
            </p>
            <ul className="directory__list">
              <li className="directory__list-item">
                <a className="directory__link">Sign Up</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Help Center</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">About</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Press</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Blog</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Careers</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Developers</a>
              </li>
            </ul>
          </div>
          <div className="directory__column">
            <p className="directory__list-item directory__list-item--heading">
              Browse LinkedIn
            </p>
            <ul className="directory__list">
              <li className="directory__list-item">
                <a className="directory__link">Learning</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Jobs</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Salary</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Mobile</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">ProFinder</a>
              </li>
            </ul>
          </div>
          <div className="directory__column">
            <p className="directory__list-item directory__list-item--heading">
              Business Solutions
            </p>
            <ul className="directory__list">
              <li className="directory__list-item">
                <a className="directory__link">Talent</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Marketing</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Sales</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Learning</a>
              </li>
            </ul>
          </div>
          <div className="directory__column">
            <p className="directory__list-item directory__list-item--heading">
              Directories
            </p>
            <ul className="directory__list">
              <li className="directory__list-item">
                <a className="directory__link">Members</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Jobs</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Companies</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Salaries</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Universities</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Featured</a>
              </li>
              <li className="directory__list-item">
                <a className="directory__link">Learning</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
