
import React from "react";

export type ListItemProps = {
  title: string;
  id: number;
  dispatches: ContextChecklistItemType;
  boardId: number;
  listId: number;
  checklistId:number;
  cardId: number;
  isChecked:boolean;
  
};
