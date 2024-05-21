import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
            <div className="footer__inner">
                <Link to='/'><img src="public/Footer/logo-footer.svg" alt="" /></Link>
                <a className="author__link" href="">
                  Разработчик: <br /> Малецков Михаил
                </a>
                {/* <nav className="menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <a href="#" className="menu__link">Главная</a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">Каталог</a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">Профиль</a>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </div>
      </footer>
    </div>
  )
}
