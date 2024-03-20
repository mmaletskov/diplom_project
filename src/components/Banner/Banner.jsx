import React from 'react'
import './Banner.css'
import Button from '../Button/Button'
import SliderImage from '../SliderImage/SliderImage'

export default function Banner() {
  return (
    <div>
      <section className="banner">
        <div className="container">
            <div className="banner__inner">
                <div className="banner__inner-copy">
                    <h1 className="banner__inner-title">il valore è</h1>
                    <p className="banner__inner-text">
                    Добро пожаловать в наш уютный онлайн магазин мужской одежды, 
                    где стиль и элегантность встречаются с комфортом и качеством! 
                    Мы рады приветствовать вас в нашем виртуальном пространстве, 
                    где вы можете насладиться удобством покупок, не выходя из дома.
                    </p>
                    <Button/>
                </div>
                <SliderImage/>
            </div>
        </div>
      </section>
    </div>
  )
}
