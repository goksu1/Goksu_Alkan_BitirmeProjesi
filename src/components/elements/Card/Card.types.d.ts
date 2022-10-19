import { PropsWithChildren } from "react";

export type CardProps = PropsWithChildren<{
  title: string;
  onClick?:(e:React.MouseEvent<HTMLElement>)=>void

}>;
