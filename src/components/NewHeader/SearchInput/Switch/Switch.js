import "./Switch.scss";
import imgDownarrow from "../../../../assets/image/img-header/down-arrow.svg";
import React, { Component } from "react";

export default class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSwitch: ["Job", "People", "Learning"],
      nameSwitch: "Learning",
      isSwitchInput: false
    };
  }
  // dùng để bật tắt switch
  handleClickSwitch = () => {
    this.setState({
      isSwitchInput: !this.state.isSwitchInput
    });
  };
  //chọn item switcg
  onClickChooseItem = item => {
    this.setState({
      nameSwitch: item
    });
    this.props.handleClick(item);
  };
  //show item switch
  showItemSwitch = () => {
    let { listSwitch, nameSwitch, isSwitchInput } = this.state;
    return (
      isSwitchInput && (
        <div className="contentSwitch">
          <h5>SEARCH FOR</h5>
          <ul>
            {listSwitch.map((item, key) => {
              return nameSwitch == item ? (
                <li
                  className="contentSwitch__item-choose"
                  onClick={() => this.onClickChooseItem(item)}
                  key={key}
                >
                  <div className="contentSwitch__item">{item}</div>
                </li>
              ) : (
                <li onClick={() => this.onClickChooseItem(item)} key={key}>
                  <div className="contentSwitch__item">{item}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )
    );
  };
  render() {
    let { nameSwitch } = this.state;
    return (
      <div className="Switch">
        <button onClick={this.handleClickSwitch}>
          <span>{nameSwitch}</span>
          <img src={imgDownarrow} />
        </button>
        {this.showItemSwitch()}
      </div>
    );
  }
}
