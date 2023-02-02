import React from 'react'
import '../css/estilos.css'
import Card from './Card'
import img_4 from '../assets/img_4.jpg'
import img_6 from '../assets/img_6.jpg'
import img_2 from '../assets/cerradotemporalmente.jpg'

const cards3 = [
  {
      id:14,
      tittle:'Señor Limon',
      image: img_4
  },
  {
      id:15,
      tittle:'Embarcadero 41',
      image: img_6
  },
  {
      id:16,
      tittle:'Mero Loco',
      image: img_2
  }
]




const Mariscos = () => {
  return (
    <section id="menu" className="bg-light">
        <div className="container">
            <div className="row">
                <div className="col-12 intro-text">
                    <h1>Explora nuestros mejores restaurantes</h1>
                    <h6>Podras escoger entre los mejores restaurantes de Lima</h6>
                </div>
            </div>
        </div>
    
    
    <div className="container">
          
          
          
                     <div className="row gy-3">
                        {
                            cards3.map(card => (
                                <div className="col-lg-4 col-sm-6" key={card.id}>
                                     <Card title={card.tittle} imgSource={card.image}/>
                                </div>
                            ))
                        }
                      
                     </div>

        </div>
    </section>

  )
}

export default Mariscos
