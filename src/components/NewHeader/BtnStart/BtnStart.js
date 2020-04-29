import React from "react";
import { Link } from "react-router-dom";
import "./BtnStart.scss";

export default function BtnStart(props) {
  return (
    <div className={`BtnStart ${props.checkLogin && "hide-btn-sign-up"}`}>
      <Link to="/register/">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}
