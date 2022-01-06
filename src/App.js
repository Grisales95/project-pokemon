import { useContext, useEffect } from 'react';
import { LoginContext } from './contexts/LoginProvider';
import { ThemeProvider } from 'styled-components';
import './App.css';
import AppRouter from './components/routes/AppRouter';
import Theme from './components/Theme/Theme';

function App() {
  const [isLogin] = useContext(LoginContext);
  useEffect(() => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
  }, [isLogin]);

  return (
    <ThemeProvider theme={Theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
