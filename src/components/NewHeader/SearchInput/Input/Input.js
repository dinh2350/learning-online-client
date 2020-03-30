import "./Input.scss";
import React from "react";

export default function Input(props) {
  return (
    <div className="Input">
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}
