import Summary2 from "./Summary2";
import background from "../assets/background.jpeg";
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

  import Pedido from "../REQ8/Pedido";

function Checkout() {
  return (
    <div
      style={{ backgroundImage: `url(${background})`, backgroundSize: `cover` }}
    >
      <main className="container">
        <div className="py-5 text-left">
          <h1 style={{ color: "aliceblue" }}>Realizar pago</h1>
        </div>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span style={{ color: "aliceblue", fontSize: 24 }}>
                <b>Carrito de pedidos</b>
              </span>
              <span className="badge bg-primary rounded-pill">6</span>
            </h4>
            <ul className="list-group mb-3">
              <Summary2 rest="LongHorn" dish="Bife Angosto" price="s/.79" />
              <Summary2 rest="LongHorn" dish="Lasagna de carne" price="s/.34" />
              <Summary2 rest="LongHorn" dish="Rissotto" price="s/.36" />
              <Summary2 rest="LongHorn" dish="Lomo Fino" price="s/.73" />
              <Summary2 rest="LongHorn" dish="Parrilla" price="s/.250" />
              <Summary2
                rest="LongHorn"
                dish="Tacu Tacu con Lomo"
                price="s/.48"
              />
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">IGV</h6>
                </div>
                <span className="text-success">s/. 93.60</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>s/. 613.60</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 style={{ color: "aliceblue" }} className="mb-3">
              Información
            </h4>
            <form className="needs-validation" novalidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label
                    style={{ color: "aliceblue" }}
                    for="firstName"
                    className="form-label"
                  >
                    Nombre
                    
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Ingresa nombre"
                  />
                  <div className="invalid-feedback">Se requiere nombre.</div>
                </div>

                <div className="col-sm-6">
                  <label
                    style={{ color: "aliceblue" }}
                    for="lastName"
                    className="form-label"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Ingresa apellidos"
                    value=""
                    required
                  />
                  <div className="invalid-feedback">Se requiere apellido.</div>
                </div>

                <div className="col-12">
                  <label
                    style={{ color: "aliceblue" }}
                    for="número"
                    className="form-label"
                  >
                    Número <span className="text-muted"></span>
                  </label>
                  <input
                    type="número"
                    className="form-control"
                    id="número"
                    placeholder="Tu número"
                  />
                  <div
                    style={{ color: "aliceblue" }}
                    className="invalid-feedback"
                  >
                    Ingresa tu número
                  </div>
                </div>

                <hr style={{ color: "aliceblue" }} className="my-4" />

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="save-info"
                  />
                  <label
                    style={{ color: "aliceblue" }}
                    className="form-check-label"
                    for="save-info"
                  >
                    Guardar esta información.
                  </label>
                </div>

                <hr style={{ color: "aliceblue", size: 5 }} className="my-4" />

                <h4 style={{ color: "aliceblue" }} className="mb-3">
                  Tipo de pago
                </h4>

                <div className="my-3">
                  <div className="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      checked
                      required
                    />
                    <label
                      style={{ color: "aliceblue" }}
                      className="form-check-label"
                      for="credit"
                    >
                      Tarjeta de crédito
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label
                      style={{ color: "aliceblue" }}
                      className="form-check-label"
                      for="debit"
                    >
                      Tarjeta de débito
                    </label>
                  </div>
                </div>
                <div className="row gy-3">
                  <div className="col-md-6">
                    <label
                      style={{ color: "aliceblue" }}
                      for="cc-name"
                      className="form-label"
                    >
                      Nombre en la tarjeta
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">Ingresa nombre.</div>
                  </div>
                  <div className="col-md-6">
                    <label
                      style={{ color: "aliceblue" }}
                      for="cc-number"
                      className="form-label"
                    >
                      Número de tarjeta de crédito/débito
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">Ingresa número.</div>
                  </div>

                  <div className="col-md-3">
                    <label
                      style={{ color: "aliceblue" }}
                      for="cc-expiration"
                      className="form-label"
                    >
                      Fecha de expiración
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Ingresar fecha de expiración.
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label
                      style={{ color: "aliceblue" }}
                      for="cc-cvv"
                      className="form-label"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Ingresa código de seguridad.
                    </div>
                  </div>
                </div>

                <hr style={{ color: "aliceblue" }} className="my-4" />

                <Link to='/Pedido'><button className="w-100 btn btn-danger btn-lg" type="submit">
                  Realizar pago
                </button></Link>
                      <Routes>
                            <Route path='/Pedido' element={<Pedido />} />
                      </Routes>


              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
