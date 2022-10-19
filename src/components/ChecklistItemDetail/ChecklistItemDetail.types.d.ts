type StateChecklistItemType = ChecklistItem[];
type ChecklistItem = { id: number; title: string, isChecked:boolean ,item:any};
type ContextChecklistItemType = {
  addChecklistItem: (checklistitem: ChecklistItem) => void;
  updateChecklistItem: (id: number, title:string, isChecked:boolean) => void;
  // selectChecklistItem: (checklistId: number) => void;
  deleteChecklistItem:(checklistItemId: number) => void;
};