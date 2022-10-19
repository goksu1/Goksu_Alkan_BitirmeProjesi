import service from "../../instance";
import {
  CreateBoardMemberRequestPayload,
  CreateBoardMemberResponseType,
} from "./types";

export const create = (
  payload: CreateBoardMemberRequestPayload
): Promise<CreateBoardMemberResponseType> => service.post(`board-member`, payload);

export const get = (id:number) => service.get(`board-member?boardId=${id}`);
// export const get = () => service.get(`board-member`);

export const destroy = (id: number) => service.delete(`board-member/${id}`);

