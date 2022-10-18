import React, { useEffect, useState } from "react";

import AddBoardForm from "../../components/forms/AddBoardForm";
import { List as BoardList } from "../../components/lists/Board";
import { useKanbanContext } from "../../contexts/KanbanContext/KanbanContext";
import { board } from "../../services/http/endpoints/board";


const Board = () => {
  const { setBoardId} = useKanbanContext();
  const [boards, setBoards] = useState<StateBoardType>([]);
  const dispatches: ContextBoardType = {
    addBoard: (board: any) => {
      setBoards((prev) => (
         [...prev, board]
      ));
    },
 
    updateBoard: (id: number, title: string) => {
      setBoards((prev) => (
         prev.map((boa) => ({
          ...boa,
          title: id === boa.id ? title : boa.title,
        }))
      ));
    },

    selectBoard: (boardId: number) => {
      setBoardId(boardId)
    },
    
    deleteBoard: (boardId: number) => {
      setBoards((prev) => prev.filter((board:Board)=>{
        return board.id !== boardId 
      }))
    }
  };
 
  useEffect(() => {
    board.get().then(({ data }) => {
      setBoards((prev) => (data ));
    });
  }, []);

  return (
    <div style={{ marginTop: "10vh" }}>
      <AddBoardForm dispatches={dispatches}/>
      <BoardList dispatches={dispatches} boards={boards}  />
    </div>
  );
};

export default Board;
