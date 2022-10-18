export type CreateListRequestPayload = {
  title: string;
  boardId: number;
  order: number;
 
};

export type CreateListResponseType = {
  data: {
    id: number;
    order: number;
    title: string;
    members: [];
    boardId: number;
    listId:number;
  };
};
