import React, { useState } from "react";
import "./InputReponsive.scss";
import imgNav from "../../../assets/image/img-header/nav.png";
export default function InputReponsive(props) {
  const [isSwitch, setisSwitch] = useState(false);
  const [listSwitch, setlistSwitch] = useState(["Job", "People", "Learning"]);
  const handlClick = () => {
    setisSwitch(!isSwitch);
  };
  // hàm show list switch
  const showSwitch = () => {
    return (
      <div className="InputReponsive__switch">
        <ul className="InputReponsive__switch__list">
          {listSwitch.map((item, key) => {
            return (
              <li key={key} className="InputReponsive__switch__list__item">
                {" "}
                <div className="InputReponsive__switch__item">{item}</div>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  return (
    <div className="InputReponsive">
      <button onClick={handlClick}>
        <img src={imgNav} />
        {isSwitch && showSwitch()}
      </button>
      <input type="text" placeholder="Search skills ,subject,or sotfware" />
    </div>
  );
}
