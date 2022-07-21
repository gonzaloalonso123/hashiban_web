import React from 'react';
import '../styles/App.css';
import BatImg from './images/bat.png';

function Header() {
  return (
    <header>
        <a href='#' className='logo'>Logo</a>
        <ul>
          <li><a className="linkButtonActive">Comprar</a></li>
          <li><a className="linkButton" href='#'>Sobre nosotros</a></li>
          <li><a className="linkButton" href='#'>Contacto</a></li>
        </ul>
    </header>
  );
}

export default Header;