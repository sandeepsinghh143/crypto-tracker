import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS} from "chart.js/auto"
import convertNumbers from '@/utils/convertNumbers';

export default function LineChart({charData,priceType, multiAxis}) {
    const options = {
        plugins:{
            legend:{
                display:multiAxis ? true : false,
            },
        },
        responsive:true,
        interaction:{
            mode:"index",
            intersect:false,
        },
        // scales: {
        //     crypto1: {
        //       position: "left",
        //     },
        //     crypto2: multiAxis && {
        //       position: "right",
        //     },
        //   },
          scales: {
            crypto1:{
                type:"linear",
                display:true,
                position:"left",
                ticks:{
                    callback:function(value,index,ticks){
                        if(priceType=="prices"){
                            return "$" + value.toLocaleString();
                        }
                        return "$" + convertNumbers(value);
                    }
                }
            },
            crypto2:{
                type:"linear",
                display:true,
                position:"right",
                ticks:{
                    callback:function(value,index,ticks){
                        if(priceType=="prices"){
                            return "$" + value.toLocaleString();
                        }
                        return "$" + convertNumbers(value);
                    }
                }
            }
          },
    }
  return (
    <Line data={charData} options={options}/>
  )
}
