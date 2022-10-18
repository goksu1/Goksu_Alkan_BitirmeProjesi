type StateBoardType = Board[]; 

type Board = { id: number; title: string };

type ContextBoardType = {
    addBoard: (board: Board) => void;
    updateBoard: (id: number, title: string) => void;
    selectBoard: (boardId: number) => void;
    deleteBoard: (boardId: number) => void;
  
};