import { createContext, useEffect, useReducer } from "react";
import UserReducer from "./DepReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("GRH_User")) || null,
  isFetching: false,
  error: false,
};

export const DepContext = createContext(INITIAL_STATE);

export const DepContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("GRH_User", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <DepContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </DepContext.Provider>
  );
};
