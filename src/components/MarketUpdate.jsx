import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { useGetStatsQuery } from '../services/cryptoApi';
import millify from "millify";

const columns = [
  { field: 'rank', headerName: 'RANK', width: 90, headerAlign: 'center', headerClassName: 'class-header', align: 'center'},
  {
    field: 'name',
    headerName: 'NAME',
    width: 150,
    headerAlign: 'center',
    headerClassName: 'class-header',
    align: 'center'
  },
  {
    field: 'price',
    headerName: 'PRICE',
    type: 'number',
    width: 150,
    headerAlign: 'center',
    headerClassName: 'class-header',
    align: 'center'
  },
  {
    field: 'change',
    headerName: 'CHANGE',
    type: 'number',
    width: 110,
    headerAlign: 'center',
    headerClassName: 'class-header',
    align: 'center'
  },
  {
    field: 'marketcap',
    headerName: 'MARKETCAP',
    type: 'number',
    width: 140,
    headerAlign: 'center',
    headerClassName: 'class-header',
    align: 'center'
  },
  {
    field: 'icon',
    headerName: 'ICON',
    width: 120,
    headerAlign: 'center',
    headerClassName: 'class-header',
    renderCell: (params) => <img src={params.value} height="70%" alt=""/>,
    align: 'center'
  },
];

const Marketupdate = () => {
  const { data, isFetching } = useGetStatsQuery();
  const [coins, setCoins] = useState([]);
  const [rows, setRows] = useState([]);
  // const globalStats = data?.data?.coins;
  useEffect(() =>{
    setCoins(data?.data?.coins);
  },[data?.data?.coins]);

    useEffect(() => {
      if(coins){
        const newRows  = coins?.map(coin => {
          return { 
            id: coin.uuid,
            rank: coin.rank,
            name: coin.name,
            price: millify(coin.price, { precision: 2}),
            change: coin.change,
            marketcap:  millify(coin.marketCap, { precision: 2}),
            icon: coin.iconUrl
          };
        });
        setRows(newRows);
      }  
    }, [coins]);

    const navigate = useNavigate()
    const handleRowClick = (id) => {
      navigate(`/coin/${id}`);
    };
    if(isFetching) return 'Loading...';
    const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
      [`& .${gridClasses.row}.even`]: {

        borderRadius: '10px',
        margin: '0.5vh 0 0.5vh 0',
        fontWeight: 'bold',
        backgroundColor: '#3b486a',
        '&:hover, &.Mui-hovered': {
          backgroundImage: `linear-gradient(80deg, rgba(38, 0, 252, 0.5), rgba(255, 0, 234, 0.5))`,
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        }
      },
      [`& .${gridClasses.row}.odd`]: {
        borderRadius: '10px',
        margin: '0.5vh 0 0.5vh 0',
        fontWeight: 'bold',
        backgroundColor: 'none',
        '&:hover, &.Mui-hovered': {
          backgroundImage: `linear-gradient(80deg, rgba(38, 0, 252, 0.5), rgba(255, 0, 234, 0.5))`,
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        }
      },
    }));

  return (
    <div className='crypto-marketupdate'>
      <div className="crypto-marketupdate-header">
        <img src="https://i.ibb.co/68nZLFY/bitcoin.png" alt=""/>
        <h1>MARKET UPDATE</h1>
        <img src="https://i.ibb.co/8YR71Vz/ethereum.png" alt=""/>
      </div>
      <div className="marketupdate-table">
      <Box sx={{
        display: 'flex', 
        flexGrow: 1, textAlign: 'center', 
        height: "91vh", width: '100%',
        '& .class-header':{
          fontWeight: 'bold',
          color: '#8484d4',
          fontSize: '2.5vh'
        },
        
      }}>
        <StripedDataGrid
          rows={rows}
          onRowClick={(rows) => handleRowClick(rows.id)}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          sx={{
            cursor: 'pointer',
            alignItems: 'center',
            border: 'none',
            '& .MuiDataGrid-cell': {
              color: '#cacfdd',
            },
            '&>.MuiDataGrid-main': {
              '&>.MuiDataGrid-columnHeaders': {
                  borderBottom: 'none'
              },
              '& div div div div >.MuiDataGrid-cell': {
                  borderBottom: 'none'
              }
            },
            ".MuiTablePagination-toolbar": {
              backgroundColor: "#8484d4",
              borderRadius: '15px',
              margin: '0.5vh 0 0.5vh 0',
            },
          }}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
        />
      </Box>
      </div>
    </div>
  )
}

export default Marketupdate
