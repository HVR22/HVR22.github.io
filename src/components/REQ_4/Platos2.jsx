import React from 'react';
import '../css/Rest.css';
import Rest  from "./Rest";






function Platos() {
    


  return (

    
    
    <div className="Platos">
        <h1>ELIGE TUS PLATOS FAVORITOS SEGUN EL RESTAURANTE DE TU AGRADO</h1>
        <div className='contenedor-principal'>
            <h3>SELECCIONE SU RESTAURANTE FAVORITO</h3>
            <select className="seleccionador" name="RESTAURANTE DEL PEDIDO">
            <option value="seleccione">LongHorn</option>            
            <option value="LongHorn">LongHorn</option>
            <option value="Chili's">Chili's</option>
            <option value="T.G.I. Friday's">T.G.I. Friday's</option>
        </select>
        </div>

        <div className='contenedor-principal'>
            <select className="seleccionador" name="RESTAURANTE DEL PEDIDO">
            <option value="seleccione">Plato de fondo</option>
            <option value="LongHorn">Entrada</option>
            <option value="Chili's">Plato de fondo</option>
            <option value="T.G.I. Friday's">Postre</option>
        </select>
        </div>

        <div className='platillos'>
            <Rest
                imagen = "BIFE ANGOSTO.jfif"
                rest = "LongHorn"
                plato = "Bife Angosto"
                def = "Acompañado de papas fritas y ensala parrillera"
                precio = "Precio: S/.79"
             />
            <Rest
                imagen = "lomo fino.jpg"
                rest = "LongHorn"
                plato = "Lomo fino 400g"
                def = "Acompañado de papas fritas y ensala parrillera"
                precio = "Precio: S/.73"
             />
            <Rest
                imagen = "parrilla.jpg"
                rest = "LongHorn"
                plato = "Parrilla 4 Carnes (4 personas)"
                def = "elige 4 cortes de carne y acompañalo con guarniciones de tu eleccion"
                precio = "Precio: S/.250"
             />
            <Rest
                imagen = "lasagna de carne.webp"
                rest = "LongHorn"
                plato = "Lasagna de carne"
                def = "salsa de carne con queso parmesano y con nuestro ingrediente tradicional"
                precio = "Precio: S/.34"
                
             />
            <Rest
                imagen = "rissotto.jpg"
                rest = "LongHorn"
                plato = "Risotto con funghi porcini"
                def = "Risotto con funghi con crema fresca y parmesano"
                precio = "Precio: S/.36"
             />
            <Rest
                imagen = "tacu tacu con lomo.jpg"
                rest = "LongHorn"
                plato = "Lomo saltado con Tacu Tacu"
                def = "Lomo saltado flameado y acompañado con tacu tacu de pallares"
                precio = "Precio: S/.48"
             />
        </div>
    </div>
  );
}

export default Platos;
