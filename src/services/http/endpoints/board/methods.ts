import service from "../../instance";
import {
  CreateBoardRequestPayload,
  CreateBoardResponseType,
} from "./types";

export const create = (
  payload: CreateBoardRequestPayload
): Promise<CreateBoardResponseType> => service.post("board", payload);

export const get = () => service.get("board");

export const destroy = (id: number) => service.delete(`board/${id}`);

export const update = (id: number, payload: CreateBoardRequestPayload) =>
  service.put(`board/${id}`, payload);

export const getById = (id: number) => service.get(`board/${id}`);