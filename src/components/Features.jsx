import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useGetStatsQuery } from '../services/cryptoApi';
import millify from "millify";

const Features = () => {
  const { data, isFetching } = useGetStatsQuery();
  const globalStats = data?.data?.stats;
  if(isFetching) return 'Loading...';

  return (
    <div className='crypto-feature'>
      <Box sx={{ flexGrow: 1, textAlign: 'center',}}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={10}>
          <h1>GLOBAL CRYPTO STATISTICS</h1>
        </Grid>
        <Grid item xs={3} sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}, cursor: "pointer"}}>
          <h2>TOTAL CRYPTOCURRENCIES</h2>
          <span>{millify(globalStats.total, { precision: 2})}</span>
        </Grid>
        <Grid item xs={2.5} sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}, cursor: "pointer"}}>
          <h2>TOTAL EXCHANGES</h2>
          <span>{millify(globalStats.totalExchanges)}</span>
        </Grid>
        <Grid item xs={2.5} sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}, cursor: "pointer"}}>
          <h2>TOTAL MARKET CAP</h2>
          <span>{millify(globalStats.totalMarketCap, { precision: 2})}</span>
        </Grid>
        <Grid item xs={2.5} sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}, cursor: "pointer"}}>
          <h2>TOTAL 24H VOLUME</h2>
          <span>{millify(globalStats.total24hVolume, { precision: 2})}</span>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Features
