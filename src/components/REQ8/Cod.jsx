import React from "react";

function Cod (props){
    return(
        <div className="contenedor-codigo">
            <div className="estruc-ped">
                <h3>{props.rest}</h3>
                <p>{props.plato}</p>
                <p><strong>{props.codi}</strong></p>                                
            </div>
        </div>
    )
}

export default Cod