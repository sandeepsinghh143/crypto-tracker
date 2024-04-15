import axios from "axios";
export default function getCoinPrices(coin,days,priceType){
    const prices = axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then((res)=>res.data[priceType])
    .catch((err)=>console.log(err))
    return prices;
}