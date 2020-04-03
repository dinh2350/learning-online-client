import React from "react";
import "./EnterpriseNav.scss";
export default function EnterpriseNav() {
  return (
    <div className="EnterpriseNavs">
      <div className="EnterpriseNavs__wrap">
        <ul className="EnterpriseNavs__list">
          <li className="EnterpriseNavs__item">solution for:</li>
          <li className="EnterpriseNavs__item">
            {" "}
            <a href="#">Business</a>
          </li>
          <li className="EnterpriseNavs__item">
            <a href="#">Higher Education</a>
          </li>
          <li className="EnterpriseNavs__item">
            <a href="#">Government</a>
          </li>
          <li className="EnterpriseNavs__item">
            <a href="#">Buy for my team</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
