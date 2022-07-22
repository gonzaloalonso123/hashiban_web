import React from 'react';
import '../styles/App.css';
import Logo from '../images/logo.png';

function Header() {
  return (
    <header>
      <img src = {Logo} alt = "" className='logo'/>
        <ul>
          <li><a className="linkButtonActive">Comprar</a></li>
          <li><a className="linkButton" href='#'>Sobre nosotros</a></li>
          <li><a className="linkButton" href='#'>Contacto</a></li>
        </ul>
    </header>
  );
}

export default Header;