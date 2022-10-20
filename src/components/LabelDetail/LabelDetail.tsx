import React ,{useEffect, useState} from "react";
import AddLabelForm from "../forms/AddLabelForm";
import { useKanbanContext } from "../../contexts/KanbanContext/KanbanContext";
import Label from "../lists/Label/List/List"
import { card } from "../../services/http/endpoints/card";



const LabelDetail = (props:{dispatches:ContextChecklistType}) => {
  const {  state } = useKanbanContext();
 
  return (
    <>
      <AddLabelForm dispatches={props.dispatches} cardId={state.cardId} labelId={state.labelId}/>
      
      </>
  );
};

export default LabelDetail;
