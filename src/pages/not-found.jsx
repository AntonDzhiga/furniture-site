import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/main_foto/main-banner.jpg'; 

  const NotFound = () => {
    return (
      <div className='backToMain' style={{backgroundImage: `linear-gradient(rgba(104, 104, 104, 0.9), rgba(235, 230, 230, 0.9)), url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{textAlign: 'center', color: 'black'}}>
          <h1>Сторінку не знайдено.</h1>
          <Link to="/" style={{fontSize:24, color: 'black'}}>На головну</Link>
        </div>
      </div>
    )
}

export default  NotFound;
