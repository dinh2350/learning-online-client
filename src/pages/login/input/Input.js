import React from "react";
import "./Input.scss";
export default function Input(props) {
  let {
    id,
    name,
    type,
    onBlur,
    onFocus,
    placeholder,
    isClick,
    onChange,
    value,
  } = props;
  return (
    <div
      className={`login__group-input__item width-input ${
        isClick && "width-input-focus"
      }`}
    >
      <input
        tpye="text"
        id={id}
        value={value}
        name={name}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        placeholder
      />

      <label
        for={id}
        className={`login__group-input__item__label ${
          isClick && "login__group-input__item__focus"
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
}
