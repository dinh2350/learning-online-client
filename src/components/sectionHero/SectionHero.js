import React from "react";
// import LogoContainer from "./Logo/LogoContainer";
import "./SectionHero.scss";
import LogoContainer from "./Logo/logoContainer";
import FormINFContainer from "./FormINF/FormINFContainer";
import FormSeachContainer from "./FormSeach/FormSeachContainer";
// import SearchInputContainer from "./SearchInput/SearchInputContainer";
// import BtnStartContainer from "./BtnStart/BtnStartContainer";
// import BtnSignContainer from "./BtnSign/BtnSignContainer";
// import InputReponsiveContainer from "./InputReponsive/InputReponsiveContainer";
export default function SectionHero() {
  return (
    <div className="Section-hero">
      <div className="Section-hero__wrapper">
        <div className="Section-hero_logo">
          <LogoContainer />
        </div>
        <div className="Section-hero_FormINF">
          <FormINFContainer />
        </div>
        <div className="Section-hero_FormSeach">
          <FormSeachContainer />
        </div>
      </div>
    </div>
  );
}
