import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import { Container } from '@material-ui/core';
import RegisterForm from './pages/RegisterForm/RegisterForm';
import LoginForm from './pages/LoginForm/LoginForm';
import Home from './pages/Home/Home';




function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="article" >
        <Home />
      </Container>
    </ThemeProvider>
  );
}




export default App;
