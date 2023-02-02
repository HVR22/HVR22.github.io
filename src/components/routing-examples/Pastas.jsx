import React from 'react'
import '../css/estilos.css'
import Card from './Card'
import img_7 from '../assets/img_7.jfif'
import img_8 from '../assets/img_8.jpg'
import img_9 from '../assets/img_9.jpg'

const cards3 = [
  {
      id:14,
      tittle:'Punto Italiano',
      image: img_7
  },
  {
      id:15,
      tittle:'La Piccolina',
      image: img_8
  },
  {
      id:16,
      tittle:'La piazzeta',
      image: img_9
  }
]




const Pastas = () => {
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

export default Pastas