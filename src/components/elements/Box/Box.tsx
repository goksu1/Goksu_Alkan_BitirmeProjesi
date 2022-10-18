import React, { FC } from "react";
import { Styled } from "./Box.styled";
import { BoxProps } from "./Box.types";

const Box: FC<BoxProps> = (props) => {
  return (
    <Styled>
      <h1>{props.title}</h1>
      {props.children}
    </Styled>
  );
};

export default Box;
