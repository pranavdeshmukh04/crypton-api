import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import maincryptodata from "../data"
const Main2 = () => {
  const { data, isFetching } = useGetCryptosQuery(4);
  const [coins, setCoins] = useState([]);
  // const globalStats = data?.data?.coins;
  useEffect(() =>{
    setCoins(data?.data?.coins);
    const circular_slider = document.querySelector('.wrapper'),
    slides = document.querySelectorAll('.slides'),
    images = document.querySelectorAll('.slides img');
    slides.forEach((slide, i) => {
        slide.onclick = () => {
            if(i === 0){
              circular_slider.style.transform = `rotateZ(+${360 / 7}deg)`;
            } else{
              circular_slider.style.transform = `rotateZ(-${360 / 7 * (i-1)}deg)`;
            }
            images.forEach((img, i) => {
                img.style.setProperty('--img-no', 2);
                img.classList.remove('active');

            })
        slide.querySelector('img').classList.add('active');
        }
    })
  },[data?.data?.coins]);
  if(isFetching) return 'Loading...';

  return (
    <>
      <div className="main flex-center">
          <div className="main-text">
            <span>
              <h1>WE MAKE CRYPTO <br></br>CLEAR AND SIMPLE</h1>
              <br/>
              <h3>TRACK AND TRADE CRYPTO CURRENCIES</h3>
            </span>
          </div>
          {/* <div className="circular-slider flex-center">
            <ul className="wrapper flex-center">
              {
                maincryptodata.map((data, index) => {
                  return(
                    <>
                      <li className="slides" style={{ '--img-no': index + 1 }}>
                        <img src={data.image} alt="" className={data.class}/>
                      </li> 
                    </>
                  )
                })
              }
            </ul>
          </div> */}
          <Swiper      
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            direction="circular"
            className="swiper-container"
          >
            <div className="swiper-wrapper">
            {
                maincryptodata.map((data, index) => {
                  return(
                    <>
                      <SwiperSlide key={index} className="swiper-slide">
                      </SwiperSlide> 
                    </>
                  )
                })
              }
            </div>
          </Swiper>
      </div>
    </>
    
  )
}

export default Main2
