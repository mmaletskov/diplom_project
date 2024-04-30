import React from 'react'
import './ItemPage.css'
import Modalka from '../../components/Modalka/Modalka'
import SliderReviews from '../../components/SliderReviews/SliderReviews'
import Button from '../../components/Button/Button'
import 'animate.css';

export default function ItemPage() {
  return (
    <div>
      <section className="item__page">
        <div className="container">
            <div className="item__page-inner">
                <div className="item__details">
                   <div className="item__details-content">
                        <img className="details__content-image" src="/public/ItemPage/image-one.jpg" alt="" />
                        <div className="details__content-text">
                            <h4 className="text__title">Пиджак классический</h4>
                            <h3 className="text__price">24 999</h3>
                            <h3 className="text__count">В наличии : 3шт</h3>
                            <h3 className="text__country">Страна изготовитель : Италия</h3>
                            <Modalka/>
                            <div className="notice">
                                <img title="Не отбеливать" src="/public/ItemPage/notbleach.svg" alt="" />
                                <img title="Электросушилка запрещена" src="/public/ItemPage/nottumbledry.svg" alt="" />
                                <img title="Не стирать" src="/public/ItemPage/notwash.svg" alt="" />
                                <img title="Химчистка" src="/public/ItemPage/dryclean.svg" alt="" />
                                <img title="Утюжить при низкой t (до 110°С)" src="/public/ItemPage/iron.svg" alt="" />
                            </div>
                            <Button title="В корзину"/>
                        </div>
                   </div>
                    <p className="item__details-desc animate__animated animate__fadeInDown animate__delay-2s">
                        Однобортный костюмный пиджак VALORE из итальянской премиальной мериносовой шерсти Lanificio Zignone 
                        с накладными карманами идеально подойдет на мужчин среднего телосложения. 
                        Благодаря особому плетению нити Super 100'S, ткань обладает естественной легкой растяжимостью. 
                        Модель в полуприлегающем силуэте выполнена с использованием грязе и водоотталкивающей обработки UNIQUE SENSE. 
                        Подкладка в верхней части спинки: 55% полиэстер и 45% вискоза.
                    </p>
                </div>
                
                <div className="item__reviews">
                    <SliderReviews/>
                    <Button title="Написать отзыв"/>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
