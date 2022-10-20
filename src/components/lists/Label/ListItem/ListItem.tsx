import React, { FC, useState } from "react";
import { Input, Card } from "../../../elements";
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
      <Card title="Added Label">
       
        <div className="list-item">
         
              <span>{props.title}</span>
       
        </div>
        <CardPage />
      </Card>
    </Styled>
  );
};

export default ListItem;
