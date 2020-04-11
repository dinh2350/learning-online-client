import "./SearchInput.scss";
import InputContainer from "./Input/InputContainer";
import imgSearch from "../../../assets/image/img-header/search.svg";
import SwitchContainer from "./Switch/SwitchContainer";
// import React, { Component } from "react";
import React from "react";

export default function SearchInput() {
  const handleClick = item => {
    console.log(item);
  };
  return (
    <div className="SearchInput">
      <SwitchContainer handleClick={handleClick} />
      <div className="Input__item">
        <InputContainer placeholder="Search skills,subject,or software" />
        <button>
          <img src={imgSearch} />
        </button>
      </div>
    </div>
  );
}
