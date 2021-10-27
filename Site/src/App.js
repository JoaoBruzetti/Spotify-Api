import './App.css';
import LoginForm from './components/LoginForm/LoginForm.jsx'
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import { Container, Typography } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="article" maxWidth="sm">
        <LoginForm />
      </Container>
    </ThemeProvider>
  );
}




export default App;
