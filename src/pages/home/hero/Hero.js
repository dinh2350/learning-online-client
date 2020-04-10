import React from "react";
// import LogoContainer from "./Logo/LogoContainer";
import "./Hero.scss";
import LogoContainer from "./logo/logoContainer";
import FormINFContainer from "./infor/FormINFContainer";
import FormSeachContainer from "./seach/FormSeachContainer";
// import SearchInputContainer from "./SearchInput/SearchInputContainer";
// import BtnStartContainer from "./BtnStart/BtnStartContainer";
// import BtnSignContainer from "./BtnSign/BtnSignContainer";
// import InputReponsiveContainer from "./InputReponsive/InputReponsiveContainer";
export default function SectionHero() {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__logo">
          <LogoContainer />
        </div>
        <div className="hero__inf">
          <FormINFContainer />
        </div>
      </div>
    </section>
  );
}
