import React, {useState} from 'react'
import { useParams } from "react-router-dom";
import millify from 'millify';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useGetCryptoDetailsQuery} from '../services/cryptoApi';

const Coin = () => {
  const { coinId } = useParams();
  const {data , isFetching} = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  if(isFetching) return 'Loading...';
  console.log(data);
  return (
    <div className='crypto-coindetails'>
      <Box sx={{ display: 'flex', flexGrow: 1}}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid container direction="column" xs={3} sx={{textAlign: 'center'}}>
            <Grid item style={{filter: `dropShadow(5px, 5px, 5px, #2600fc)`}}>
              <img src={cryptoDetails.iconUrl} alt={cryptoDetails.name} width='230px' height='230px'></img>
            </Grid>
            <Grid item>
              <h1><span style={{color:`${cryptoDetails.color}`}}>{cryptoDetails.name}</span></h1>
            </Grid>
            <Grid item>
              <h3>Rank: #{cryptoDetails.rank}</h3>
              <h3><a href={cryptoDetails.websiteUrl}>WEBSITE</a></h3>
            </Grid>
          </Grid>
          <Grid container direction="column" xs={6}>
            <Grid container direction="row">
              <Grid item xs={3}>
                <h2>Symbol: <span style={{color:`${cryptoDetails.color}`}}>{cryptoDetails.symbol}</span></h2>
              </Grid> 
              <Grid item xs={4}>
                <h2>24h Change: <span style={{ color: cryptoDetails.change > 0 ? '#0ecb81' : 'red' }}>{cryptoDetails.change}%</span></h2>
              </Grid>
              <Grid item xs={4}>
                <h2>Price: <span style={{ color:'#0ecb81'}}>${millify(cryptoDetails.price, {precision: 3})}</span></h2>
              </Grid>
              
            </Grid>
            <Grid item>
              <h2><span>{cryptoDetails.description}</span></h2>
            </Grid>
            <Grid container direction="column">
              <Grid item xs={5}>
                <h2>No of Exchanges: <span style={{ color:'#0ecb81'}}>{millify(cryptoDetails.numberOfMarkets, {precision: 3})}</span></h2>
              </Grid>
              <Grid item xs={4}>
                <h2>No of Markets: <span style={{ color:'#0ecb81'}}>{millify(cryptoDetails.numberOfExchanges, {precision: 3})}</span></h2>
              </Grid>
              <Grid item xs={4}>
                <h2>All Time High Price: <span style={{ color:'#0ecb81'}}>${millify(cryptoDetails.allTimeHigh.price, {precision: 3})}</span></h2>
              </Grid> 
              
            </Grid>
            
            
          </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Coin
