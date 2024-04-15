"use client"
import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function Search({search,onSearchChange}) {
    

  return (
    <div className='flex justify-start items-center gap-6 py-4 px-6 text-[var(--grey)] bg-[var(--darkgrey)] w-[80%] m-auto rounded-[3rem] my-4'>
        <SearchRoundedIcon/>
        <input 
        type="text" 
        name="" 
        id="" 
        className='w-full bg-transparent outline-none border-0 text-[var(--grey)]' 
        placeholder='Search' 
        value={search} 
        onChange={(e) => onSearchChange(e)}/>
    </div>
  )
}
