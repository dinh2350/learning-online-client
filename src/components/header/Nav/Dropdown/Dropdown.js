import React, { Component } from "react";
import downArrow from "../../../../assets/image/img-header/down-arrow.svg";
import "./Dropdown.scss";

export default class Dropdown extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     isDropdown:f
  //   }
  // }

  onMouseOver = () => {
    this.props.isDropDown();

    // this.props.isDropDownHeader(this.props.isDropdown);
  };
  // onMouseOut = () => {
  //   this.props.isDropDownHeader(false);
  // };
  onMouseOutHeader = () => {
    this.props.isDropDown();
  };
  render() {
    console.log(this.props.isDropdown);
    return (
      <div className="Dropdown">
        <div className="Dropdown__switch" onMouseOver={this.onMouseOver}>
          <span>Dropdown</span>
          <img src={downArrow} />
        </div>
        {this.props.isDropdown && (
          <div className="Dropdown__list" onMouseOut={this.onMouseOutHeader}>
            <div className="Dropdown__list__item">
              <ul>
                <li>phuoc</li>
                <li>phuoc</li>
                <li>phuoc</li>
                <li>phuoc</li>
                <li>phuoc</li>
                <li>phuoc</li>
                <li>phuoc</li>
                <li>phuoc</li>
                <li>phuoc</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
