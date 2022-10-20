import React, { FC, useState } from "react";
import { boardMember } from "../../../../services/http/endpoints/boardMember";
import { ListItemProps } from "./ListItem.types";
import { CardBoardMember } from "./ListItem.styled";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";
const ListItem: FC<ListItemProps> = (props) => {
  const { setBoardMemberId } = useKanbanContext();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const handleDeleteBoardMember = () => {
    console.log("handleDeleteList");
    boardMember.destroy(Number(props.id)).then(() => {
      props.dispatches.deleteBoardMember(Number(props.id));
      setIsEdit((prev) => !prev);
    });
  };

  const handleOnClick = () => {
    setBoardMemberId(props.id);
  };
  return (
    
    <CardBoardMember title="Added Member" onClick={handleOnClick}> 
    <div className="MemberAdded">
    <h1>Member:</h1>
    </div>
    <div className="list-item" data-noredirect="true">
        <span>{props.username}</span>
      </div>
      <div className="delete-list" data-noredirect="true">
        <button className="delete-button" onClick={handleDeleteBoardMember} data-noredirect="true">
        
          <span className="material-symbols-outlined" data-noredirect="true">delete</span>
        </button>
      </div>
    
    </CardBoardMember>
 
  );
};

export default ListItem;
