import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

import { StateType, ContextType } from "./types";

export const initialState: StateType = {
  boardId: 0,
  listId: 0,
  cardId: 0,
  checklistId: 0,
  commentId: 0,
  labelId:0,
  checklistItemId:0,
  boardMemberId: 0,
};
export const KanbanContext = createContext<ContextType>({
  state: initialState,
  setBoardId: () => {},
  setListId: () => {},
  setCardId: () => {},
  setChecklistId: () => {},
  setCommentId: () => {},
  setLabelId: () => {},
  setChecklistItemId: () =>{},
  setBoardMemberId: () => {},
});
export const KanbanProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<StateType>(initialState);
  function setBoardId(id: number) {
    setState((prev) => ({ ...prev, boardId: id }));
  }

  function setCardId(id: number) {
    setState((prev) => ({ ...prev, cardId: id }));
  }
  function setChecklistId(id: number) {
    setState((prev) => ({ ...prev, checklistId: id }));
  }
  function setCommentId(id: number) {
    setState((prev) => ({ ...prev, commentId: id }));
  }
  function setListId(id: number) {
    setState((prev) => ({ ...prev, listId: id }));
  }
  function setLabelId(id: number) {
    setState((prev) => ({ ...prev, labelId: id }));
  }
  function setChecklistItemId(id: number) {
    setState((prev) => ({ ...prev, checklistItemId: id }));
  }
  function setBoardMemberId(id: number) {
    setState((prev) => ({ ...prev, boardMemberId: id }));
  }
  return (
    <KanbanContext.Provider
      value={{
        state,
        setBoardId,
        setListId,
        setCardId,
        setChecklistId,
        setCommentId,
        setLabelId,
        setChecklistItemId,
        setBoardMemberId,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
};

export const useKanbanContext = () => {
  return useContext(KanbanContext);
};
