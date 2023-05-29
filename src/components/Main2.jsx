import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from "millify";
import { Link } from 'react-router-dom'

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
          <div className="circular-slider flex-center">
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
          </div>
          {/* <div className='main-crypto-wrapper'>
            {
              coins?.map(coin => {
                const isPositive = coin.change > 0;
                return(
                  <div key={coin.uuid}>
                  <Link to={`/coin/${coin.uuid}`}>
                    <div className='main-crypto'>
                        <div className='main-crypto-img'>
                          <img src={coin.iconUrl} alt={coin.name} width='110px' height='100px'/>
                        </div>
                        <span className='main-crypto-name'>{coin.name}<span className='main-crypto-change'style={{ color: isPositive ? '#0ecb81' : 'red' }}>{coin.change}%</span></span>
                        <span className='main-crypto-price'>$ {millify(coin.price,{ precision: 3})}</span>
                    </div>
                  </Link>
                  </div>
                );
              })
            }
          </div> */}
      </div>
    </>
    
  )
}

export default Main2
