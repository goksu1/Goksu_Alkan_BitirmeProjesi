import React, { FC, useState } from "react";
import { list } from "../../../../services/http/endpoints/list";
import { Input, Card } from "../../../elements";
import { InputProps } from "../../../elements/Input/Input.types";
import { ListItemProps } from "./ListItem.types";
import CardPage from "../../../Card";
import { Styled } from "./ListItem.styled";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";
const ListItem: FC<ListItemProps> = (props) => {
  const { setLabelId } = useKanbanContext();
 
const handleOnClick= () =>{
  setLabelId(props.id)
}
  return (
    <Styled onClick={handleOnClick} >
      <Card title="Added List">
       
        <div className="list-item">
         
              <span>{props.title}</span>
              {/* <span
                id={props.id.toString()}
              
                className="material-symbols-outlined"
              >
                edit
              </span> */}
       
         
        </div>
        <CardPage />
      </Card>
    </Styled>
  );
};

export default ListItem;
