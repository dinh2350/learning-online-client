import React from "react";
import LogoContainer from "./Logo/LogoContainer";
import "./Header.scss";
import SearchInputContainer from "./SearchInput/SearchInputContainer";
import BtnStartContainer from "./BtnStart/BtnStartContainer";
import BtnSignContainer from "./BtnSign/BtnSignContainer";
import InputReponsiveContainer from "./InputReponsive/InputReponsiveContainer";
export default function Header() {
  return (
    <div className="Header">
      <div className="Header__wrap">
        <LogoContainer />
        <SearchInputContainer />
        <div className="buttonGroup">
          <BtnStartContainer />
          <BtnSignContainer />
        </div>
      </div>
      <div className="header__inputReponsive">
        <InputReponsiveContainer />
      </div>
    </div>
  );
}
