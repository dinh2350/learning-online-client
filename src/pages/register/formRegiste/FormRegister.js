import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./FormRegister.scss";
export default function FormRegister(props) {
  let history = useHistory();
  let location = useLocation();
  let [isConfirmPass, setIsComfirmPass] = useState(false);
  let [isFocus, setisFocus] = useState({
    name: { value: "", isState: false },
    account: { value: "", isState: false },
    groupCode: { value: "", isState: false },
    email: { value: "", isState: false },
    phone: { value: "", isState: false },
    password: { value: "", isState: false },
    passwordAgain: { value: "", isState: false },
  });
  const handleFocus = (event) => {
    if (!event.target.value) {
      let itemIsState = { ...isFocus[event.target.name] };
      itemIsState.isState = !isFocus[event.target.name].isState;
      setisFocus({
        ...isFocus,
        [event.target.name]: itemIsState,
      });
    }
    if (event.target.name === "passwordAgain") {
      if (event.target.value) {
        if (event.target.value !== isFocus.password.value) {
          setIsComfirmPass(true);
          event.target.value = "confirm password";
          if (isConfirmPass) {
            event.target.value = "";
            setIsComfirmPass(false);
          }
        }
      }
    }
  };
  const handleChange = (event) => {
    let itemName = { ...isFocus[event.target.name] };
    itemName.value = event.target.value;
    setisFocus({
      ...isFocus,
      [event.target.name]: itemName,
    });
  };
  const handleOnCilck = () => {
    if (isFocus.password.value === isFocus.passwordAgain.value) {
      props.actRegisterUserAPI({
        taiKhoan: isFocus.account.value,
        matKhau: isFocus.password.value,
        hoTen: isFocus.name.value,
        soDT: isFocus.phone.value,
        maNhom: isFocus.groupCode.value,
        email: isFocus.email.value,
      });
    }
  };
  const checkRegister = () => {
    if (props.registerUserErr == "") {
      props.actLocation(location.pathname);
      history.push("/login/");
    }
  };
  return (
    <>
      {checkRegister()}
      <form className="register__form">
        <div className="register__group-input">
          <div className="register__group-input__name set-input ">
            <input
              autocomplete="off"
              id="register-input-name"
              className="set-item"
              name="name"
              onBlur={handleFocus}
              onFocus={handleFocus}
              onChange={handleChange}
            />
            <label
              for="register-input-name"
              className={isFocus.name.isState && "lable-focus"}
            >
              Name
            </label>
          </div>
          <div className="register__group-input__group-account set-input">
            <input
              autocomplete="off"
              id="register-input-account"
              className="set-item"
              name="account"
              onBlur={handleFocus}
              onFocus={handleFocus}
              onChange={handleChange}
            />
            <label
              for="register-input-account"
              className={isFocus.account.isState && "lable-focus"}
            >
              Account
            </label>
          </div>
          <div className="register__group-input__group-code set-input">
            <input
              autocomplete="off"
              id="register-input-group-code"
              className="set-item"
              name="groupCode"
              onBlur={handleFocus}
              onFocus={handleFocus}
              onChange={handleChange}
            />
            <label
              for="register-input-group-code"
              className={isFocus.groupCode.isState && "lable-focus"}
            >
              Group Code
            </label>
          </div>
          <div className="register__group-input__email set-input">
            <input
              autocomplete="off"
              id="register-input-email"
              className="set-item"
              name="email"
              onBlur={handleFocus}
              onFocus={handleFocus}
              onChange={handleChange}
            />
            <label
              for="register-input-email"
              className={isFocus.email.isState && "lable-focus"}
            >
              Email Address
            </label>
          </div>
          <div className="register__group-input__phone set-input">
            <input
              autocomplete="off"
              id="register-input-phone"
              className="set-item"
              type="text"
              name="phone"
              onBlur={handleFocus}
              onFocus={handleFocus}
              onChange={handleChange}
            />
            <label
              for="register-input-phone"
              className={isFocus.phone.isState && "lable-focus"}
            >
              Phone Number
            </label>
          </div>
          <div className="register__group-input__pass set-input">
            <input
              autocomplete="off"
              id="register-input-password"
              className="set-item"
              type="password"
              name="password"
              onBlur={handleFocus}
              onFocus={handleFocus}
              onChange={handleChange}
            />
            <label
              for="register-input-password"
              className={isFocus.password.isState && "lable-focus"}
            >
              Password
            </label>
          </div>
          <div className="register__group-input__pass-again set-input">
            <input
              autocomplete="off"
              id="register-input-pass-again"
              className="set-item"
              type={isConfirmPass ? "text" : "password"}
              name="passwordAgain"
              onBlur={handleFocus}
              onFocus={handleFocus}
              onChange={handleChange}
            />
            <label
              for="register-input-pass-again"
              className={isFocus.passwordAgain.isState && "lable-focus"}
            >
              Password Again
            </label>
          </div>
        </div>
      </form>
      <span className="err-register">{props.registerUserErr}</span>
      <button onClick={handleOnCilck} className="register__form__btn-submit">
        Dang Ky
      </button>
    </>
  );
}
