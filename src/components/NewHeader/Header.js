import React from "react";
import LogoContainer from "./Logo/LogoContainer";
import "./Header.scss";
import SearchInputContainer from "./SearchInput/SearchInputContainer";
import BtnStartContainer from "./BtnStart/BtnStartContainer";
import BtnSignContainer from "./BtnSign/BtnSignContainer";
export default function Header() {
  return (
    <div className="Header">
      <div className="Header__wrap">
        <LogoContainer />
        <SearchInputContainer />
        <BtnStartContainer />
        <BtnSignContainer />
      </div>
    </div>
  );
}
