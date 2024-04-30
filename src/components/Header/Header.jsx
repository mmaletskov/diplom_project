import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

import Menu from '../Menu/Menu';

export default function Header() {
  return (
    <div>
      <header>
        <div className="container">
            <div className="header__inner">

              <Menu customBurgerIcon={ <img src="/public/Header/burger_open.svg" /> } pageWrapId={ "page-wrap" } />

                <div className="logo">
                    <img src="public/Header/logo.svg" alt="" />
                </div>

                <Link to="/cart" className="card">
                    <img src="public/Header/card.svg" alt="" />
                </Link>
            </div>
        </div>
      </header>
    </div>
  )
}
