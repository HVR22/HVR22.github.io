import React from "react";
import '../css/estilos.css'

function Footer(){
    return(
        <footer className="bg-cover">
        <div className="footer-top">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit architecto unde
                            magnam.</p>
                        <div className="social-links">
                            <a href=""><i className="ri-facebook-circle-fill"></i></a>
                            <a href=""><i className="ri-instagram-fill"></i></a>
                            <a href=""><i className="ri-youtube-fill"></i></a>
                            <a href=""><i className="ri-google-play-fill"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 ms-auto">
                        <h6 className="text-white mb-4">CONTACT</h6>
                        <p className="mb-1">P:954377377</p>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit architecto unde
                            magnam</p>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit architecto unde
                            magnam</p>
                    </div>
                    <div className="col-lg-3">
                        <h6 className="text-white mb-4">OPENING HOURS</h6>
                        <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit architecto unde
                            magnam</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit architecto unde
                            magnam</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row gy-3 justify-content-between">
                    <div className="col-auto">
                        <p className="mb-0">Copyrights all rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer