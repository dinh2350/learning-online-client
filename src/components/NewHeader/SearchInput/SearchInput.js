import "./SearchInput.scss";
import InputContainer from "./Input/InputContainer";
import imgSearch from "../../../assets/image/img-header/search.svg";
import SwitchContainer from "./Switch/SwitchContainer";
import React, { Component } from "react";

export default class SearchInput extends Component {
  render() {
    let { isSwitchInput } = this.props;
    console.log(isSwitchInput);
    return (
      <div className="SearchInput">
        <SwitchContainer />
        {isSwitchInput == "Job" ? (
          <div className="Input__item">
            <InputContainer placeholder="Search job titles or companies" />
            <InputContainer placeholder="Location" />
            <button>
              <img src={imgSearch} />
            </button>
          </div>
        ) : isSwitchInput == "People" ? (
          <div className="Input__item">
            <InputContainer placeholder="First Name" />
            <InputContainer placeholder="Last Name" />
            <button>
              <img src={imgSearch} />
            </button>
          </div>
        ) : (
          <div className="Input__item">
            <InputContainer placeholder="Search skills,subject,or software" />
            <button>
              <img src={imgSearch} />
            </button>
          </div>
        )}
      </div>
    );
  }
}
