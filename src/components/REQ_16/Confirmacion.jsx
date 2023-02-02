import React from 'react'
import swal from 'sweetalert';
import plato_1 from '../assets/plato_1.jpg'
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

import App from '../REQ1/App';
const mostrarAlerta = () => {
    swal({
        title: "Completado!",
        text: "Se ha confirmado el registro",
        icon: "success",
        button: "Listo",
      });
}


function Confirmacion() {
  return (
    <section id="registro">
    <div className="container">
        <div className="row">
            <div className="col-12 intro-text">
                <h1>Registro de entrega de producto</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint temporibus natus optio
                    eveniet nobis accusantium?</p>
            </div>
        </div>
        <form action="#" className="row justify-content-center">
            <div className="col-lg-8">
                <div className="row g-3">
                    <div className="form-group col-md-12">
                        <input type="text" className="form-control" placeholder="Codigo del plato"/>
                    </div>

                    <div className="col-lg-6">
                        <div className="registro bg-white p-5 text-center">
                            <img src={plato_1} alt=""/>
                            
                                <p className="mb-0 mt-2">MOLTEN LAVA CAKE</p>
                                <span className="stars">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-fill"></i>
                                </span>
                            
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="registro bg-white p-5 text-center">
                            <p className="mb-0 mt-2"><b>Codigo del plato: </b> 19875647845</p>
                            <p className="mb-0 mt-2"><b>Nombre del cliente: </b> Tony Montana</p>
                            <p className="mb-0 mt-2"><b>Correo: </b> Joe Doe</p>
                            <p className="mb-0 mt-2"><b>Celular: </b> 987654321</p>
                            <p className="mb-0 mt-2"><b>Nombre del plato: </b> MOLTEN LAVA CAKE</p>
                            <p className="mb-0 mt-2"><b>Precio: </b> S/. 80</p>
                            <p className="mb-0 mt-2"><b>Cantidad: </b> 1</p>
                            
                            
                            
                        </div>
                    </div>

                   
                    <div className="form-group text-center col-md-12">
                    <button className="btn btn-outline-warning" onClick={mostrarAlerta} type="primary">CONFIRMAR REGISTRO</button>
                    <div className="form-group text-center col-md-12 mt-2"  >
                    <Link to='/App'><button className="btn btn-outline-warning" type="primary">Log Out</button></Link>
                    <Routes>
                            <Route path='/App' element={<App />} />
                      </Routes>         
                    </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>
  )
}

export default Confirmacion