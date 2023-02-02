import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Rest.css"
import { Routes, Route } from 'react-router-dom';
import Platos from '../Platos';


function Rest(props) {



    return (
        <div className="contenedor">
            <div className="contenedor-platos">
                <div className="platos">
                    <img
                        className="plato1"
                        src={require(`../imagenes/imagenesReq4/${props.imagen}`)}
                        alt="foto bife" />
                    <div className="nombrePlato">
                        <h4 className="rest">
                            <strong>{props.rest}</strong>
                        </h4>
                        <p className="contenido">
                            <p>{props.plato}</p>
                            <p>{props.def}</p>
                            <p><strong>{props.precio}</strong></p>
                        </p>
                        
                    </div>
                        <Link to = '/REQ8'> Ver Mas</Link>
                    <Routes>
                        <Route Path = '/REQ8' component={Platos}/>
                    </Routes>
                </div>
            </div>
        </div>
    )

}

export default Rest

