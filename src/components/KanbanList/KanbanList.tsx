import React, { useEffect, useState } from "react";
import AddListForm from "../../components/forms/AddListForm";
import { List as ListList } from "../../components/lists/List";
import { useKanbanContext } from "../../contexts/KanbanContext/KanbanContext";
import { list } from "../../services/http/endpoints/list";



const KanbanList = () => {
  const { setListId, state } = useKanbanContext();
  const [lists, setLists] = useState<StateListType>([]);
  const dispatches: ContextListType = {
    addList: (list: any) => {
      setLists((prev) => (
         [...prev, list]
      ));
    },
    updateList: (id: number, title: string) => {
      setLists((prev) => (
         prev.map((lis) => ({
          ...lis,
          title: id === lis.id ? title : lis.title,
        }))
      ));
    },
    selectList: (ListId: number) => {
      setListId(ListId)
    },
    deleteList: (listId: number) => {
      setLists((prev) => prev.filter((list:List)=>{
        return list.id !== listId 
      }))
    }
  };
 
  useEffect(() => {
   list.get().then(({ data }) => {
      setLists((prev) => (data ));
    });
  }, []);

  return (
    <div style={{ marginTop: "10vh" }}>
      <AddListForm dispatches={dispatches} boardId={state.boardId}/>
      <ListList dispatches={dispatches} lists={lists}  />
      
    </div>
  );
};

export default KanbanList;
