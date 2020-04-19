import React from "react";
import "./Register.scss";
import FormRegisterContainer from "./formRegiste/FormRegisterContainer";
export default function Register(props) {
  return (
    <div className="register">
      <div className="register__wrap">
        <h2>Sign Up</h2>
        <img src={""} />
        <FormRegisterContainer />
      </div>
    </div>
  );
}
