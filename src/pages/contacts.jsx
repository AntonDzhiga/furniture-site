import React from 'react'
import DataForm from '../components/DataForm';
import style from '../style/contact.module.css'; 
import Map from '../components/Map';
const Contacts = () => {
  
  return (
    <>
      <div className={style.map_container}>
        <p><span className={style.title}>Наші контакти</span></p>
        <Map/>
          <div className={style.adress}>
          <div className={style.text}>
            <ul>
              <li>Зарванці, Вінницька область</li>
              <li>вулиця Одеська, 2</li>
            </ul>
      </div>
            <div className={style.contacts}>
              <ul>
                <li>Email: meblimaysternia@gmail.com</li>
                <li><span>+(380) 000 00 01</span></li>
                <li><span>+(380) 000 00 02</span></li>
              </ul>
            </div>
          </div>
      </div>

    <div className={style.formSection}>
        
        <DataForm/>
    </div>
    </>
  )
}

export default  Contacts;
