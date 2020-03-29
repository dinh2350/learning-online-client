import LogoContainer from "./Logo/LogoContainer";
import NavContainer from "./Nav/NavContainer";
import SearchContainer from "./Search/SearchContainer";
import "./Header.scss";
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__content">
          <LogoContainer />
          <NavContainer />
          <SearchContainer />
        </div>
      </div>
    );
  }
}
