import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useGetStatsQuery } from '../services/cryptoApi';
import millify from "millify";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import {Navigation, EffectCards } from "swiper";

const Features = () => {
  const { data, isFetching } = useGetStatsQuery();
  const globalStats = data?.data?.stats;
  if(isFetching) return 'Loading...';

  return (
    <div className='crypto-feature' id='feature'>
    <Box sx={{ display: 'flex', flexGrow: 1, flexWrap: 'wrap', textAlign: 'center'}}>
      <Grid container spacing={0} direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <div className="img1-feature">
            <img src="https://i.ibb.co/jTCDSXW/kerfin7-nea-277722.png" alt=""/>
          </div> 
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={0} direction="column" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="global-stats">
              <div>
                <img src="https://i.ibb.co/68nZLFY/bitcoin.png" alt=""/>
                <h1>GLOBAL CRYPTO STATISTICS</h1> 
                <img src="https://i.ibb.co/8YR71Vz/ethereum.png" alt=""/>
              </div>
            </Grid>
            <Grid item xs={6}> 
              <Swiper
                effect={"cards"}
                grabCursor={true}
                navigation={true}
                modules={[Navigation, EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <h2>TOTAL CRYPTO CURRENCIES</h2>
                  <span>{millify(globalStats.total, { precision: 2})}</span>
                </SwiperSlide>
                <SwiperSlide>
                  <h2>TOTAL <br/>EXCHANGES</h2>
                  <span>{millify(globalStats.totalExchanges)}</span>
                </SwiperSlide>
                <SwiperSlide>
                  <h2>TOTAL <br/>MARKET CAP</h2>
                  <span>{millify(globalStats.totalMarketCap, { precision: 2})}</span>
                </SwiperSlide>
                <SwiperSlide>
                  <h2>TOTAL <br/>24H VOLUME</h2>
                  <span>{millify(globalStats.total24hVolume, { precision: 2})}</span>
                </SwiperSlide>
            </Swiper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Features
