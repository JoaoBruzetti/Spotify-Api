import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegisterForm from '../pages/RegisterForm/RegisterForm';
import LoginForm from '../pages/LoginForm/LoginForm';

export const AppRoutes = () => {

return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="register" element={<RegisterForm />} />
    </Routes>
  </BrowserRouter>
)

}