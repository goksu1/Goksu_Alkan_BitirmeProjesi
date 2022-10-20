type StateChecklistType = Checklist[];
type Checklist = { id: number; title: string, items:ChecklistItem[] };
type ContextChecklistType = {
  addChecklist: (checklist: Checklist) => void;
  updateChecklist: (id: number, title:string) => void;
  selectChecklist: (checklistId: number) => void;
  deleteChecklist:(checklistId: number) => void;
  addLabel: (label: Label) => void;
  deleteLabel:(labelId: number) => void;
};

