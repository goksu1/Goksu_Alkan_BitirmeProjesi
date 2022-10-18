import service from "../../instance";
import {
  CreateChecklistitemRequestPayload,
  CreateChecklistitemResponseType,
} from "./types";

export const create = (
  payload: CreateChecklistitemRequestPayload
): Promise<CreateChecklistitemResponseType> => service.post("checklist-item", payload);

export const destroy = (id: number) => service.delete(`checklist-item/${id}`);

export const update = (id: number, payload: CreateChecklistitemRequestPayload) =>
  service.put(`checklist-item/${id}`, payload);

