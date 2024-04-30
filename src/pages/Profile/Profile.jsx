import React from 'react'
import './Profile.css'

export default function Profile() {
  return (
    <div>
      <section className="profile">
        <div className="container">
            <div className="profile__inner">

              <div className="profile__inner-header">
                <img src="/public/Profile/avatar.png" alt="" />
                <div className="header__bio">
                  <p className="header__name">Иванов Иван</p>
                  <p className="header__email">ivanov@mail.ru</p>
                  <button><img className="header__edit" src="/public/Profile/edit.svg" alt=""/></button>
                </div>
              </div>

              <div className="profile__inner-details">
                <h3 className="details__title">Мои заказы</h3>
                <div className="details__nav">
                  <a href="" className="nav__item">В доставке</a>
                  <a href="" className="nav__item">Получены</a>
                  <a href="" className="nav__item">Возвращены</a>
                </div>
                <div className="details__body">

                  <div className="body__item">
                    <p className="item__name">Костюм</p>
                    <p className="item__price">1х24 999</p>
                  </div>

                  <div className="body__item">
                    <p className="item__name">Костюм</p>
                    <p className="item__price">1х24 999</p>
                  </div>
                  
                  <div className="body__item">
                    <p className="item__name">Костюм</p>
                    <p className="item__price">1х24 999</p>
                  </div>

                </div>
              </div>

              <div className="profile__inner-desc">
                <div className="desc__summ">
                  <h3 className="summ__title">Общая сумма выкупа</h3>
                  <h3 className="summ__body">74 997</h3>
                </div>
                <button className="desc__exit">Выйти из аккаунта</button>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}
