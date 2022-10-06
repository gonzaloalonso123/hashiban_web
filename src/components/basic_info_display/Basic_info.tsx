import React from 'react'
import Caracteristicas from '../../images/Caracteristicas.png';
import Componentes1 from '../../images/c1.png';
import Componentes2 from '../../images/c2.png';
import './basic_info.css';

function Basic_info() {
  return (
    <div className='basic-info-display_carousel'>
        <img src  = {Caracteristicas} alt ='' className='basic-info-display_image'/>
        <img src  = {Componentes1} alt ='' className='basic-info-display_image'/>
        <img src  = {Componentes2} alt ='' className='basic-info-display_image'/>
        {/* <img src  = {Componentes1} alt ='' className='basic-info-display_image'/> */}
    </div>
  )
}

export default Basic_info;