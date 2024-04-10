import React, { useState } from 'react';
import style from '../style/header.module.css'
import Navigation from './Navigation';
import Login from './login';
import logoImage from '../assets/logo-img.png';


const Header = () => {
    
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    }

    return (
        <div className={style.header}>
            <div className={style.header_container}>
              <div className={style.logo}>
                <img src={logoImage} alt="Logo" />
              </div>
                <div className={style.burger_menu}>
                    <input className={style.header_checkbox} type="checkbox" id="checkbox" onClick={toggleBurgerMenu} />
                    <label htmlFor="checkbox" className={style.toggle}>
                        <div className={`${style.bars} ${style.bar1}`} id="bar1"></div>
                        <div className={`${style.bars} ${style.bar2}`} id="bar2"></div>
                        <div className={`${style.bars} ${style.bar3}`} id="bar3"></div>
                    </label>
                </div>
                <Navigation isOpen={isBurgerMenuOpen}/>
                <Login/>
            </div>
        </div>
    );
}

export default Header;




