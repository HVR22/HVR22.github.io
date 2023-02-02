import React from "react";

function Ped(props){
    return(
        <div className="contenedor">
            <div className="contenedor-platos">
                <div className="platos">
                    <img
                        className="plato1"
                        src={require(`../assets/${props.imagen}`)}
                        alt="foto bife"/>
                    <div className="nombrePlato">
                        <h4 className="rest">
                            <strong>{props.rest}</strong>
                        </h4>
                        <p className="contenido">
                            <p>{props.plato}</p>
                            <p>{props.def}</p>
                            <p><strong>{props.cod}</strong></p>
                            <p><strong>{props.precio}</strong></p>  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ped