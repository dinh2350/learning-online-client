import React from "react";
import "./BtnSign.scss";
import imgUser from "../../../assets/image/img-header/user.svg";
import imgIcon from "../../../assets/image/img-header/g.jpg";
import { Link, useHistory } from "react-router-dom";
import { actCheckLogin } from "../../../store/actions/userActions";
export default function BtnSign(props) {
  let accountItem = [];
  if (localStorage.getItem("account")) {
    accountItem = JSON.parse(localStorage.getItem("account"));
  }
  let history = useHistory();
  const showInforUser = () => {
    if (props.user) {
      return (
        <>
          {" "}
          <h3>{props.user.hoTen}</h3>
          <p>{props.user.email}</p>
          <p> {props.user.maNhom}</p>
        </>
      );
    }
  };
  const handleClickLogout = () => {
    props.actCheckLogin(false);
    accountItem[0].dangNhap = false;
    localStorage.setItem("account", JSON.stringify(accountItem));
    history.push("/login/");
  };
  const showUserLogin = () => {
    return (
      <>
        {props.checkLogin ? (
          <div className="infor-user">
            <img src={imgUser} />
            <div className="show-infor-user">
              <div className="show-infor-user__wrap">
                <div className="show-infor-user__login">
                  <img src={imgIcon} />
                  {showInforUser()}
                </div>
                <button className="logout" onClick={handleClickLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login/">
            {" "}
            <button>Sign In</button>
          </Link>
        )}
      </>
    );
  };
  return <div className="btn-sign">{showUserLogin()}</div>;
}
