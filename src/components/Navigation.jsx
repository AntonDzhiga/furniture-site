import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../style/header.module.css';

const Navigation = ({ isOpen }) => {
    return (
        <div className={`${style.header_menu} ${isOpen ? style.open : ''}`}>
            <ul className={style.nav_header}>
                <li>
                    <NavLink exact to="/" className={style.nav_link} activeClassName={style.active}>Головна</NavLink>
                </li>
                <li>
                    <NavLink to="/catalog" className={style.nav_link} activeClassName={style.active}>Каталог</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={style.nav_link} activeClassName={style.active}>Галерея</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className={style.nav_link} activeClassName={style.active}>Контакти</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
