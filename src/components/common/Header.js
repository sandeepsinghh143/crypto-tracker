import Link from 'next/link'
import React from 'react'
import AnchorTemporaryDrawer from './Drawer'

export default function Header() {
  return (
    <header className='flex justify-between items-center bg-[var(--black)] text-[var(--white)] sticky top-0 md:px-12 md:py-4 p-6 z-50'>
        <h1 className='text-base md:text-3xl font-bold'>CryptoTracker<span className='text-[var(--blue)]'>.</span></h1>
        <nav className='md:flex justify-end items-center gap-6 font-semibold text-base] hidden'>
            <Link href={"/"} className='link'>Home</Link>
            <Link href={"/compare"} className='link'>Compare</Link>
            <Link href={"/watchlist"} className='link'>Watchlist</Link>
            <Link href={"/dashboard"} className='link btn'>Dashboard</Link>
        </nav>
        <div className="mobile-drawer md:hidden">
            <AnchorTemporaryDrawer/>
        </div>
    </header>
  )
}
