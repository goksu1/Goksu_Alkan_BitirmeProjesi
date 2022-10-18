import service from "../../instance";
import {
  CreateCardLabelRequestPayload,
  CreateCardLabelResponseType,
} from "./types";

export const create = (
  payload: CreateCardLabelRequestPayload
): Promise<CreateCardLabelResponseType> => service.post("cardLabel/create", payload);


export const destroy = (id: number) => service.get(`cardLabel/destroy?id=${id}`);

