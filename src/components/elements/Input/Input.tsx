import React, { FC, useState, useEffect } from "react";
import { Styled } from "./Input.styled";
import { InputProps } from "./Input.types";

const Input: FC<InputProps> = (props) => {
  const [value, setValue] = useState<string>(
    props.value || props.defaultValue || ""
  );
  const [isSecret, setIsSecret] = useState<boolean>(props.type === "password");

  const calculateType = () => {
    if (props.type === "password") {
      if (isSecret) return "password";
      else return "text";
    }
    return props.type;
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value;
    setValue(val);
    props.onChange?.(e, val);
  };

  const handleClickEye = () => {
    setIsSecret((prev) => !prev);
  };

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(props.value);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled style={props.style}>
      {props.icon ? (
        <div className="icon">
          <span className="material-symbols-outlined">{props.icon}</span>
        </div>
      ) : null}
      <input
       data-noredirect="true"
        id={props.name}
        name={props.name}
        onChange={handleChange}
        type={calculateType()}
        value={value}
        placeholder={props.placeholder}
      />
      {props.type === "password" ? (
        <button onClick={handleClickEye} className="eye-icon">
          <span className="material-symbols-outlined">
            {isSecret ? "visibility" : "visibility_off"}
          </span>
        </button>
      ) : null}
    </Styled>
  );
};

export default Input;
