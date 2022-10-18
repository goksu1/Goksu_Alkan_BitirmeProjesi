import service from "../../instance";
import {
  CreateCommentRequestPayload,
  CreateCommentResponseType,
} from "./types";

export const create = (
  payload: CreateCommentRequestPayload
): Promise<CreateCommentResponseType> => service.post("comment", payload);

export const destroy = (id: number) => service.delete(`comment/${id}`);

