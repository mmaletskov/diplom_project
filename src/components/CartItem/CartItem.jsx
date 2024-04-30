import React from "react";
import "./CartItem.css";

export default function CartItem() {
  return (
    <div>
      <div className="cart__wrapper-item">
        <div className="wrapper__item-image">
        <img
          className="item__image"
          src="/public/Catalog/image-one.jpg"
          alt=""
        />
        <a href="" className="wrapper__item-delete">Удалить</a>
        </div>
        
        
        <div className="wrapper__item-descr">
          <h4 className="descr__title">Пиджак классический мужской</h4>
          <h3 className="descr__price">24 999 ₽</h3>
          <div className="control__btns">
            <img src="/public/Cart/minus.svg" alt="" />
            <p>1</p>
            <img src="/public/Cart/plus.svg" alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
}
