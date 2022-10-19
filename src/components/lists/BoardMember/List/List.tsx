import React, { FC } from "react";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";
import ListItem from "../ListItem";
import { Styled } from "./List.styled";
import { ListProps } from "./List.types";

const List: FC<ListProps> = (props) => {
  const { state } = useKanbanContext();
  return (
    <Styled>
      {props.boardMembers.map((boardMember:BoardMember) => (
        <ListItem
          dispatches={props.dispatches}
          id={boardMember.id}
          key={boardMember.id}
          title={boardMember.title}
         username={boardMember.username}
         boardId={state.boardId}

              
              />
              
      ))}
      
    </Styled>
  );
};

export default List;
