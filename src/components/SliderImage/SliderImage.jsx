import React from 'react'
import Slider from 'react-slick';
import './SliderImage.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SliderImage() {
    const settings = {
        dots: true,
        arrows:false,
        fade: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
  return (
    <div>
        <Slider className="slider__items" {...settings}>
            <div>
                <img src="public/Banner/image_one.png" alt="" />
            </div>
            <div>
                <img src="public/Banner/image_two.png" alt="" />
            </div>
            <div>
                <img src="public/Banner/image_three.png" alt="" />
            </div>
            <div>
                <img src="public/Banner/image_four.png" alt="" />
            </div>
        </Slider>
    </div>
  )
}
