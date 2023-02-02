import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import App  from './components/REQ1/App';
import Platos from '../src/components/REQ_5/Platos'
import Confirmacion from '../src/components/REQ_16/Confirmacion'
import Menu from './components/routing-examples/Menu';
import Todos from './components/routing-examples/Todos';
import Carnes from './components/routing-examples/Carnes';
import Mariscos from './components/routing-examples/Mariscos';
import Pastas from './components/routing-examples/Pastas';
import Platos2 from './components/REQ_4/Platos2'
import Car from './components/REQ6/Car'
import Checkout from './components/REQ7/Checkout';
import Pedido from './components/REQ8/Pedido'
import App2 from './components/REQ9/App2'
import Dishes from './components/REQ10/Dishes';
import Realizado from './components/REQ13/Realizado';
import Finish from './components/REQ15/Finish';

const app = () => {
  return (
    <Router>
      <Menu />
      <div>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/Platos' element={<Platos />} />
          
          <Route path='/Todos' element={<Todos />} />
          <Route path='/Carnes' element={<Carnes />} />
          <Route path='/Mariscos' element={<Mariscos />} />
          <Route path='/Pastas' element={<Pastas />} />
          <Route path='/Platos2' element={<Platos2 />} />
          <Route path='/Car' element={<Car />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/Pedido' element={<Pedido />} />
          <Route path='/App2' element={<App2 />} />
          <Route path='/Dishes' element={<Dishes />} />
          <Route path='/Realizado' element={<Realizado />} />
          <Route path='/Finish' element={<Finish />} />
          <Route path='/Confirmacion' element={<Confirmacion />} />
          <Route path='/App' element={<App />} />

          
        </Routes>
      </div>
    </Router>
  )
}

export default app