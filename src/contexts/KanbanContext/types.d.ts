export type StateType = {
  
  boardId: number;
  listId: number;
  cardId: number;
  checklistId:number;
  commentId:number;
  labelId:number;
checklistItemId:number;
boardMemberId: number;
labelId:number;
};


export type ContextType = {
  state: StateType;
  setBoardId:any;
  setListId:any;
  setCardId:any;
  setChecklistId:any;
  setCommentId:any;
  setLabelId:any;
  setChecklistItemId:any;
  setBoardMemberId: any;
  setLabelId:any;
 

};
