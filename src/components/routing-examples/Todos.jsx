import '../css/estilos.css'
import img_1 from '../assets/img_1.jpg'
import img_2 from '../assets/cerradotemporalmente.jpg'
import img_3 from '../assets/img_3.jpg'
import img_4 from '../assets/img_4.jpg'
import img_6 from '../assets/img_6.jpg'
import img_7 from '../assets/img_7.jfif'
import img_8 from '../assets/img_8.jpg'
import img_9 from '../assets/img_9.jpg'
import Card from './Card'


const cards = [
  {
      id:1,
      tittle:'Long Horn',
      image: img_1
  },
  {
      id:2,
      tittle:'Hornero',
      image: img_2
  },
  {
      id:3,
      tittle:'Mis costillitas',
      image: img_3
  },
  {
      id:4,
      tittle:'Señor Limon',
      image: img_4
  },
  {
      id:5,
      tittle:'Embarcadero 41',
      image: img_6
  },
  {
      id:6,
      tittle:'Fudgy Chewy Brownies',
      image: img_2
  },
  {
      id:7,
      tittle:'Punto Italiano  ',
      image: img_7
  },
  {
      id:8,
      tittle:'La Piccolina',
      image: img_8
  },
  {
      id:9,
      tittle:'La piazzeta',
      image: img_9
  }
]


const Todos = () => {
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
                            cards.map(card => (
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

export default Todos
