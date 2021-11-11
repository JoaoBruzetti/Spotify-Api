import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import { Container } from '@material-ui/core';
import RegisterForm from './pages/RegisterForm/RegisterForm';
import LoginForm from './pages/LoginForm/LoginForm';
import Home from './pages/Home/Home';
import AuthProvider from './contexts/auth';
import {Routes} from './routes'


function App() {
  return (
    <ThemeProvider theme={theme}>
    <AuthProvider>
        <Container component="article" >
          <Routes />
        </Container>
    </AuthProvider>
    </ThemeProvider>
  );
}




export default App;
