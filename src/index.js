import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Platos from "./Platos"
import Pedido from './Pedido';
import Realizado from './Realizado';
import Header from "./Header"
import "../src/css/estilos.css"





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='REQ1' element={<App/>}/>
        <Route path='/REQ4' element={<Platos/>}/>
        <Route path='/REQ8' element={<Pedido/>}/>
        <Route path='/REQ13' element={<Realizado/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


