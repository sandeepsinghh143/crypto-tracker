"use client"
import React from 'react'
import Button from '../common/Button'
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function LeftMain() {
  const router = useRouter();
  return (
    <div>
        <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='text-center md:text-left text-5xl md:text-7xl xl:text-9xl text-[var(--white)] font-bold left-heading mt-5'
        >Track Crypto
        </motion.h1>

        <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='text-center md:text-left text-5xl md:text-7xl xl:text-9xl text-[var(--blue)] font-bold'>
          Real Time.
        </motion.h1>
        
        <p className='text-xs md:text-base text-[var(--grey)] mt-10 text-center md:text-left'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
        <div className='flex justify-center md:justify-start items-center gap-6 mt-10'>
            <Button text={"Dashboard"} onClick={() => router.push("/dashboard")}/>
            <Button text={"Share"} outlined/>
        </div>
    </div>
  )
}
