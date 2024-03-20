import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
const [nav,setNav] = useState(false);
  return (
    <div>
      <header>
        <div className="container">
            <div className="header__inner">

                <div onClick={()=>setNav(!nav)} className="burger__btn">
                    {nav ? <img src="public/Header/burger_close.svg"/> : <img src="public/Header/burger_open.svg"/> }
                </div>


                <ul className={
                  nav ? ['header__menu','active'].join(' ') : ['header__menu']
                }>
                  <li className="header__menu-item">
                    <Link to="/" className="header__menu-link">Главная</Link>
                  </li>
                  <li className="header__menu-item">
                    <Link to="/catalog" className="header__menu-link">Каталог</Link>
                  </li>
                  <li className="header__menu-item">
                    <a href="#" className="header__menu-link">Личный кабинет</a>
                  </li>
                </ul>

                <div className="logo">
                    <img src="public/Header/logo.svg" alt="" />
                </div>

                <a href="" className="card">
                    <img src="public/Header/card.svg" alt="" />
                </a>
            </div>
        </div>
      </header>
    </div>
  )
}
