import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
            <div className="footer__inner">
                <a href="" className="">
                    <img src="public/Footer/logo-footer.svg" alt="" />
                </a>
                <nav className="menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <a href="#" className="menu__link">Главная</a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">Каталог</a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">Личный кабинет</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </footer>
    </div>
  )
}
