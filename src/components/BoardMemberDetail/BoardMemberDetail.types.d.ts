type StateBoardMemberType = BoardMember[];
type BoardMember = { id: number; title: string, username:string };
type ContextBoardMemberType = {
  addBoardMember: (boardMember: BoardMember) => void;
  updateBoardMember: (id: number, title:string) => void;
  deleteBoardMember:(boardMemberId: number) => void;
};