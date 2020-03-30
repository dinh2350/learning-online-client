import "./SearchInput.scss";
import InputContainer from "./Input/InputContainer";
import imgSearch from "../../../assets/image/img-header/search.svg";
import SwitchContainer from "./Switch/SwitchContainer";
import React, { Component } from "react";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = item => {
    console.log(item);
  };
  render() {
    let { isSwitchInput } = this.props;
    return (
      <div className="SearchInput">
        <SwitchContainer handleClick={this.handleClick} />
        <div className="Input__item">
          <InputContainer placeholder="Search skills,subject,or software" />
          <button>
            <img src={imgSearch} />
          </button>
        </div>
      </div>
    );
  }
}
