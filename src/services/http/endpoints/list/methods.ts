import service from "../../instance";
import {
  CreateListRequestPayload,
  CreateListResponseType,
} from "./types";

export const create = (
  payload: CreateListRequestPayload
): Promise<CreateListResponseType> => service.post("list", payload);

export const get = () => service.get("list");

export const destroy = (id: number) => service.delete(`list/${id}`);

export const update = (id: number, payload: CreateListRequestPayload) =>
  service.put(`list/${id}`, payload);

export const getById = (id: number) => service.get(`list/${id}`);