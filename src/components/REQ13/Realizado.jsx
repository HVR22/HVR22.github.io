import React from "react";
import Rest from "./Ped";
import "../css/Rest.css"
import Finish from "../REQ15/Finish";
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

function Realizado (){
    return(
        <div>
            <h1>LISTA DE PEDIDOS REALIZADOS</h1>      

        <div className='platillos'>
            
            <Rest
                imagen = "BIFE ANGOSTO.jfif"
                rest = "LongHorn"
                plato = "Bife Angosto"
                def = "Acompañado de papas fritas y ensala parrillera"
                cod = "CODIGO:RLH-356"
                precio = "Precio: S/.79"
             />
            <Rest
                imagen = "lomo fino.jpg"
                rest = "LongHorn"
                plato = "Lomo fino 400g"
                def = "Acompañado de papas fritas y ensala parrillera"
                cod = "CODIGO:RLH-741"
                precio = "Precio: S/.73"
             />
            <Rest
                imagen = "parrilla.jpg"
                rest = "LongHorn"
                plato = "Parrilla 4 Carnes (4 personas)"
                def = "Elige 4 cortes de carne y acompañalo con guarniciones de tu eleccion"
                cod = "CODIGO:RLH-847"
                precio = "Precio: S/.250"
             />
            <Rest
                imagen = "lasagna de carne.webp"
                rest = "LongHorn"
                plato = "Lasagna de carne"
                def = "Salsa de carne con queso parmesano y con nuestro ingrediente tradicional"
                cod = "CODIGO:RLH-953"
                precio = "Precio: S/.34"
             />
            <Rest
                imagen = "rissotto.jpg"
                rest = "LongHorn"
                plato = "Risotto con funghi porcini"
                def = "Risotto con funghi con crema fresca y parmesano"
                cod = "CODIGO:RLH-343"
                precio = "Precio: S/.36"
             />
            <Rest
                imagen = "tacu tacu con lomo.jpg"
                rest = "LongHorn"
                plato = "Lomo saltado con Tacu Tacu"
                def = "Lomo saltado flameado y acompañado con tacu tacu de pallares"
                cod = "CODIGO:RLH-236"
                precio = "Precio: S/.48"
             />
        </div>

        <Link to='/Finish'><button className="btn btn-outline-warning" type="primary">Pedidos Terminado</button></Link>
        <Routes>
                    <Route path='/Finish' element={<Finish />} />
                </Routes>
        </div>
    

    )
}

export default Realizado