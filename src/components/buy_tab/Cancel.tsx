import { Link } from 'react-router-dom';
import './cancel_success.css';

const Cancel = () =>  {
    return (
        <div className='info_container'>
            <h1 className='info_title'>Ups!</h1>
            <h2 className='info_info'>La orden ha sido cancelada.</h2>
            <Link to = '/'>
                <button className='info_button'>✓</button>
            </Link>
            
        </div>
    );
}

export default Cancel;