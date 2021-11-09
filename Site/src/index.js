import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import RegisterForm from "./pages/RegisterForm/RegisterForm"
import LoginForm from "./pages/LoginForm/LoginForm"
import Home from "./pages/Home/Home"

import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "#fff"
    }
  }
}));


ReactDOM.render(
  <ThemeProvider theme={theme}>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
