import React from "react";
import '../css/estilos.css' 
function Header(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="">RESTDELUXE</a>
      <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                  <a className="nav-link" href="">Restaurantes</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="">Pedidos</a>
              </li>
              <li className="nav-item">
                  <button type="button" className="btn btn-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                          <path fill-rule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z">
                          </path>
                      </svg>
                  </button>
              </li>
              <li className="nav-item" >
                  <button type="button" className="btn btn-secondary" href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="bi bi-cart" viewBox="0 0 16 16">
                          <path
                              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
                          </path>
                      </svg>
                  </button>
              </li>
          </ul>
      </div>
      <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
          <div className="Buscar">
              <button className="btn btn-outline-success" type="submit">Buscar</button>
          </div>
      </form>
  </nav>
       



    )
}

export default Header