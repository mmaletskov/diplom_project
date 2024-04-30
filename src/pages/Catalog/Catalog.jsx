import React from 'react'
import './Catalog.css'
import CatalogItem from '../../components/CatalogItem/CatalogItem'


export default function Catalog() {
  return (
    <div id="page-wrap">
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
                    <input type="search" className="nav__search" placeholder="Поиск"/>
                </div>

                <div className="sort__panel">
                  сортировать по
                  <a href="" className="sort__panel-link">новизне</a>
                  <a href="" className="sort__panel-link">популярности</a>
                  <a href="" className="sort__panel-link">цене</a>
                </div>

                <div className="catalog__list">
                  <CatalogItem/>
                  <CatalogItem/>
                  <CatalogItem/>
                  <CatalogItem/>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
