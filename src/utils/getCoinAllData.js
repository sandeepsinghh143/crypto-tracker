
import getCoinData from "./getCoinData";
import coinObject from "./coinObject";
import getCoinPrices from "./getCoinPrices";
export default async function getCoinAllData(coin,days,setCoinData,priceType){
    const data = await getCoinData(coin);
    if(data){
        await coinObject(setCoinData,data);
        const prices = await getCoinPrices(coin,days,priceType);
        return prices;
    }
    
}