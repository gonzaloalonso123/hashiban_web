import React from 'react';
import './Contact.css';


interface IContactProps {
  setContactEnabled : React.Dispatch<React.SetStateAction<any>>
}

function AboutUs({setContactEnabled} : IContactProps) {
  return (
    <div className='contact-background'>
        <div className='contact-popUp border-2 border-white'>
            Contáctanos en: info@hashiban.es
        <button className='std-button' onClick={() => setContactEnabled(false)}>Ok!</button>
        </div>
    </div>
  )
}

export default AboutUs;