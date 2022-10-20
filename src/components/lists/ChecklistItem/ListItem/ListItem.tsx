import React, { FC, useState } from "react";
import { checklistitem } from "../../../../services/http/endpoints/checklistitem";
import { ListItemProps } from "./ListItem.types";

import { CardChecklistItem } from "./ListItem.styled";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";

const ListItem: FC<ListItemProps> = (props) => {
  const { state, setChecklistItemId } = useKanbanContext();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(props.title);

 

  const handleSave = (event: any) => {
    checklistitem
      .update(Number(props.id), {
        title: value,
        isChecked: !props.isChecked,
      })
      .then(() => {
    
        props.dispatches.updateChecklistItem(
          Number(props.id),
          value,
          !props.isChecked
        );
      })
      .finally(() => setIsEdit(false));
  };

  const handleDeleteList = () => {
    checklistitem.destroy(Number(props.id)).then(() => {
      props.dispatches.deleteChecklistItem(Number(props.id));
      setIsEdit((prev) => !prev);
    });
  };
  const handleOnClick = () => {
    setChecklistItemId(props.id);
  };

  return (

      <CardChecklistItem title="Added ChecklistItem"  onClick={handleOnClick}>
        <label
          data-noredirect="true"
          style={{
            textDecoration: props.isChecked ? "line-through" : "none",
          }}
        >
          <input
            data-noredirect="true"
            onChange={handleSave}
            type="checkbox"
            checked={props.isChecked}
            tabIndex={-1}
          ></input>
          <span>{props.title}</span>
        </label>

        <div className="delete-checklist">
          <button className="delete-button" onClick={handleDeleteList}>
            Delete
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
     
      </CardChecklistItem>
   
  );
};

export default ListItem;
