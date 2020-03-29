import "./Input.scss";
import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input type="text" placeholder={this.props.placeholder} />
      </div>
    );
  }
}
