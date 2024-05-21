import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./SliderReviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import app from "../../firebase";
import { getDatabase, ref, get } from "firebase/database";

export default function SliderReviews() {
  const [reviews, setReviews] = useState([]);

  async function fetchReviews() {
    const db = getDatabase(app);
    const dbRef = ref(db, "reviews/");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const myData = snapshot.val();
      const temporaryArray = Object.keys(myData).map((myFireId) => {
        return {
          ...myData[myFireId],
          reviewId: myFireId,
        };
      });
      setReviews(temporaryArray);
    }
  }

  useEffect(() => {
    fetchReviews();
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div>
      <Slider className="slider__reviews" {...settings}>
        {reviews.map((item, index) => {
          return (
            <div className="slider__item">
              <p className="slider__item-text">{item.text}</p>
              <h3 className="slider__item-author">{item.author}</h3>
              <h3 className="slider__item-size">Размер 48-50</h3>
            </div>
          );
        })}
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
  );
}
