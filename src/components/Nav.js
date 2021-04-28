import React, { useState, useEffect } from "react";
import "../app/styles/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const transtitonNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transtitonNavBar);
    return () => window.removeEventListener("scroll", transtitonNavBar);
  }, []);
  return (
    <div className={`nav ${show && "navBlack"}`}>
      <div className="navContents">
        <div className="navRight">
          <div className="navLogo">
            <img
              src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt=""
            />
          </div>
          <ul className="navMenu" id="ac">
            <li className="active">Inicio</li>
            <li>
              <a href="#Series">Series Tv</a>
            </li>
            <li>
              <a href="#Peliculas">Peliculas</a>
            </li>
            <li>
              <a href="#Novedades mas vistas">Novedades mas vistas</a>
            </li>
            <li>
              <a href="#Mi Lista">Mi Lista</a>
            </li>
          </ul>
        </div>

        <div className="navAvatar">
          <img
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
