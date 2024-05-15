import React from 'react'
import Slider from 'react-slick';
import './SliderReviews.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SliderReviews() {
    const settings = {
        dots: true,
        arrows:false,
        fade: true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
  return (
    <div>
        <Slider className="slider__reviews" {...settings}>
            <div className="slider__item">
                <h3 className="slider__item-author">Влад</h3>
                <h3 className="slider__item-size">Размер 48-50</h3>
                <div className="slider__item-descr">
                    <div className="slider__item-images">
                        <img className="slider__item-image" src="/public/Catalog/image-one.jpg" alt="" />
                        <img className="slider__item-image" src="/public/Catalog/image-one.jpg" alt="" />
                        <img className="slider__item-image" src="/public/Catalog/image-one.jpg" alt="" />
                    </div>
                    <p className="slider__item-text">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
            </div>
            <div className="slider__item">
                <h3 className="slider__item-author">Влад</h3>
                <h3 className="slider__item-size">Размер 48-50</h3>
                <div className="slider__item-descr">
                    <div className="slider__item-images">
                        <img className="slider__item-image" src="/public/Catalog/image-one.jpg" alt="" />
                        <img className="slider__item-image" src="/public/Catalog/image-one.jpg" alt="" />
                        <img className="slider__item-image" src="/public/Catalog/image-one.jpg" alt="" />
                    </div>
                    <p className="slider__item-text">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
            </div>
            <div className="slider__item">
                <h3 className="slider__item-author">Влад</h3>
                <h3 className="slider__item-size">Размер 48-50</h3>
                <div className="slider__item-descr">
                    <div className="slider__item-images">
                        <img className="slider__item-image" src="/public/Catalog/image-one.jpg" alt="" />
                        <img className="slider__item-image" src="/public/Catalog/image-one.jpg" alt="" />
                        <img className="slider__item-image" src="/public/Catalog/image-one.jpg" alt="" />
                    </div>
                    <p className="slider__item-text">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
            </div>
            {/* <div className="slider__item">
                <p className="slider__item-text">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <h3 className="slider__item-author">Евгений</h3>
                <h3 className="slider__item-size">Размер 48-50</h3>
            </div>
            <div className="slider__item">
                <p className="slider__item-text">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <h3 className="slider__item-author">Артур</h3>
                <h3 className="slider__item-size">Размер 48-50</h3>
            </div> */}
        </Slider>
    </div>
  )
}
