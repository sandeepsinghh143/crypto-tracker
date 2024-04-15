"use client"
import React from 'react'
import Image from "next/image";
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import Tooltip from '@mui/material/Tooltip';
import convertNumbers from '@/utils/convertNumbers';
import { useRouter } from 'next/navigation';
import {motion} from "framer-motion"

export default function List({coin,delay}) {
  const router = useRouter();
  return (
    <motion.tr className={`dark:hover:bg-[var(--darkgrey)] hover:bg-[#f3f3f3] rounded-2xl flex justify-between items-center p-2 md:p-6 gap-4 w-full`} onClick={()=>router.push(`/dashboard/${coin.id}`)}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}>
        <Tooltip title="Logo" placement="bottom-start">
        <td className='flex justify-between items-start w-[3rem] lg:mr-12'>
        <Image src={coin.image} width={45} height={45} alt={coin.id}/>
        </td>
        </Tooltip>
        <Tooltip title="Symbol" placement="bottom-start">
        <td>
          <div className='uppercase font-semibold text-xs md:text-sm lg:text-lg text-[var(--white)]'>{coin.symbol}-USD</div>
          <div className='text-xs md:text-sm capitalize text-[var(--grey)]'>{coin.name}</div>
        </td>
        </Tooltip>

      {coin.price_change_percentage_24h>0 ?
        (
        <Tooltip title="Price Change" placement="bottom-start">
        <td>
        <div className='flex justify-start items-center gap-4'>
            <div className='border-2 border-solid border-[var(--green)] rounded-[2rem] text-center font-semibold text-[var(--green)] py-2 lg:px-6 text-xs lg:text-base hover:bg-[var(--green)] hover:text-[var(--white)] hover:transition-all min-w-[65px]'>+{coin.price_change_percentage_24h.toFixed(2)} %</div>
            <div className='hidden xl:flex justify-center items-center border-2 border-solid border-[var(--green)] rounded-[50%] text-[var(--green)] h-10 w-10 text-base hover:bg-[var(--green)] hover:text-[var(--white)] hover:transition-all'><TrendingUpRoundedIcon/></div>
        </div>
        </td>
        </Tooltip>
        )
        :
        (
        <Tooltip title="Price Change" placement="bottom-start">
        <td>
        <div className='flex justify-start items-center gap-4'>
            <div className='border-2 border-solid border-[var(--red)] rounded-[2rem] text-center md:font-semibold text-[var(--red)] py-2 lg:px-6 text-xs lg:text-base hover:bg-[var(--red)] hover:text-[var(--white)] hover:transition-all min-w-[65px]'>{coin.price_change_percentage_24h.toFixed(2)} %</div>
            <div className='hidden xl:flex justify-center items-center border-2 border-solid border-[var(--red)] rounded-[50%] text-[var(--red)] h-10 w-10 text-base hover:bg-[var(--red)] hover:text-[var(--white)] transition-all'><TrendingDownRoundedIcon/></div>
        </div>
        </td>
        </Tooltip>
        )
      }
      <Tooltip title="Current Price" placement="bottom-start">
        <td>
          <h3 className='text-xs lg:text-xl font-semibold' style={{
            color:coin.price_change_percentage_24h > 0
            ? "var(--green)"
            :"var(--red)"
          }}>
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom-start">
        <td className='text-xl hidden lg:block'>${coin.total_volume.toLocaleString()}</td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom-start">
        <td className='text-xs md:text-sm lg:hidden'>${convertNumbers(coin.total_volume)}</td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-start">
        <td className='text-xl hidden lg:block'>${coin.market_cap.toLocaleString()}</td>
        </Tooltip>
      
    </motion.tr>
  )
}
