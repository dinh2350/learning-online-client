import React from "react";
import downArrow from "../../../assets/image/img-header/down-arrow.svg";
import "./SwitchSearch.scss";
export default function SwitchSearch() {
  return (
    <div className="SwitchSearch">
      {/* <div> */}
      <button>
        <span>Learning</span>
        <img src={downArrow} />
      </button>
      {/* </div> */}
    </div>
  );
}
