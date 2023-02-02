import React from "react";
import background from "../src/img/background.jpeg";
import "../src/Success.css";

function Success() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className="payment">
            <div className="payment_header">
              <div className="check">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png"
                  alt="Bootstrap"
                  width="50"
                  height="50"
                  className="rounded-circle border border-white"
                />
              </div>
            </div>
            <div className="content">
              <h1>Pago Exitoso!</h1>
              <p>Se ha realizado el pago exitosamente.</p>
              <button type="button" className="btn btn-secondary">
                Ir a la página principal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
