import axios from "axios";

export default async function fetchData(){
    let data;
    try{
        data = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
        data = await data.data;
    }
    catch(err){
        console.log(err);
    }
    return data;
}