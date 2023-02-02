import React from "react";
import Cod from "./REQ8/Cod";
import "../src/css/Cod.css"

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
        </div>
    )
}

export default Pedido