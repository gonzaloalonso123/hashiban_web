import React from 'react'
import './footer.css';
import {IoLogoInstagram} from 'react-icons/io';

interface IFooterProps {
  setContactEnabled : React.Dispatch<React.SetStateAction<any>>
}

function Footer({setContactEnabled} : IFooterProps) {
  return (
    <div
      id="footer"
    >
      <nav>
        <a href="#" className='std-button'>Sobre nosotros</a>
        <button className = 'std-button' onClick={() => setContactEnabled(true)}>Contacto</button>
        <a href ='https://www.instagram.com/hashiban_es/' className='std-button ig-icon'><IoLogoInstagram/></a>
      </nav>
    </div>
  )
}

export default Footer