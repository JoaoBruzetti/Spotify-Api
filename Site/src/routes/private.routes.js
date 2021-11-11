import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../pages/Home/Home';

export const PrivateRoutes = () => {

return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

}