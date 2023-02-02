import ProgressBar from "react-bootstrap/ProgressBar";
import background from "../assets/background.jpeg";

import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Confirmacion from "../REQ_16/Confirmacion";
function Finish() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="container" id="todo">
        <span className="display-4 text-white">Estado del pedido</span>
        <br />
        <br />
        <div className="position-relative m-4">
          <ProgressBar striped variant="success" now={100} />
          <button
            type="button"
            className="position-absolute top-0 start-0 translate-middle btn btn-sm  rounded-pill"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png"
              alt="Bootstrap"
              width="50"
              height="50"
              className="rounded-circle border border-white"
            />
          </button>
          <button
            type="button"
            className="position-absolute top-0 start-50 translate-middle btn btn-sm  rounded-pill"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png"
              alt="Bootstrap"
              width="50"
              height="50"
              className="rounded-circle border border-white"
            />
          </button>
          <button
            type="button"
            className="position-absolute top-0 start-100 translate-middle btn btn-sm rounded-pill"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png"
              alt="Bootstrap"
              width="50"
              height="50"
              className="rounded-circle border border-white"
            />
          </button>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-5 py-5 shadow-on-hover">
          <div className=" col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url("https://cdn-icons-png.flaticon.com/512/2666/2666469.png")`,
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Recibido
                </h3>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url("https://cdn-icons-png.flaticon.com/512/3448/3448099.png")`,
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Preparando
                </h3>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url("https://cdn-icons-png.flaticon.com/512/2927/2927347.png")`,
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Terminado
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to='/Confirmacion'><button className="btn btn-outline-warning" type="primary">Registro de Pedido Terminado</button></Link>
        <Routes>
                    <Route path='/Confirmacion' element={<Confirmacion />} />
                </Routes>
        </div>
     
  );
}

export default Finish;
