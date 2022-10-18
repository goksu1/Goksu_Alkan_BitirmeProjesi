import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,

  useLayoutEffect,
  useState,
} from "react";
import instance from "../../services/http/instance";
import { ContextType, StateType } from "./types";

const initialState: StateType = {
  isLoggedIn: Boolean(localStorage.getItem("token")),
  token: localStorage.getItem("token") || "",
  username: localStorage.getItem("username") || "",
};

export const LoginContext = createContext<ContextType>({
  login: () => null,
  logout: () => null,
  state: initialState,
});

export const LoginProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<StateType>(initialState);

  useLayoutEffect(() => {
    instance.interceptors.request.use((config) => {
      const _config = { ...config };
      _config.headers = {
        ...config.headers,
        Authorization: `Bearer ${state.token}`,
      };
      return _config;
    });
  }, [state.token]);

  const login = (token: string, username: string) => {
    setState({ username, token, isLoggedIn: true });
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  };

  const logout = () => {
    setState({ username: "", token: "", isLoggedIn: false });
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
    <LoginContext.Provider
      value={{ login: login, logout: logout, state: state }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const { state, login, logout } = useContext(LoginContext);
  return {
    username: state.username,
    isLoggedIn: state.isLoggedIn,
    token: state.token,
    login,
    logout,
  };
};
