"use client"
import CoinInfo from '@/components/coin/CoinInfo';
import LineChart from '@/components/coin/LineChart';
import TogglePriceType from '@/components/coin/PriceType';
import SelectDays from '@/components/coin/SelectDays';
import List from '@/components/dashboard/List';
import getCoinAllData from '@/utils/getCoinAllData';
import settingChartData from '@/utils/settingChartData';
import React, { useEffect, useState } from 'react'

export default function Coin({params}) {
    const [coinData,setCoinData] = useState("");
    const {coin} = params;
    const [days,setDays] = useState(30);
    const [chartData,setChartData] = useState("");
    const [priceType, setPriceType] = useState('prices');

    useEffect(() => {
        const fetchChart = async(coin,days,setCoinData,priceType) => {
          if(coin){
            const prices = await getCoinAllData(coin,days,setCoinData,priceType);
            if(prices.length>0){
              settingChartData(setChartData,prices)
           }
         }
        }
        fetchChart(coin,days,setCoinData,priceType);
    }, [coin]);
  
      const handleDaysChange = async (event) => {
        setDays(event.target.value);
        const prices = await getCoinAllData(coin,event.target.value,setCoinData,priceType);
              if(prices.length>0){
                settingChartData(setChartData,prices);
             }
      };

      const handlePriceTypeChange = async (event, newType) => {
        setPriceType(newType);
        const prices = await getCoinAllData(coin,days,setCoinData,newType);
            if(prices.length>0){
              settingChartData(setChartData,prices)
           }
      };


  return (
    <div className="p-12">
      
      {coinData &&
    <table className="bg-[var(--darkgrey)] rounded-[1rem] lg:w-[100%] m-auto cursor-pointer">
      <tbody>
        <List coin={coinData}/>
      </tbody>
    </table>
      }
      <div className='w-full p-4 bg-[var(--darkgrey)] rounded-[1rem]'>
        <SelectDays days={days} handleDaysChange={handleDaysChange}/>
        <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
        {chartData && <LineChart charData={chartData} priceType={priceType}/>}
        </div>
      {
        coinData && <CoinInfo coin={coinData}/>
      }
    </div>
  )
}
