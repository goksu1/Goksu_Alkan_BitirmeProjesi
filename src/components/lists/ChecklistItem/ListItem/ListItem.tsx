import React, { FC, useState } from "react";
import { checklistitem } from "../../../../services/http/endpoints/checklistitem";
import { Input, Card, Button } from "../../../elements";
import { InputProps } from "../../../elements/Input/Input.types";
import { ListItemProps } from "./ListItem.types";

import { Styled } from "./ListItem.styled";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";

const ListItem: FC<ListItemProps> = (props) => {
  const { setChecklistItemId } = useKanbanContext();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(props.title);

 

  const handleSave = (event: any) => {
    checklistitem
      .update(Number(props.id), {
        title: value,
        checklistId: props.checklistId,
        isChecked: event.target.checked,
      })
      .then(() => {
        props.dispatches.updateChecklistItem(
          Number(props.id),
          value,
          event.target.checked
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
    <Styled onClick={handleOnClick}>
      <Card title="Added ChecklistItem">
        <label
          data-noredirect="true"
          style={{
            textDecoration: props.isChecked ? "line-through" : undefined,
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

        <div className="delete-list">
          <button className="delete-button" onClick={handleDeleteList}>
            Delete
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
     
      </Card>
    </Styled>
  );
};

export default ListItem;
