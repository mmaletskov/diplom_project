import React from 'react'
import './Catalog.css'

export default function Catalog() {
  return (
    <div>
      <section className="catalog">
        <div className="container">
            <div className="catalog__inner">
                <div className="nav__panel">
                    <div className="nav__links">
                        <a href="" className="nav__link">новинки</a>
                        <a href="" className="nav__link">летние</a>
                        <a href="" className="nav__link">зимние</a>
                        <a href="" className="nav__link">весенние</a>
                    </div>
                    <input type="search" className="nav__search" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
