import React, { FC, useState } from "react";
import ListItem from "../ListItem";
import { Styled } from "./List.styled";
import { ListProps } from "./List.types";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const List: FC<ListProps> = (props) => {
  
  const { state } = useKanbanContext();
  

 const onDragEnd = (result:any) => {
    const { destination, source} = result;
console.log('destination', destination)
console.log('source', source)
    if (!destination) {
        console.log("no destination");
        return;
    }

    if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        console.log("index and destination the same");
        return;
    }
    props.dispatches.handleDragDrop(destination.index, source.index)
  }


  
 
    // const [itemToMoved] = cards.splice(result.source.index, 1);
    // listsArr.splice(result.destination.index, 0, itemToMoved);
    // dispatch(listActions.setListArr(listsArr));

    // setItems((prev) => {
    //   //const temporaryArr= Array.from(itemsArr)
    //   const [itemToMoved] = prev.splice(result.source.index, 1);
    //   prev.splice(result.destination.index, 0, itemToMoved);
    //   return prev;
    // });

  return (
    <DragDropContext  onDragEnd={onDragEnd} >
    <Droppable droppableId={String(state.listId)}>
      {(provided) => (
      <div
      ref={provided.innerRef}
      {...provided.droppableProps}
     
  >
          
        <Styled>
          {props.cards.map((card: Card, index: number) => (
            <ListItem
              dispatches={props.dispatches}
              key={card.id}
              title={card.title}
              cardId={state.cardId}
              listId={state.listId}
              boardId={state.boardId}
              id={card.id}
              index={index} 
             duedate={card.duedate || 0}
            />
            
          ))}
          
        </Styled>
         {provided.placeholder}
        </div>
      )}
    </Droppable>
    </DragDropContext>

  );
};

export default List;
