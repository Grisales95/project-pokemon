import { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { AuthContext } from "./auth/authContext";
import AppRouter from "./components/routes/AppRouter";
import Theme from "./components/Theme/Theme";

function App() {
  const { user } = useContext(AuthContext);

  console.log(user);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <ThemeProvider theme={Theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
