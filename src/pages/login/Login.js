import React, { useState } from "react";
import "./Login.scss";
import InputContainer from "./input/InputContainer";
import imgLock from "../../assets/image/img-header/lock.svg";
export default function Login(props) {
  let accountItem = [];
  if (localStorage.getItem("account")) {
    accountItem = JSON.parse(localStorage.getItem("account"));
  }

  let [isFocuse, setIsFocus] = useState(() => {
    if (localStorage.getItem("account")) {
      return {
        taiKhoan: true,
        matKhau: true,
      };
    } else {
      return {
        matKhau: false,
        taiKhoan: false,
      };
    }
  });

  let [user, setuser] = useState(() => {
    if (localStorage.getItem("account")) {
      return {
        taiKhoan: JSON.parse(localStorage.getItem("account"))[0].name,
        matKhau: JSON.parse(localStorage.getItem("account"))[0].pass,
      };
    } else {
      return {
        taiKhoan: "",
        matKhau: "",
      };
    }
  });
  const handleChange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value });
  };
  const handleFocus = (event) => {
    if (!event.target.value) {
      setIsFocus({
        ...isFocuse,
        [event.target.name]: !isFocuse[event.target.name],
      });
    }
  };
  const handleLogin = () => {
    console.log(user);
    props.actLogInAPI(user);
    accountItem.unshift({
      name: user.taiKhoan,
      pass: user.matKhau,
    });
    localStorage.setItem("account", JSON.stringify(accountItem));
    console.log(accountItem);
  };
  const showinforuse = () => {
    if (props.user) {
      console.log("thông tin người dùng", props.user);
    }
  };

  const showSelectAccount = () => {
    return (
      <ul>
        {accountItem.map((item, index) => {
          return <li key={index}></li>;
        })}
      </ul>
    );
  };
  return (
    <div for="label-email_1" className="login">
      {showinforuse()}
      <div className="login__wrap">
        <img src={imgLock} />
        <h2>Sign</h2>
        <form className="login__group-input">
          {showSelectAccount()}
          <InputContainer
            name="taiKhoan"
            id="taiKhoan"
            type="email"
            value={user.taiKhoan}
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={handleChange}
            placeholder="Email Address"
            isClick={isFocuse.taiKhoan}
          />
          <InputContainer
            name="matKhau"
            id="matKhau"
            type="password"
            value={user.matKhau}
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={handleChange}
            placeholder="matKhau"
            isClick={isFocuse.matKhau}
          />
          <input
            type="checkbox"
            id="check-remember"
            className="login__group-input__checkbox"
          />
          <label for="check-remember" className="login__checkbox-remember">
            <div className="login__group-input__checkbox-label"></div>
            <div className="login__group-input__checkbox-content">
              Remember me
            </div>
          </label>
        </form>
        <button onClick={handleLogin} className="login__btn-sign">
          SIGN IN
        </button>
        <div className="muiGrid-container">
          <a href="#">Forgot password?</a>
          <a href="#">Don't have an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
}
