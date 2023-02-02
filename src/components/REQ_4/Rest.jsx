import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Rest.css"
import { Routes, Route } from 'react-router-dom';
import Platos2 from './Platos2'
import Platos from '../REQ_5/Platos'

function Rest(props) {



    return (
        <div className="contenedor">
            <div className="contenedor-platos">
                <div className="platos">
                    <img
                        className="plato1"
                        src={require(`../assets/${props.imagen}`)}
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
                        <Link to = '/Platos'> Ver Mas</Link>
                    <Routes>
                        <Route Path = '/Platos' component={Platos}/>
                    </Routes>
                </div>
            </div>
        </div>
    )

}

export default Rest

