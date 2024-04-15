"use client"
import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {createTheme,ThemeProvider} from "@mui/material"
import dynamic from 'next/dynamic'
import List from './List';
// import Grid from './Grid';

const Grid = dynamic(
  () => import('./Grid'),
  {ssr:false},
)

export default function Tabs({search,coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme=createTheme({
    palette:{
        primary:{
            main:"#3a80e9",
        }
    }
  })
  const style={
    color:"var(--white)",
    width:"50vw",
    fontSize:"1.2rem",
    fontWeight:"600",
    textTransform:"uppercase"
  }

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        <TabPanel value="grid">
          {(search && coins.length == 0 ) ? 
          (<div className='max-w-screen text-center mt-10'>
            No Results Found
          </div>) 
          :
            (<div className='max-w-screen flex justify-center flex-col md:flex-row items-center flex-wrap gap-8 mx-6 my-4'>
                {coins.map((coin,i)=>{
                    return (
                        <Grid coin={coin} key={i} delay={(i % 4) * 0.2}/>
                    )
                })}
            </div>)
            }
        </TabPanel>
        <TabPanel value="list">
        {(search && coins.length == 0 ) ? 
          (<div className='text-center mt-10'>
            No Results Found
          </div>) 
          :
            (<table className='w-[95%] lg:w-[90%] m-auto cursor-pointer'>
              <tbody>
                {coins.map((coin,i)=>{
                    return (
                        <List coin={coin} key={i} delay={(i % 8) * 0.2}/>
                    )
                })}
              </tbody>
            </table>
            )
          }
        </TabPanel>
      </TabContext>
      </ThemeProvider>
  );
}