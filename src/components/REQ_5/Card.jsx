import React from "react";
import swal from 'sweetalert';

const mostrarAlerta = () => {
    swal({
        title: "Buen trabajo!",
        text: "Se agrego al carrito",
        icon: "success",
        button: "Listo",
      });
}




function Card({title, imgSource}){
    return(
        <div className="platos-carnes d-flex shadow-on-hover">
                        <img src={imgSource} alt="" />
                        <div className="blog-post-content p-4">
                            <p>osted: 25 Dec, 2023  </p>
                            <h4><a href="#">{title}
                                </a></h4>
                            <p>Consectetur adipisicing elit. Consequatur, architecto quisquam. Cumque!</p>
                            <button className="btn btn-outline-warning" onClick={mostrarAlerta} type="primary">Agregar</button>
                        </div>
                    </div>

                   
            
                          
    )
}

export  default Card