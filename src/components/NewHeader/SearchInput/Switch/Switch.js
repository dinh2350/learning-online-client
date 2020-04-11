import "./Switch.scss";
import imgDownarrow from "../../../../assets/image/img-header/down-arrow.svg";
// import React, { Component } from "react";
import React, { useState } from "react";

export default function Switch(props) {
  const [listSwitch, setListSwitch] = useState(["Job", "People", "Learning"]);
  const [nameSwitch, setnameSwitch] = useState("Learning");
  const [isSwitchInput, setisSwitchInput] = useState(false);
  // dùng để bật tắt switch
  const handleClickSwitch = () => {
    setisSwitchInput(!isSwitchInput);
  };
  //chọn item switcg
  const onClickChooseItem = (item) => {
    setnameSwitch(item);
    setisSwitchInput(!isSwitchInput);
    props.handleClick(item);
  };
  const showItemSwitch = () => {
    return (
      <div className="contentSwitch">
        <div className="content-switch__wrap">
          <h5>SEARCH FOR</h5>
          <ul>
            {listSwitch.map((item, key) => {
              return nameSwitch == item ? (
                <li
                  className="contentSwitch__item-choose"
                  onClick={() => onClickChooseItem(item)}
                  key={key}
                >
                  <div className="contentSwitch__item">{item}</div>
                </li>
              ) : (
                <li onClick={() => onClickChooseItem(item)} key={key}>
                  <div className="contentSwitch__item">{item}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
  return (
    <div className="Switch">
      <button onClick={handleClickSwitch}>
        <span>{nameSwitch}</span>
        <img src={imgDownarrow} />
      </button>
      {showItemSwitch()}
    </div>
  );
}

// export default class Switch extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       listSwitch: ["Job", "People", "Learning"],
//       nameSwitch: "Learning",
//       isSwitchInput: false
//     };
//   }
//   // dùng để bật tắt switch
//   handleClickSwitch = () => {
//     this.setState({
//       isSwitchInput: !this.state.isSwitchInput
//     });
//   };
//   //chọn item switcg
//   onClickChooseItem = item => {
//     this.setState({
//       nameSwitch: item
//     });
//     this.props.handleClick(item);
//   };
//   //show item switch
//   showItemSwitch = () => {
//     let { listSwitch, nameSwitch, isSwitchInput } = this.state;
//     return (
//       isSwitchInput && (
//         <div className="contentSwitch">
//           <h5>SEARCH FOR</h5>
//           <ul>
//             {listSwitch.map((item, key) => {
//               return nameSwitch == item ? (
//                 <li
//                   className="contentSwitch__item-choose"
//                   onClick={() => this.onClickChooseItem(item)}
//                   key={key}
//                 >
//                   <div className="contentSwitch__item">{item}</div>
//                 </li>
//               ) : (
//                 <li onClick={() => this.onClickChooseItem(item)} key={key}>
//                   <div className="contentSwitch__item">{item}</div>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       )
//     );
//   };
//   render() {
//     let { nameSwitch } = this.state;
//     return (
//       <div className="Switch">
//         <button onClick={this.handleClickSwitch}>
//           <span>{nameSwitch}</span>
//           <img src={imgDownarrow} />
//         </button>
//         {this.showItemSwitch()}
//       </div>
//     );
//   }
// }
