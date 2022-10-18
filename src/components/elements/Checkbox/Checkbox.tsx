import React, { ChangeEventHandler, FC, useState } from "react";
import { Styled } from "./Checkbox.styled";
import { CheckboxProps } from "./Checkbox.types";

const Checkbox: FC<CheckboxProps> = (props) => {
  const [value, setValue] = useState<boolean>(
    props.defaultValue || props.value || false
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.checked;
    setValue(val);
    props.onChange?.(e, val);
  };

  return (
    <Styled onClick={() => setValue((prev) => !prev)}>
      <input onChange={handleChange} type="checkbox" checked={value} />
      <div className="checkbox-container">
        {value ? (
          <span className="material-symbols-outlined check-icon">check</span>
        ) : null}
      </div>
      {props.label ? <span className="label">{props.label}</span> : null}
    </Styled>
  );
};

export default Checkbox;
