import React, { useEffect, useState } from 'react'
import './CatalogItem.css'
import { Link } from 'react-router-dom'
import ItemButton from '../ItemButton/itemButton'
import { getDatabase, ref, onValue } from 'firebase/database';
import app from "../../firebase";


export default function CatalogItem({title,price}) {

  const [tovars, setTovars] = useState([]);

  useEffect(()=>{
    const db = getDatabase(app)
    const tovRef = ref(db, "tovars")

    onValue(tovRef, (snapshot) => {
      const data = snapshot.val();
      setTovars(data);
    })
  }, []);

  return (
    <>
    <div className="card__item"> 
    <img className="card__item-image" src="/public/Catalog/image-one.jpg" alt="" />
        <div className="card__item-title">
            <p>{title}</p>
            <p>{price} ₽</p>
        </div>
       <ItemButton title="В корзину"/>
    </div>
    </>
  )
}
