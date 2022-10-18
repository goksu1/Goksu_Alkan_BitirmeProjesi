import React, { FC } from "react";
import ListItem from "../ListItem";
import { Styled } from "./List.styled";
import { ListProps } from "./List.types";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";

const List: FC<ListProps> = (props) => {
  const { state } = useKanbanContext();
  return (
    <Styled>
      {props.labels.map((label: Label) => (
        <ListItem
          dispatches={props.dispatches}
          id={label.id}
          key={label.id}
          title={label.title}
          labelId={state.labelId}
        />
      ))}
    </Styled>
  );
};

export default List;
