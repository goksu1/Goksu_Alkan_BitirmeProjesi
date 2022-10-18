import React, { FC } from "react";
import ListItem from "../ListItem";
import { Styled } from "./List.styled";
import { ListProps } from "./List.types";
import { useNavigate } from "react-router-dom";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";

const List: FC<ListProps> = (props) => {
const {setBoardId}=useKanbanContext();
  const navigate = useNavigate();
 
  return (
    <Styled>
      {props.boards.map((board) => (
        <ListItem
          dispatches={props.dispatches}
          id={board.id}
          key={board.id}
          title={board.title}
          onClick={(e:React.MouseEvent<HTMLElement>) => {
            setBoardId(board.id)
            if(!(e.target as HTMLElement).getAttribute("data-noredirect")){
              navigate("/kanbanlist");

            }
          }}
        />
      ))}
    </Styled>
  );
};

export default List;
