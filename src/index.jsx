import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Car from "./Car";
import Checkout from "./Checkout";
import Dishes from "./Dishes";
import Finish from "./Finish";
import Header from "../src/Header";
import "../src/estilos.css";
import Success from "./Success";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/REQ6" element={<Car />} />
        <Route path="/REQ7" element={<Checkout />} />
        <Route path="/REQ10" element={<Dishes />} />
        <Route path="/REQ15" element={<Finish />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
