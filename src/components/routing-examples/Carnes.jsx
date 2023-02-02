import React from 'react'
import '../css/estilos.css'
import img_1 from '../assets/img_1.jpg'
import img_2 from '../assets/cerradotemporalmente.jpg'
import img_3 from '../assets/img_3.jpg'
import Card from './Card'

const cards2 = [
  {
      id:11,
      tittle:'Long Horn',
      image: img_1
  },
  {
      id:12,
      tittle:'Hornero',
      image: img_2
  },
  {
      id:13,
      tittle:'Mis costillitas',
      image: img_3
  }
]

const Carnes = () => {
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
                            cards2.map(card => (
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

export default Carnes
