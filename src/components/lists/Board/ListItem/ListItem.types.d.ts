// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

export type ListItemProps = {
  title: string;
  id: number;
  onClick:(e:React.MouseEvent<HTMLElement>)=>void;
  dispatches: ContextBoardType;
  
};
