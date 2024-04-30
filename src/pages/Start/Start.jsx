import React from 'react'
import Button from '../../components/Button/Button'
import SliderImage from '../../components/SliderImage/SliderImage'
import './Start.css'
import 'animate.css';

export default function Start() {
  return (
    <div id="page-wrap">
      <section className="banner">
        <div className="container">
            <div className="banner__inner">
                <div className="banner__inner-copy animate__animated animate__fadeInLeft">
                    <h1 className="banner__inner-title">il valore è</h1>
                    <p className="banner__inner-text">
                    Добро пожаловать в наш уютный онлайн магазин мужской одежды, 
                    где стиль и элегантность встречаются с комфортом и качеством! 
                    Мы рады приветствовать вас в нашем виртуальном пространстве, 
                    где вы можете насладиться удобством покупок, не выходя из дома.
                    </p>
                    <Button title="В каталог"/>
                </div>
                <SliderImage/>
            </div>
        </div>
      </section>


      <section className="about__us">
        <div className="container">
          <div className="about__us-inner">
              <div className="advantages__title animate__animated animate__fadeInLeft animate__delay-2s">Почему мы?</div>
              <div className="advantages__one animate__animated animate__fadeInRight animate__delay-2s">Быстрые сроки доставки</div>
              <div className="advantages__two animate__animated animate__fadeInLeft animate__delay-2s">Индивидуальный пошив</div>
              <div className="advantages__three animate__animated animate__fadeInRight animate__delay-2s">Лучше качество на рынке</div>
          </div>
        </div>
      </section>
    </div>
  )
}
