import { useEffect, useState } from "react";
import AddBoardMemberForm from "../forms/AddBoardMemberForm";
import  List  from "../lists/BoardMember/List";
import { useKanbanContext } from "../../contexts/KanbanContext/KanbanContext";
import { boardMember } from "../../services/http/endpoints/boardMember";


const BoardMemberDetail = () => {
  const { state } = useKanbanContext();
  const [boardMembers, setBoardMembers] = useState<StateBoardMemberType>([]);
  const dispatches: ContextBoardMemberType = {
    addBoardMember: (boardMember: any) => {
      setBoardMembers((prev) => (
         [...prev, boardMember]
      ));
    },
    updateBoardMember: (id: number, title: string) => {
      setBoardMembers((prev) => (
         prev.map((crd) => ({
          ...crd,
          title: id === crd.id ? title : crd.title,
        }))
      ));
    },
  
    deleteBoardMember: (boardMemberId: number) => {
      setBoardMembers((prev) => prev.filter((boardMember:BoardMember)=>{
        return boardMember.id !== boardMemberId 
      }))
    }
  };
 
  useEffect(() => {
   boardMember.get(state.boardId).then(({ data }) => {
      setBoardMembers((prev) => (data ));
    });
  }, []);

  return (
    <div style={{ marginTop: "10vh" }}>
      <AddBoardMemberForm dispatches={dispatches} boardId={state.boardId} />
      <List dispatches={dispatches} boardMembers={boardMembers}  />
     
    </div>
  );
};

export default BoardMemberDetail;
