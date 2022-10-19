import React, { useEffect, useState } from "react";
import { useKanbanContext } from "../../contexts/KanbanContext/KanbanContext";
import { card} from "../../services/http/endpoints/card"
import AddChecklistItemForm from "../forms/AddChecklistItemForm";
import ChecklistItem from "../lists/ChecklistItem/List/List"


const Comment = () => {
  const { state } = useKanbanContext();
  const [checklistItems, setChecklistItems] = useState<StateChecklistItemType>([]);
  const dispatches: ContextChecklistItemType = {
    addChecklistItem: (checklistItem: any) => {
      setChecklistItems((prev) => (
         [...prev, checklistItem]
      ));
    },
   
    deleteChecklistItem: (checklistItemId: number) => {
      setChecklistItems((prev) => prev.filter((checklistItem:ChecklistItem)=>{
        return checklistItem.id !== checklistItemId 
      }))
    },

    updateChecklistItem: (id: number, title: string, isChecked:boolean) => {
      setChecklistItems((prev) => (
         prev.map((che) => ({
          ...che,
          title: id === che.id ? title : che.title, 
          isChecked: id === che.id ? isChecked : che.isChecked
        }))
      ));
    },
  };

  // data.data.checklists[0].map((checklist:any)=>{
  //   return checklist.items
  // })
  useEffect(() => {
    card.getById(state.cardId).then((data) => {
      console.log('data', data)
        setChecklistItems((prev)=>{
          let list:any = []
          data.data.checklists.forEach((checklist:any)=>{
            console.log('checklist', checklist)
           list=[...list, ...checklist.items]
      console.log('list', list)
          })
          return list
        });

    });
  }, [state.cardId]);
  return (
  <>
      <AddChecklistItemForm dispatches={dispatches} checklistId={state.checklistId} checklistItemId={state.checklistItemId}/>
      <ChecklistItem dispatches={dispatches} checklistItems={checklistItems} checklists={[]} />
      </>
  );
};

export default Comment;
