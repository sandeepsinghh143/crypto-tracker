"use client"
import dynamic from "next/dynamic"
// import Search from '@/components/dashboard/Search';
// import Tabs from '@/components/dashboard/Tabs'
const Loading = dynamic(()=>import("./loading"))
const Search = dynamic(()=>import("@/components/dashboard/Search"),{ssr:false})
const Tabs = dynamic(()=>import("@/components/dashboard/Tabs"),{ssr:false,loading: () => <Loading />})
import React, { useEffect, useState } from 'react'
import axios from "axios";
import BackToTop from "@/components/common/BackToTop"
import fetchData from "@/utils/fetchData"
// import PaginationComponent from '@/components/dashboard/Pagination';
const PaginationComponent = dynamic(()=>import("@/components/dashboard/Pagination"),{ssr:false})
// import Loading from './loading';


export default function Dashboard() {
  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState("");
  const [paginatedCoins,setPaginatedCoins] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const handlePageChange = (event, value) => {
    setPageNo(value);
    let previousIndex = (value-1)*10;
    setPaginatedCoins(coins.slice(previousIndex,previousIndex+10));
  };
  useEffect(()=>{
    getData();
  },[])
  const getData = async () => {
    const myCoins = await fetchData();
    if(myCoins){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0,10));
    }
  }
    
    const onSearchChange = (e) => {
      setSearch(e.target.value);
    }
    let filteredCoins = coins.filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-screen">
        <Search search={search} onSearchChange={onSearchChange}/>
        <Tabs coins={search?filteredCoins:paginatedCoins} search={search}/>
        {!search && paginatedCoins.length!=0 && <PaginationComponent pageNo={pageNo} handleChange={handlePageChange}/>}
        <BackToTop/>
    </div>
  )
}
