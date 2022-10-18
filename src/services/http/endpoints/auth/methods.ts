import service from "../../instance";
import {
  LoginRequestPayload,
  PasswordChangeRequestPayload,
  RegisterRequestPayload,
  RegisterResponseType,
} from "./types";

export const login = (payload: LoginRequestPayload) =>
  service.post("auth/login", payload);

export const register = (
  payload: RegisterRequestPayload
): Promise<RegisterResponseType> => service.post("auth/register", payload);

export const passwordChange = (payload: PasswordChangeRequestPayload) =>
  service.post("auth/password-change", payload);
