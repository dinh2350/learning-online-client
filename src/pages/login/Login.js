import React, { useState } from "react";
import "./Login.scss";
import imgLock from "../../assets/image/img-header/lock.svg";
export default function Login() {
  let [isFocus, setIsFocus] = useState(false);
  let [isBlur, setIsBlur] = useState(false);
  const handleFocusPass = (event) => {
    if (!event.target.value) {
      setIsBlur(!isBlur);
      console.log("dang có dử liệu");
    }
  };
  const handleFocusEmail = (event) => {
    if (!event.target.value) {
      setIsFocus(!isFocus);
      console.log("dang có dử liệu");
    }
  };
  return (
    <div for="label-email_1" className="login">
      <div className="login__wrap">
        <img src={imgLock} />
        <h2>Sign</h2>
        <form className="login__group-input">
          <div
            className={`login__group-input__item width-input ${
              isFocus && "width-input-focus"
            }`}
          >
            <input
              tpye="text"
              id="label-email_2"
              onFocus={handleFocusEmail}
              onBlur={handleFocusEmail}
            />

            <label
              className={`login__group-input__item__label ${
                isFocus && "login__group-input__item__focus"
              }`}
            >
              Email Address
            </label>
          </div>
          <div
            className={`login__group-input__item width-input ${
              isBlur && "width-input-focus"
            }`}
          >
            <input
              tpye="text"
              onFocus={handleFocusPass}
              onBlur={handleFocusPass}
            />
            <label
              className={`login__group-input__item__label ${
                isBlur && "login__group-input__item__focus"
              }`}
            >
              Password
            </label>
          </div>
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
        <button className="login__btn-sign">SIGN IN</button>
        <div className="muiGrid-container">
          <a href="#">Forgot password?</a>
          <a href="#">Don't have an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
}
