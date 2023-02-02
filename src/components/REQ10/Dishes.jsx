import background from "../assets/background.jpeg";
import Realizado from "../REQ13/Realizado";
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
function Dishes() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="text-center" style={{ paddingTop: 50 }}>
        <div>
          <h1 style={{ color: "aliceblue" }}>Registros</h1>
        </div>
        <br />
        <br />
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Ingresar categoría</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Ingresar restaurante</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Ingresar plato</label>
        </div>
        <div className="container-carrito">
          <table className="table table-striped table-esp">
            <thead>
              <tr>
                <th style={{ color: "aliceblue" }}>Número</th>
                <th style={{ color: "aliceblue" }}>Categoría</th>
                <th style={{ color: "aliceblue" }}>Restaurante</th>
                <th style={{ color: "aliceblue" }}>Plato</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: "aliceblue" }}>1</td>
                <td style={{ color: "aliceblue" }}>Carnes</td>
                <td style={{ color: "aliceblue" }}>LogHorn</td>
                <td style={{ color: "aliceblue" }}>Bife</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr>
                <td style={{ color: "aliceblue" }}>2</td>
                <td style={{ color: "aliceblue" }}>Carnes</td>
                <td style={{ color: "aliceblue" }}>LogHorn</td>
                <td style={{ color: "aliceblue" }}>Chorizo a la argentina</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr>
                <td style={{ color: "aliceblue" }}>3</td>
                <td style={{ color: "aliceblue" }}>Carnes</td>
                <td style={{ color: "aliceblue" }}>LogHorn</td>
                <td style={{ color: "aliceblue" }}>Lomo Saltado</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr>
                <td style={{ color: "aliceblue" }}>4</td>
                <td style={{ color: "aliceblue" }}>Carnes</td>
                <td style={{ color: "aliceblue" }}>LogHorn</td>
                <td style={{ color: "aliceblue" }}>Rissotto</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr>
                <td style={{ color: "aliceblue" }}>5</td>
                <td style={{ color: "aliceblue" }}>Carnes</td>
                <td style={{ color: "aliceblue" }}>LogHorn</td>
                <td style={{ color: "aliceblue" }}>Cuadril</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to='/Realizado'><button className="btn btn-outline-warning" type="primary">Mostrar Pedidos</button></Link>
        <Routes>
                    <Route path='/Realizado' element={<Realizado />} />
                </Routes>
      </div>
    </div>
  );
}

export default Dishes;
