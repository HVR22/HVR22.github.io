import React from "react";
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Platos2 from '../REQ_4/Platos2'



function Card({title, imgSource}){
    return(
        <div className="menu-item bg-white shadow-on-hover">
                                <img src={imgSource} alt=""/>
                                <div className="menu-item-content p-4">
                                    <div>
                                        <span>Rated(5.4)</span>
                                        <span className="stars">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-half-fill"></i>
                                        </span>
                                    </div>
                                    <h5 className="mt-1 mb-2"><a href="">{title}</a></h5>
                                    <p className="small">Baked salmon to a fresh salad made with chickpeas, arugula, herbs
                                        and olives</p>
                                        <Link to='/Platos2'><a href="">Ver mas</a></Link>
                                        <Routes>
                                         <Route path='/Platos2' element={<Platos2 />} />
                                     </Routes>
                                </div>
            </div>
            
                          
    )
}

export  default Card