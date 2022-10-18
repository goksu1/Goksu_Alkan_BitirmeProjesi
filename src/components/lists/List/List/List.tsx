import React, { FC } from "react";
import ListItem from "../ListItem";
import { Styled } from "./List.styled";
import { ListProps } from "./List.types";

const List: FC<ListProps> = (props) => {

  return (
    <Styled>
      {props.lists.map((list:List) => (
        <ListItem
          dispatches={props.dispatches}
          id={list.id}
          key={list.id}
          title={list.title}
         
           order={0}  

              
              />
              
      ))}
      
    </Styled>
  );
};

export default List;
