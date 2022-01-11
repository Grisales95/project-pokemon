import { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import AppRouter from "./components/routes/AppRouter";
import { AuthContext } from "./context/authContext";
import Theme from "./Theme/Theme";

function App() {
  const { user } = useContext(AuthContext);

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
