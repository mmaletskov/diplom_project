import React from 'react'
import './CatalogItem.css'
import { Link } from 'react-router-dom'
import ItemButton from '../ItemButton/itemButton'


export default function CatalogItem() {
  return (
    <>
    <Link to="/itemPage" className="card__item"> 
    <img className="card__item-image" src="/public/Catalog/image-one.jpg" alt="" />
        <div className="card__item-title">
            <p>Костюм классический</p>
            <p>24 999 ₽</p>
        </div>
       <ItemButton title="В корзину"/>
    </Link>
    </>
  )
}
