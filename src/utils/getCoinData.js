import axios from "axios";
export default function getCoinData(coin){
    const data = axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`)
        .then((res)=>res.data)
        .catch((err)=>console.log(err))
        return data;
}