import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import AppRouter from './components/routes/AppRouter';
import Theme from './components/Theme/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
