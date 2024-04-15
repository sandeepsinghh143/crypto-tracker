"use client"
import React from 'react'
import Image from "next/image";
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import Link from "next/link";
import {motion} from "framer-motion"

export default function Grid({coin,delay}) {
  
  return (
    <motion.div className={`w-[calc(100vw-100px)] md:w-[290px] bg-[var(--darkgrey)] border-2 border-solid border-[var(--darkgrey)] rounded-lg p-8 cursor-pointer ${coin.price_change_percentage_24h > 0 ? "hover:border-[var(--green)]" : "hover:border-[var(--red)]"} hover:transition-all hover:scale-105`} 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    >
    <Link href={`/dashboard/${coin.id}`} className={`w-full m-auto`}>
    <div className={`w-[250px] md:w-full m-auto`}>
      <div className='flex justify-start items-start gap-4'>
        <Image src={coin.image} width={45} height={45} alt={coin.id}/>
        <div>
          <div className='uppercase font-semibold text-lg text-[var(--white)]'>{coin.symbol}-USD</div>
          <div className='text-sm capitalize text-[var(--grey)]'>{coin.name}</div>
        </div>
      </div>

      {coin.price_change_percentage_24h>0 ?
        (
          <div className='flex justify-start items-center gap-4 mt-8'>
            <div className='border-2 border-solid border-[var(--green)] rounded-[2rem] text-center font-semibold text-[var(--green)] py-2 px-6 text-base hover:bg-[var(--green)] hover:text-[var(--white)] hover:transition-all min-w-[65px]'>+{coin.price_change_percentage_24h.toFixed(2)} %</div>
            <div className='flex justify-center items-center border-2 border-solid border-[var(--green)] rounded-[50%] text-[var(--green)] h-10 w-10 text-base hover:bg-[var(--green)] hover:text-[var(--white)] transition-all'><TrendingUpRoundedIcon/></div>
          </div>
        )
        :
        (
          <div className='flex justify-start items-center gap-4 mt-8'>
            <div className='border-2 border-solid border-[var(--red)] rounded-[2rem] text-center font-semibold text-[var(--red)] py-2 px-6 text-base hover:bg-[var(--red)] hover:text-[var(--white)] hover:transition-all min-w-[65px]'>{coin.price_change_percentage_24h.toFixed(2)} %</div>
            <div className='flex justify-center items-center border-2 border-solid border-[var(--red)] rounded-[50%] text-[var(--red)] h-10 w-10 text-base hover:bg-[var(--red)] hover:text-[var(--white)] transition-all'><TrendingDownRoundedIcon/></div>
          </div>
        )
      }
      <div className='mt-8'>
          <h3 className='text-xl font-semibold mb-4' style={{
            color:coin.price_change_percentage_24h > 0
            ? "var(--green)"
            :"var(--red)"
          }}>
            ${coin.current_price.toLocaleString()}
          </h3>
          <div className='text-sm mb-2'>Total Volume : ${coin.total_volume.toLocaleString()}</div>
          <div className='text-sm'>Market Cap : ${coin.market_cap.toLocaleString()}</div>
      </div>
      </div>
      </Link>
    </motion.div>
    
  )
}
