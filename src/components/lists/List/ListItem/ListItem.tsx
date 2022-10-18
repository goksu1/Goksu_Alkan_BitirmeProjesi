import React, { FC, useState } from "react";
import { list } from "../../../../services/http/endpoints/list";
import { Input, Card } from "../../../elements";
import { InputProps } from "../../../elements/Input/Input.types";
import { ListItemProps } from "./ListItem.types";
import CardPage from "../../../../pages/Card";
import { Styled } from "./ListItem.styled";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";
const ListItem: FC<ListItemProps> = (props) => {
  const { state,setListId } = useKanbanContext();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(props.title);

  const handleEditClick = () => {
    props.dispatches.selectList(Number(props.id));
    setIsEdit((prev) => !prev);
  };

  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  const handleSave = () => {
    list
      .update(Number(props.id), {
        title: value,
        boardId: state.boardId,
        order: 0,
      })
      .then(() => {
        props.dispatches.updateList(Number(props.id), value);
      })
      .finally(() => setIsEdit(false));
  };

  const handleDeleteList = () => {
    console.log('handleDeleteList')
    list.destroy(Number(props.id)).then(()=>{
    props.dispatches.deleteList(Number(props.id));
    setIsEdit((prev) => !prev);
  })
};
const handleOnClick= () =>{
  setListId(props.id)
}
  return (
    <Styled onClick={handleOnClick} >
      <Card title="Added List">
        <div className="delete-list">
          <button className="delete-button" onClick={handleDeleteList}>
            Delete
            <span className="material-symbols-outlined">delete</span>
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
        <CardPage />
      </Card>
    </Styled>
  );
};

export default ListItem;
