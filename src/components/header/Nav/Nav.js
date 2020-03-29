import React from "react";
import "./Nav.scss";
import DropdownContainer from "./Dropdown/DropdownContainer";
// import downArrow from "../../../assets/image/img-header.down-arrow.svg";
export default function Nav() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">
            <DropdownContainer />
          </a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}
