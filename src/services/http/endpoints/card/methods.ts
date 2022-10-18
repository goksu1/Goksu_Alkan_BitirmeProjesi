import service from "../../instance";
import {
  CreateCardRequestPayload,
  CreateCardResponseType,
} from "./types";

export const create = (
  payload: CreateCardRequestPayload
): Promise<CreateCardResponseType> => service.post("card", payload);

export const get = () => service.get("card");

export const destroy = (id: number) => service.delete(`card/${id}`);

export const update = (id: number, payload: CreateCardRequestPayload) =>
  service.put(`card/${id}`, payload);

export const getById = (id: number) => service.get(`card/${id}`);



