import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import { Container } from '@material-ui/core';
import RegisterForm from './components/RegisterForm/RegisterForm';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="article" maxWidth="sm">
        <RegisterForm />
      </Container>
    </ThemeProvider>
  );
}




export default App;
