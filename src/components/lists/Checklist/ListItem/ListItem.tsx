import React, { FC, useState } from "react";
import { checklist } from "../../../../services/http/endpoints/checklist";
import { Input} from "../../../elements";
import { InputProps } from "../../../elements/Input/Input.types";
import { ListItemProps } from "./ListItem.types";

import { ChecklistCard } from "./ListItem.styled";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";
import ChecklistItemDetail from "../../../ChecklistItemDetail";

const ListItem: FC<ListItemProps> = (props) => {
  const { setChecklistId } = useKanbanContext();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(props.title);

  const handleEditClick = () => {
    props.dispatches.selectChecklist(Number(props.id));
    setIsEdit((prev) => !prev);
  };

  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  const handleSave = (event: any) => {
    console.log("event.target.checked", event.target.checked);
    checklist
      .update(Number(props.id), {
        title: value,
        cardId: props.cardId,
    items:props.items,
      
      })
      .then(() => {
        props.dispatches.updateChecklist(
          Number(props.id),
          value,
        );
      })
      .finally(() => setIsEdit(false));
  };

  const handleDeleteList = () => {
    checklist.destroy(Number(props.id)).then(() => {
      props.dispatches.deleteChecklist(Number(props.id));
      setIsEdit((prev) => !prev);
    });
  };
  const handleOnClick = () => {
    setChecklistId(props.id);
  };
  

  return (
    
      <ChecklistCard title="Added Checklist" onClick={handleOnClick}>
        <h1>Added Checklist</h1>
       
        <div className="list-item">
          {!isEdit ? (
            <>
              <span>{props.title}</span>
              <span
                id={props.id.toString()}
                onClick={handleEditClick}
                className="material-symbols-outlined"
              >
                edit
              </span>
            </>
          ) : (
            <>
              <Input
                type="text"
                value={props.title}
                placeholder=""
                onChange={handleChange}
              />
              <span
                id={props.id.toString()}
                onClick={handleSave}
                className="material-symbols-outlined"
              >
                save
              </span>
            </>
          )}
        </div>
        <div className="delete-list">
          <button className="delete-button" onClick={handleDeleteList}>
            Delete
            <span className="material-symbols-outlined">delete</span>
          </button>
          <ChecklistItemDetail />
        </div>
        
      </ChecklistCard>
    
  );
};

export default ListItem;
