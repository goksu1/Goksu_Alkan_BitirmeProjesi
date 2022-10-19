import React, { FC, useState } from "react";
import { board } from "../../../../services/http/endpoints/board";
import BoardMemberDetail from "../../../BoardMemberDetail";
import { Input, Card } from "../../../elements";
import { InputProps } from "../../../elements/Input/Input.types";
import { Styled } from "./ListItem.styled";
import { ListItemProps } from "./ListItem.types";

const ListItem: FC<ListItemProps> = (props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(props.title);

  const handleEditClick = () => {
    props.dispatches.selectBoard(Number(props.id));
    setIsEdit((prev) => !prev);
  };

  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  const handleSave = () => {
    board
      .update(Number(props.id), {
        title: value,
        members: [],
      })
      .then(() => {
        props.dispatches.updateBoard(Number(props.id), value);
      })
      .finally(() => setIsEdit(false));
  };
  const handleDeleteBoard = () => {
    board.destroy(Number(props.id)).then(()=>{
    props.dispatches.deleteBoard(Number(props.id));
    setIsEdit((prev) => !prev);
  })
};

  return (
   
    <Styled>
      <Card title="Added Board" onClick={props.onClick}>
     
        <div className="delete-button" data-noredirect="true">
          <button
            className="delete-button"
            data-noredirect="true"
            onClick={handleDeleteBoard}
          >
            Delete
            <span className="material-symbols-outlined" data-noredirect="true">
              delete
            </span>
          </button>
        </div>
        
        <div className="list-item">
          {!isEdit ? (
            <>
              <span>{props.title}</span>
              <span
                id={props.id.toString()}
                onClick={handleEditClick}
                className="material-symbols-outlined"
                data-noredirect="true"
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
                data-noredirect="true"
              />
              <span
                id={props.id.toString()}
                onClick={handleSave}
                className="material-symbols-outlined"
                data-noredirect="true"
              >
                save
              </span>
            </>
          )}
        </div>
        <BoardMemberDetail />
      </Card>
    </Styled>
  );
};

export default ListItem;
