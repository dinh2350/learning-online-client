import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.scss";
import InputContainer from "./input/InputContainer";
import imgLock from "../../assets/image/img-header/lock.svg";
import imgAccount from "../../assets/image/img-header/account.svg";
export default function Login(props) {
  let history = useHistory();
  let accountItem = [];
  let [isSwitch, setisSwitch] = useState(false);
  let [isChoose, setisChoose] = useState(false);
  let [isRemember, setisRemember] = useState(false);
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
  if (localStorage.getItem("account")) {
    accountItem = JSON.parse(localStorage.getItem("account"));
  }
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
    if ((event.target.name == "taiKhoan") & (isChoose == false)) {
      setisSwitch(!isSwitch);
    }
  };
  const handleLogin = () => {
    props.actLogInAPI(user);
    if (isRemember) {
      accountItem = accountItem.filter((item) => {
        return item.name != user.taiKhoan;
      });
      accountItem.unshift({
        name: user.taiKhoan,
        pass: user.matKhau,
        dangNhap: true,
      });
      localStorage.setItem("account", JSON.stringify(accountItem));
    }
    props.actCheckLogin(true);
    if (props.location) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const handleClickSwitch = (item) => {
    setisSwitch(false);
    setisChoose(false);
    setuser({
      taiKhoan: item.name,
      matKhau: item.pass,
    });
  };
  const handleMouseOVer = (item) => {
    setuser({
      taiKhoan: item.name,
      matKhau: item.pass,
    });
    setisChoose(true);
  };
  const handleMouseOut = () => {
    setuser({
      taiKhoan: JSON.parse(localStorage.getItem("account"))[0].name,
      matKhau: JSON.parse(localStorage.getItem("account"))[0].pass,
    });
    setisChoose(false);
  };
  const showSelectAccount = () => {
    return (
      isSwitch && (
        <ul className="login__group-input__switch-account">
          {accountItem.map((item, index) => {
            return (
              <li
                onMouseOut={handleMouseOut}
                onMouseOver={() => handleMouseOVer(item)}
                onClick={() => handleClickSwitch(item)}
                key={index}
                className="login__group-input__switch-account__item"
              >
                {" "}
                <img src={imgAccount} />
                <div className="login__group-input__switch-account__item__content">
                  <input type="email" value={item.name} disabled />
                  <input type="password" value={item.pass} disabled />
                </div>
              </li>
            );
          })}
        </ul>
      )
    );
  };

  const handleClickRemember = (event) => {
    setisRemember(!isRemember);
  };
  return (
    <div for="label-email_1" className="login">
      <div className="login__wrap">
        <img src={imgLock} />
        <h2>Sign</h2>

        <form className="login__group-input">
          {showSelectAccount()}
          <InputContainer
            name="taiKhoan"
            id="taiKhoan"
            type="email"
            autoComplete="off"
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
            autoComplete="off"
            value={user.matKhau}
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={handleChange}
            placeholder="Password"
            isClick={isFocuse.matKhau}
          />
          <input
            type="checkbox"
            id="check-remember"
            className="login__group-input__checkbox"
            onClick={handleClickRemember}
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
