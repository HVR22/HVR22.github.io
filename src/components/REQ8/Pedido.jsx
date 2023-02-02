import React from "react";
import Cod from "./Cod";
import "../css/Cod.css"
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import App2 from "../REQ9/App2";

function Pedido (){
    return(
        <div>
            <h1>VERIFICACION DE PEDIDO REALIZADO POR CODIGO</h1>
            <div className="pedidos">
                <Cod
                rest = "LONGHORN"
                plato = "BIFE ANGOSTO"
                codi = "CODIGO:RLH-356"/>
                <Cod
                rest = "LONGHORN"
                plato = "LASAGNA DE CARNE"
                codi = "CODIGO:RLH-789"/>
                <Cod
                rest = "LONGHORN"
                plato = "PARRILLA 4 SABORES"
                codi = "CODIGO:RLH-124"/>
                <Cod
                rest = "LONGHORN"
                plato = "LOMO SALTADO CON TACUTACU"
                codi = "CODIGO:RLH-971"/>
            </div>


            <Link to='/App2'><button className="btn btn-outline-warning"  type="primary">Ir a Login Restaurante</button></Link>
                                        <Routes>
                                         <Route path='/App2' element={<App2 />} />
                                     </Routes>
        </div>

        
    )
}

export default Pedido