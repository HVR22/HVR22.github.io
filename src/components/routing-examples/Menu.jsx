import { Link, NavLink, useNavigate } from 'react-router-dom'





const Menu = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark  bg-dark'>
      <div className='container'>
        
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
          <li className='nav-item' >
              <NavLink 
               to='/App' 
               className={({ isActive }) =>
               isActive
                    ? 'nav-link active text-danger bg-light'
                    : 'nav-link inactive'}>
                Index
              </NavLink>
            </li>
            <li className='nav-item' >
              <NavLink 
               to='/Todos' 
               className={({ isActive }) =>
               isActive
                    ? 'nav-link active text-danger bg-light'
                    : 'nav-link inactive'}>
                Todos los restaurantes
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/Carnes'
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link active text-danger bg-light'
                    : 'nav-link inactive'
                }
              >
                Carnes
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink  to='/Mariscos' 
              className={({ isActive }) =>
              isActive
              ? 'nav-link active text-danger bg-light'
                    : 'nav-link inactive'
                }
              >
                Mariscos
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink  to='/Pastas' 
              className={({ isActive }) =>
              isActive
              ? 'nav-link active text-danger bg-light'
                    : 'nav-link inactive'
                }
              >
                Pastas
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
