"use client"
import Image from 'next/image';
import iphone from "@/assets/iphone.png"
import gradient from "@/assets/gradient.png"
import {motion} from "framer-motion";

export default function RightMain() {
  return (
    <div className='relative w-[100%] mx-auto md:w-[50%] mt-20 md:mt-0'>
        <motion.div
        className='absolute z-40 min-w-[250px] xl:min-w-[300px] w-[50%] right-[20%] md:right-0 m-auto'
        initial={{y:-10}}
        animate={{y:10}}
        transition={{
          type:"smooth",
          repeatType:"mirror",
          duration:2,
          repeat:Infinity
        }}
        >
          <Image src={iphone} alt="iphone"/>
        </motion.div>
        <Image src={gradient} alt='gradient' className='absolute min-w-[200px] xl:min-w-[250px] w-[40%] right-[20%] md:right-0 top-24 xl:top-32'/>
    </div>
  )
}
