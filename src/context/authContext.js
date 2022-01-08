import { createContext, useReducer } from "react";
import { authReducer } from "../store/auth/authReducer";

const AuthContext = createContext();

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const LoggedProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default LoggedProvider;
export { AuthContext };
