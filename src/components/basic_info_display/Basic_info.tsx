import React from 'react'
import Caracteristicas from '../../images/Caracteristicas.webp';
import Juego from '../../images/El juego.webp';
import Componentes3 from '../../images/Componentes XL.webp';
import './basic_info.css';

function Basic_info() {
  return (
    <div className='basic-info-display_carousel'>
        <img src  = {Juego} alt ='' className='basic-info-display_image'/>
        <img src  = {Caracteristicas} alt ='' className='basic-info-display_image'/>
        <img src  = {Componentes3} alt ='' className='basic-info-display_image'/>
    </div>
  )
}

export default Basic_info;