"use client"
import React, { useState } from 'react'

export default function CoinInfo({coin}) {
    const [flag,setFlag] = useState(false);
    const shortDesc= coin.desc.slice(0,350) +"<div style='color:var(--grey);cursor:pointer'>Read More...</div>";
    const longDesc = coin.desc+"<div style='color:var(--grey);cursor:pointer'>Read Less...</div>";
  return (
    <div className='dark:bg-[var(--darkgrey)] bg-[#f3f3f3] p-6 mt-4 rounded-[1rem]' onClick={()=>setFlag(!flag)}>
        <div className='text-base md:text-2xl font-bold mb-4'>{coin.name}</div>
        {coin.desc.length > 350 ?
        <div dangerouslySetInnerHTML={{__html:!flag?shortDesc:longDesc}} className='coin-info text-sm md:text-base'/>
        :
        <div dangerouslySetInnerHTML={{__html:coin.desc}} className='coin-info text-sm md:text-base'/>
        }
        
    </div>
  )
}
