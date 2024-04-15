"use client"
import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import fetchData from '@/utils/fetchData';

export default function SelectCoins({crypto1,crypto2,handleCoinChange}) {
    const [allCoins,setAllCoins] = useState([]);
    
    const styles = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
          color: "var(--white)",
        },
        "&:hover": {
          "&& fieldset": {
            borderColor: "#3a80e9",
          },
        },
      }

      

      useEffect(()=>{
        getData();
      },[])

      async function getData(){
        const myCoins = await fetchData();
        if(myCoins){
        setAllCoins(myCoins);
        }
      }

  return (
    <div className='flex justify-start items-center gap-4'>
        <div className='hidden md:block'>Crypto1</div>
        <Select
          value={crypto1}
          label="Crypto 1"
          onChange={(event)=>handleCoinChange(event,false)}
          sx={styles}
        >
            {allCoins.length > 0 && allCoins.filter((item)=>item.id!=crypto2).map((coin) => <MenuItem value={coin.id} key={coin.id}>{coin.name}</MenuItem>)}
        </Select>

        <div className='hidden md:block'>Crypto2</div>
        <Select
          value={crypto2}
          label="Crypto 2"
          onChange={(event)=>handleCoinChange(event,true)}
          sx={styles}
        >
            {allCoins.length > 0 && allCoins.filter((item)=>item.id!=crypto1).map((coin) => <MenuItem value={coin.id} key={coin.id}>{coin.name}</MenuItem>)}
        </Select>
    </div>
  )
}
