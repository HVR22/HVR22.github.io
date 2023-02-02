import Accept from "./REQ6/Accept";
import List from "./REQ6/List";
import Summary from "./REQ6/Summary";
import Time from "./REQ6/Time";
import background from "../src/img/background.jpeg";
import React from "react";
import "../src/carrito.css";

function Car() {
  return (
    <div
      style={{ backgroundImage: `url(${background})`, backgroundSize: `cover` }}
    >
      <section classNameName="h-100 gradient-custom">
        <div classNameName="container py-5">
          <div classNameName="row d-flex justify-content-center my-4">
            <div classNameName="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Ver el carrito de los platos</h5>
                </div>
                <List
                  rest="LongHorn"
                  dish="Bife Angosto"
                  price="s/.79"
                  imagen="bife.jfif"
                />
                <hr />
                <List
                  rest="LongHorn"
                  dish="Lasagna de carne"
                  price="s/.34"
                  imagen="lasagna.webp"
                />
                <hr />
                <List
                  rest="LongHorn"
                  dish="Rissotto"
                  price="s/.36"
                  imagen="rissotto.jpg"
                />
                <hr />
                <List
                  rest="LongHorn"
                  dish="Lomo Fino"
                  price="s/.73"
                  imagen="lomo.jpg"
                />
                <hr />
                <List
                  rest="LongHorn"
                  dish="Parrilla"
                  price="s/.250"
                  imagen="parrilla.jpg"
                />
                <hr />
                <List
                  rest="LongHorn"
                  dish="Tacu Tacu con Lomo"
                  price="s/.48"
                  imagen="tacu.jpg"
                />
              </div>
              <Time />
              <Accept />
            </div>
            <div classNameName="col-md-4">
              <Summary />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Car;
