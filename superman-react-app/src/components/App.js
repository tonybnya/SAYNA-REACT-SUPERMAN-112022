import '../styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Eshop from '../pages/Eshop';
import MonCompte from '../pages/MonCompte';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../pages/Layout';

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='eshop' element={<Eshop />} />
            <Route path='compte' element={<MonCompte />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
