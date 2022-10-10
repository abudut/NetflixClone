import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "../app/styles/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

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
            <img onClick={() => history.push("/")} src="/logo.png" alt="" />
          </div>
          <ul className="navMenu">
            <li
              className={isActive ? "active" : null}
              onClick={() => {
                history.push("/");
                toggleClass();
              }}
            >
              Inicio
            </li>
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
              <a  href="#MiLista">Mi Lista</a>
            </li>
          </ul>
        </div>

        <div className="navAvatar">
          <img
            onClick={() => history.push("/profile")}
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
