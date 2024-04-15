"use client"
import CoinInfo from '@/components/coin/CoinInfo';
import LineChart from '@/components/coin/LineChart';
import TogglePriceType from '@/components/coin/PriceType';
import SelectDays from '@/components/coin/SelectDays';
import SelectCoins from '@/components/compare/SelectCoins'
import List from '@/components/dashboard/List';
import getCoinAllData from '@/utils/getCoinAllData';
import getCoinPrices from '@/utils/getCoinPrices';
import settingChartData from '@/utils/settingChartData';
import React, { useEffect, useState } from 'react'

export default function Compare() {
  const options = ["bitcoin", "ethereum"]
  const [crypto1,setCrypto1] = useState(options[0]);
  const [crypto2,setCrypto2] = useState(options[1]);
  const [crypto1Data,setCrypto1Data] = useState("");
  const [crypto2Data,setCrypto2Data] = useState("");
  const [days,setDays] = useState(30);
  const [priceType,setPriceType] = useState("prices");
  const [chartData,setChartData] = useState("");

  const handleDaysChange = async (event) => {
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1,event.target.value,priceType);
    const prices2 = await getCoinPrices(crypto2,event.target.value,priceType);
    settingChartData(setChartData,prices1,prices2,crypto1,crypto2);
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData(){
    const prices1 = await getCoinAllData(crypto1,days,setCrypto1Data,priceType);
    const prices2 = await getCoinAllData(crypto2,days,setCrypto2Data,priceType);

    if(prices1.length>0 && prices2.length>0){
      settingChartData(setChartData,prices1,prices2,crypto1,crypto2)
    }
  }

  const handleCoinChange = async (event,isCoin2) => {
    if(isCoin2){
      const newCrypto2 = event.target.value;
        setCrypto2(newCrypto2);
        const prices1 = await getCoinPrices(crypto1, days, priceType);
        const prices2 = await getCoinPrices(newCrypto2,days,priceType);
        if(prices1.length>0 && prices2.length>0){
          settingChartData(setChartData,prices1,prices2,crypto1,crypto2);
        }
    }
    else{
      const newCrypto1 = event.target.value;
        setCrypto1(newCrypto1);
        const prices1 = await getCoinPrices(newCrypto1,days,priceType);
        const prices2 = await getCoinPrices(crypto2,days,priceType);
        if(prices1.length>0 && prices2.length>0){
          settingChartData(setChartData,prices1,prices2,crypto1,crypto2)
        }
    }
  }

  const handlePriceTypeChange = async (event, newType) => {
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1,event.days,newType);
    const prices2 = await getCoinPrices(crypto2,event.days,newType);
    settingChartData(setChartData,prices1,prices2);
  };

  return (
    <div className='p-4 lg:p-12'>
      <div className='flex justify-between md:justify-start items-center gap-8 mb-4'>
      {(crypto1 && crypto2) && 
      <SelectCoins
      crypto1={crypto1}
      crypto2={crypto2}
      handleCoinChange={handleCoinChange}
      />}
      <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={true}/>
      </div>
      {crypto1Data &&
    <table className='w-full cursor-pointer dark:bg-[var(--darkgrey)] bg-[#f3f3f3] mb-4 rounded-xl'>
      <tbody className='w-full'>
        <List coin={crypto1Data}/>
      </tbody>
    </table>
      }

    { crypto2Data &&
        <table className='w-full cursor-pointer dark:bg-[var(--darkgrey)] bg-[#f3f3f3] rounded-xl'>
          <tbody className='w-full'>
            <List coin={crypto2Data}/>
          </tbody>
        </table>
    }
      <div className='dark:bg-[var(--darkgrey)] bg-[#f3f3f3] mt-4 rounded-xl p-4'>
      <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
      {chartData && <LineChart charData={chartData} priceType={priceType} multiAxis={true}/>}
      </div>
      <div>
        {
          (crypto1Data && crypto2Data) &&
          <div>
            <CoinInfo coin={crypto1Data}/>
            <CoinInfo coin={crypto2Data}/>
          </div>
        }
      </div>
    </div>
  )
}
