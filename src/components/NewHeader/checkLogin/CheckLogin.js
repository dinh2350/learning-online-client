import React from "react";
import "./CheckLogin.scss";

export default function CheckLogin(props) {
  const checkStateLogin = () => {
    if (
      localStorage.getItem("account") &&
      JSON.parse(localStorage.getItem("account"))[0].dangNhap == true
    ) {
      console.log(JSON.parse(localStorage.getItem("account")));
      props.actCheckLogin(true);
      props.actLogInAPI({
        taiKhoan: JSON.parse(localStorage.getItem("account"))[0].name,
        matKhau: JSON.parse(localStorage.getItem("account"))[0].pass,
      });
    } else {
      props.actCheckLogin(false);
      console.log("phuoc");
    }
  };
  return <div className="check-login">{checkStateLogin()}</div>;
}
