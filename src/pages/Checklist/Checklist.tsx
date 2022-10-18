import React, { useEffect, useState } from "react";

import AddChecklistForm from "../../components/forms/AddChecklistForm";
import Checklist  from "../../components/lists/Checklist/List/List";
import { useKanbanContext } from "../../contexts/KanbanContext/KanbanContext";
import { card } from "../../services/http/endpoints/card";


const ChecklistPage = () => {
  const { setChecklistId, state } = useKanbanContext();
  const [checklists, setChecklists] = useState<StateChecklistType>([]);
  const dispatches: ContextChecklistType = {
    addChecklist: (checklist: any) => {
      setChecklists((prev) => (
         [...prev, checklist]
      ))
    },
 
    updateChecklist: (id: number, title: string, isChecked:boolean) => {
      setChecklists((prev) => (
         prev.map((che) => ({
          ...che,
          title: id === che.id ? title : che.title, 
          isChecked: id === che.id ? isChecked : che.isChecked
        }))
      ));
    },

    selectChecklist: (checklistId: number) => {
      setChecklistId(checklistId)
    },
    
    deleteChecklist: (checklistId: number) => {
      setChecklists((prev) => prev.filter((checklist:Checklist)=>{
        return checklist.id !== checklistId 
      }))
    }
  };

  useEffect(() => {
    card.getById(state.cardId).then((data) => {
    setChecklists(data.data.checklists);
    });
  }, [state.cardId]);

  return (
    <div style={{ marginTop: "10vh" }}>
      <AddChecklistForm dispatches={dispatches} cardId={state.cardId}/>
      <Checklist dispatches={dispatches} checklists={checklists}  />
    </div>
  );
};

export default ChecklistPage;
