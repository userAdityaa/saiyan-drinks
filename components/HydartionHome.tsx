'use client'
import React, { useEffect } from 'react'
import { Oswald } from 'next/font/google'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const oswald = Oswald({subsets: ['latin'], weight: ['400', '200', '300', '500']})

const HydartionHome = () => {
  const cocktailRef = React.useRef(null)

  useEffect(() => { 
    gsap.set(cocktailRef.current, {x: 600})
    gsap.to(cocktailRef.current, {x: 0, duration: 1, scrollTrigger: {
      trigger: cocktailRef.current,
      start: 'top 40%',
      end: 'top 50%',
      // markers: true
    }})
  })

  gsap.registerPlugin(ScrollTrigger)
  return (
    <div className={`h-[120vh] w-[100vw] bg-[#4eceff] ${oswald.className} flex justify-around `}>
      <h1 className='text-white text-[80px] font-semibold tracking-tighte w-[45%] leading-[5.8rem] uppercase mt-[6rem]'>Fizzing with Flavor, <p className='inline text-[#fff500]'>Brimming</p> with Health hydration.</h1>
      <div className='w-[45%] -mr-[4.5rem] mt-[3rem]' ref={cocktailRef}>
        <Image src = '/cocktail.webp' alt = 'cocktail' width={800} height={0}></Image></div>
    </div>
  )
}

export default HydartionHome