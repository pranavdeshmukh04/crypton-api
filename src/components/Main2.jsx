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
  },[data?.data?.coins]);
  if(isFetching) return 'Loading...';
  return (
    <>
      <div className="main">
          <div className="main-text">
            <span>
              <h1>WE MAKE CRYPTO <br></br>CLEAR AND SIMPLE</h1>
              <br/>
              <h3>TRACK AND TRADE CRYPTO CURRENCIES</h3>
            </span>
          </div>
          <div className="circular-slider">
            <ul className="wrapper">
              {
                maincryptodata.map(data => {
                  return(
                    <>
                      <li className="slides">
                        <img src={data.image} alt="" width='110px' height='100px'/>
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
