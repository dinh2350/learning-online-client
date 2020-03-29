import "./Switch.scss";
import imgDownarrow from "../../../../assets/image/img-header/down-arrow.svg";
import React, { Component } from "react";

export default class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSwitch: ["Job", "People", "Learning"]
    };
  }
  onClick = () => {
    this.props.actIsSwitch();
  };
  onClickItem = item => {
    this.props.actIsSwitchList(item);
  };
  render() {
    let { listSwitch } = this.state;
    let { isSwitchInput } = this.props;
    return (
      <div className="Switch">
        <button onClick={this.onClick}>
          <span>{isSwitchInput}</span>
          <img src={imgDownarrow} />
        </button>
        {this.props.isSwitch && (
          <div className="contentSwitch">
            <h5>SEARCH FOR</h5>
            <ul>
              {listSwitch.map((item, key) => {
                return isSwitchInput == item ? (
                  <li
                    className="contentSwitch__item-choose"
                    onClick={() => this.onClickItem(item)}
                    key={key}
                  >
                    <div className="contentSwitch__item">{item}</div>
                  </li>
                ) : (
                  <li onClick={() => this.onClickItem(item)} key={key}>
                    <div className="contentSwitch__item">{item}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
