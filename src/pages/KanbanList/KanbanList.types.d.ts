type StateListType = List[];
type List = { id: number; title: string };
type ContextListType = {
  addList: (list: List) => void;
  updateList: (id: number, title:string) => void;
  selectList: (listId: number) => void;
  deleteList:(listId: number) => void;
};
type StateLabelType = Label[];

type Label = { id: number; title: string };
type ContextLabelType = {
  addLabel: (label: Label) => void;
  updateLabel: (id: number, title:string) => void;
  selectLabel: (labelId: number) => void;
  deleteLabel:(labelId: number) => void;
};

