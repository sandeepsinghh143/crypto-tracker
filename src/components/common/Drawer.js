"use client"
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Button, IconButton } from '@mui/material';
import Link from 'next/link';

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
          <Button onClick={()=>setOpen(true)}><MenuRoundedIcon className='link'/></Button>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
            <div className='w-[40vw] h-[100vh] bg-[var(--black)] flex flex-col gap-4 p-6'>
            <div><Link href={"/"} className='link'>Home</Link></div>
            <div><Link href={"/compare"} className='link'>Compare</Link></div>
            <div><Link href={"/watchlist"} className='link'>Watchlist</Link></div>
            <div><Link href={"/dashboard"} className='link'>Dashboard</Link></div>
            </div>
          </Drawer>
    </div>
  );
}
