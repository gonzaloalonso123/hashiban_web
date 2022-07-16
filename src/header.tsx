import React from 'react';
import './App.css';
import BatImg from './images/bat.png';

function Header() {
  return (
    <header>
        <a href='#' className='logo'>Logo</a>
        <ul>
          <li><a href='#' className='active'>Comprar</a></li>
          <li><a href='#'>Sobre nosotros</a></li>
          <li><a href='#'>Contacto</a></li>
        </ul>
    </header>
  );
}

export default Header;