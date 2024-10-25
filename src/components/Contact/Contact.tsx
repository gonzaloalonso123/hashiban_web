import React from 'react';
import './Contact.css';


interface IContactProps {
  setContactEnabled : React.Dispatch<React.SetStateAction<any>>
}

function Contact({setContactEnabled} : IContactProps) {
  return (
    <div className='contact-background'>
        <div className='contact-popUp border-2 border-white p-4 rounded-xl'>
            Contáctanos en: hashiban@tiranik.com
        <button className='std-button' onClick={() => setContactEnabled(false)}>Ok!</button>
        </div>
    </div>
  )
}

export default Contact;