import React from 'react'
import { Oswald } from 'next/font/google'
import Image from 'next/image'

const oswald = Oswald({subsets: ['latin'], weight: ['400', '200', '300', '500']})

const HydartionHome = () => {
  return (
    <div className={`h-[120vh] w-[100vw] bg-[#4eceff] ${oswald.className} flex justify-around `}>
      <h1 className='text-white text-[80px] font-semibold tracking-tighte w-[45%] leading-[5.8rem] uppercase mt-[6rem]'>Fizzing with Flavor, <p className='inline text-[#fff500]'>Brimming</p> with Health hydration.</h1>
      <div className='w-[45%] -mr-[4.5rem] mt-[3rem]'>
        <Image src = '/cocktail.webp' alt = 'cocktail' width={800} height={0}></Image></div>
    </div>
  )
}

export default HydartionHome