import React from "react";
import * as AiIcons from "react-icons/ai";
import "./buy-tab.css";
import GameBox from "../../images/producto1.png";

interface props {
  setBuyTab: any;
  buyTab: boolean;
}

function NavBar({ setBuyTab, buyTab }: props) {
  return (
    <>
      <nav className={buyTab ? "nav-menu active" : "nav-menu"}>
        <a className="closeButton" onClick={() => setBuyTab(false)}>
          <AiIcons.AiOutlineClose size={20}/>
        </a>
        <div className="product">
          <label className="titleOfProduct">Edición estándar</label>
          <img src={GameBox} alt="" className="gameBox" />
          <ul className="itemInfo">
            <li>Juego completo con 140 cartas.</li>
            <li>Envio gratuito a toda la peninsula.</li>
          </ul>
          <button className="buyButton">14,99€</button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
