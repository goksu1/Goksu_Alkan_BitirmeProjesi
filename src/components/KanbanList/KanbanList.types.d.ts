type StateListType = List[];
type List = { id: number; title: string };
type ContextListType = {
  addList: (list: List) => void;
  updateList: (id: number, title:string) => void;
  selectList: (listId: number) => void;
  deleteList:(listId: number) => void;
};



