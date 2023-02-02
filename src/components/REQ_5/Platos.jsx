import React from 'react'
import plato_1 from '../assets/plato_1.jpg'
import plato_2 from '../assets/plato_2.jpg'
import plato_3 from '../assets/plato_3.jpg'
import plato_4 from '../assets/plato_4.jpg'
import Card from './Card'
import Car from '../REQ6/Car'
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
const cards = [
{
    id:1,
    tittle:'BIG STEAK',
    image: plato_1
},
{
    id:2,
    tittle:'OUTLAW RIBEVE STEAK',
    image: plato_2
},
{
    id:3,
    tittle:'NEW YORK STRIP',
    image: plato_3
},
{
    id:4,
    tittle:'STEAK BURGER',
    image: plato_4
},


]


function index() {
  return (
    <section id="platosCarnes">
        <div class="container">
        <div class="row">
                <div class="col-12 intro-text">
                    <h1>Platos De Carnes</h1>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint temporibus natus optio
                        eveniet nobis accusantium?</h6>
                </div>
            </div>
            <div class="row gy-4">
                
                {
                            cards.map(card => (
                                <div class="col-sm-6" key={card.id}>
                                     <Card title={card.tittle} imgSource={card.image}/>
                                </div>
                            ))
                        }

              
           </div>


           <div>
                        <Link to='/Car'><button className="btn btn-outline-warning"  type="primary">Ver Carrito</button></Link>
                        <Routes>
                                         <Route path='/Car' element={<Car />} />
                                     </Routes>
                                        
            </div>

       </div>
          </section>
  )
}

export default index