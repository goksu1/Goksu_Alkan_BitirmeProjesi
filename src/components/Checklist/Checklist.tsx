import React from "react";
import AddChecklistForm from "../../components/forms/AddChecklistForm";
import { useKanbanContext } from "../../contexts/KanbanContext/KanbanContext";



const ChecklistPage = (props:{dispatches:ContextChecklistType}) => {
  const {  state } = useKanbanContext();

 
  return (
      <AddChecklistForm dispatches={props.dispatches} cardId={state.cardId}/>
  );
};

export default ChecklistPage;
