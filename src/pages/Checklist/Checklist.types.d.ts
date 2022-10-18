type StateChecklistType = Checklist[];
type Checklist = { id: number; title: string, isChecked:boolean, items:ChecklistItem[] };
type ContextChecklistType = {
  addChecklist: (checklist: Checklist) => void;
  updateChecklist: (id: number, title:string, isChecked:boolean) => void;
  selectChecklist: (checklistId: number) => void;
  deleteChecklist:(checklistId: number) => void;
};

