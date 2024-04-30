import React from "react";

import "./Cart.css";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";

export default function Cart() {
  return (
    <div>
      <section className="cart">
        <div className="container">
          <div className="cart__inner">
            <h2 className="cart__inner-title">Корзина</h2>
            <div className="cart__wrapper">

              <div className="cart__wrapper-list">
                <CartItem/>
                <CartItem/>
                <CartItem/>
              </div>

              <div className="qwe">
              <div className="cart__wrapper-panel">
                <div className="panel__price">
                  <div className="total__price">
                    <h4>Сумма:</h4>
                    <h4>24 999</h4>
                  </div>
                  <div className="total__discount">
                    <h4>Скидка:</h4>
                    <h4>0</h4>
                  </div>
                </div>
                <Button title="Оформить заказ"/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
