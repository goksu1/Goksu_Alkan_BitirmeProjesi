import React, { FC, useState, Fragment, useEffect } from "react";
import { card } from "../../../../services/http/endpoints/card";
// import Checklist from "../../../../components/lists/Checklist";
import { Input, Card } from "../../../elements";
import { InputProps } from "../../../elements/Input/Input.types";
import { Styled } from "./ListItem.styled";
import { ListItemProps } from "./ListItem.types";
import Modal from "../CardModal";
import { Button } from "../CardModal.styled";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";
import { Draggable } from "react-beautiful-dnd";
import { useRef } from "react";
import { Popover, ArrowContainer } from "react-tiny-popover";

import ChecklistPage from "../../../../pages/Checklist/Checklist";
import Comment from "../../../Comment/Comment";
import AddLabelForm from "../../../forms/AddLabelForm";
import Label from "../../../lists/Label/List/List";
import dayjs, { Dayjs } from "dayjs";

import { DatePicker } from "../../../DueDate/DatePicker";
import ChecklistItemDetail from "../../../ChecklistItemDetail/ChecklistItemDetail";
import Checklist  from "../../../lists/Checklist/List/List";



export interface IAppProps {}
const ListItem: FC<ListItemProps> = (props) => {
  const clickMeButtonRef = useRef<HTMLButtonElement | undefined>();
  const { state, setCardId, setChecklistId } = useKanbanContext();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(props.title);
  const [active, setActive] = useState(false);
  const [date, setDate] = useState(dayjs());
  const [checklists, setChecklists] = useState<StateChecklistType>([]);
  const [isPopoverOpen, setIsPopoverOpen] = useState({
    firstPopover: false,
    secondPopover: false,
    thirdPopover: false,
  });

  const setUpdateDate= (date:Dayjs) =>{
    card.update(Number(props.id),{
      duedate: date,
      title: props.title || "",
      listId: props.listId
    })
    setDate(date)
  }
  const handleEditClick = () => {
    props.dispatches.selectCard(Number(props.id));
    setIsEdit((prev) => !prev);
  };

  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  const handleSave = () => {
    card
      .update(Number(props.id), {
        title: value,
        listId: props.listId,
        duedate: props.duedate
      })
      .then(() => {
        props.dispatches.updateCard(Number(props.id), value);
      })
      .finally(() => setIsEdit(false));
  };
  const handleDeleteCard = () => {
    card.destroy(Number(props.id)).then(() => {
      props.dispatches.deleteCard(Number(props.id));
      setIsEdit((prev) => !prev);
    });
  };
  const handleOnClick = () => {
    setCardId(props.id);
  };
 
  
  
   
    const dispatches: ContextChecklistType = {
      addChecklist: (checklist: any) => {
        setChecklists((prev) => (
           [...prev, checklist]
        ))
      },
   
      updateChecklist: (id: number, title: string, isChecked:boolean) => {
        setChecklists((prev) => (
           prev.map((che) => ({
            ...che,
            title: id === che.id ? title : che.title, 
            isChecked: id === che.id ? isChecked : che.isChecked
          }))
        ));
      },
  
      selectChecklist: (checklistId: number) => {
        setChecklistId(checklistId)
      },
      
      deleteChecklist: (checklistId: number) => {
        setChecklists((prev) => prev.filter((checklist:Checklist)=>{
          return checklist.id !== checklistId 
        }))
      }
    };
  
    useEffect(() => {
      card.getById(state.cardId).then((data) => {
      setChecklists(data.data.checklists);
      });
    }, [state.cardId]);
  return (
    <Draggable draggableId={String(props.id)} index={props.index}>
      {(provided: any) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Styled onClick={handleOnClick}>
            <Card title="Added Card">
              <h4 className="app__title">
                Due Date: {date.format("DD - MMMM - YYYY")}
              </h4>
              <div className="delete-button" data-noredirect="true">
                <button
                  className="delete-button"
                  data-noredirect="true"
                  onClick={handleDeleteCard}
                >
                  Delete
                  <span
                    className="material-symbols-outlined"
                    data-noredirect="true"
                  >
                    delete
                  </span>
                </button>
              </div>
              <div>
                <Button onClick={() => setActive(true)}>Open Modal</Button>

                <Modal
        
                  active={active}
                  hideModal={() => setActive(false)}
                  footer={<Button>Footer Button</Button>}
                >
                  <h1>
                    <span> Card Title: {props.title}</span>
                  </h1>
                  <Popover
                    isOpen={isPopoverOpen.firstPopover}
                    positions={["bottom"]}
                    padding={10}
                    onClickOutside={() =>
                      setIsPopoverOpen((prev) => {
                        return { ...prev, firstPopover: false };
                      })
                    }
                    content={({ position, childRect, popoverRect }) => (
                      <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                        position={position}
                        childRect={childRect}
                        popoverRect={popoverRect}
                        arrowColor={"red"}
                        arrowSize={10}
                        arrowStyle={{ opacity: 0.7 }}
                        className="popover-arrow-container"
                        arrowClassName="popover-arrow"
                      >
                        <div
                          style={{ backgroundColor: "orange", opacity: 100 }}
                        >
                          <DatePicker selectedDate={date} onChange={setUpdateDate} />
                        </div>
                      </ArrowContainer>
                    )}
                  >
                    <Button
                      onClick={() =>
                        setIsPopoverOpen((prev) => {
                          return { ...prev, firstPopover: !prev.firstPopover };
                        })
                      }
                    >
                      DueDate
                    </Button>
                  </Popover>

                  <Popover
                    isOpen={isPopoverOpen.secondPopover}
                    positions={["bottom"]}
                    padding={10}
                    onClickOutside={() =>
                      setIsPopoverOpen((prev) => {
                        return { ...prev, secondPopover: false };
                      })
                    }
                    content={({ position, childRect, popoverRect }) => (
                      <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                        position={position}
                        childRect={childRect}
                        popoverRect={popoverRect}
                        arrowColor={"red"}
                        arrowSize={10}
                        arrowStyle={{ opacity: 0.7 }}
                        className="popover-arrow-container"
                        arrowClassName="popover-arrow"
                      >
                        <div
                          style={{ backgroundColor: "yellow", opacity: 100 }}
                        >
                          <AddLabelForm />
                          {/* <Label /> */}
                        </div>
                      </ArrowContainer>
                    )}
                  >
                    <Button
                      onClick={() =>
                        setIsPopoverOpen((prev) => {
                          return {
                            ...prev,
                            secondPopover: !prev.secondPopover,
                          };
                        })
                      }
                    >
                      Label
                    </Button>
                  </Popover>

                  <Popover
                    isOpen={isPopoverOpen.thirdPopover}
                    positions={["right"]}
                    padding={10}
                    onClickOutside={() =>
                      setIsPopoverOpen((prev) => {
                        return { ...prev, firstPopover: false };
                      })
                    }
                    content={({ position, childRect, popoverRect }) => (
                      <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                        position={position}
                        childRect={childRect}
                        popoverRect={popoverRect}
                        arrowColor={"red"}
                        arrowSize={10}
                        arrowStyle={{ opacity: 0.7 }}
                        className="popover-arrow-container"
                        arrowClassName="popover-arrow"
                      >
                        <div
                          style={{ backgroundColor: "yellow", opacity: 100 }}
                        >
                          <ChecklistPage />
                        </div>
                      </ArrowContainer>
                    )}
                  >
                    <Button
                      onClick={() =>
                        setIsPopoverOpen((prev) => {
                          return { ...prev, thirdPopover: !prev.thirdPopover };
                        })
                      }
                    >
                      Checklist
                    </Button>
                  </Popover>
                  <Checklist dispatches={dispatches} checklists={checklists} />
                  <ChecklistItemDetail />
                  <Comment />
                </Modal>
              </div>
              <div className="list-item">
                {!isEdit ? (
                  <>
                    <span>{props.title}</span>
                    <span
                      id={(props.id)}
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
            </Card>
          </Styled>
        </div>
      )}
    </Draggable>
  );
};

export default ListItem;
