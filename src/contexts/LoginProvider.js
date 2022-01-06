import { createContext, useState } from 'react';

const LoginContext = createContext();

const init = () => {
  return JSON.parse(localStorage.getItem('isLogin'));
};

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(init);
  return (
    <LoginContext.Provider value={[isLogin, setIsLogin]}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
export { LoginContext };
