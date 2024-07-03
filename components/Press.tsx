'use client'

import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '@/context/themeContext';
import Image from 'next/image';
import { Oswald } from 'next/font/google';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Marquee from "react-fast-marquee";

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] })


const Press = () => {

    const { theme, setTheme } = useGlobalContext();

    const textRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    let background;

    if(theme == 'orange') {
        background = 'bg-[#F98A03]';
    }
    
  return (
    <div className={`${background} h-[80vh] ${oswald.className}  text-white`}>
        <h1 className='font-bold text-[80px] tracking-tighter pt-[2rem] text-center'>IN THE PRESS</h1>
        <p className='text-white font-light text-[14px] text-center w-[25%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.</p>

        <Marquee speed={150} className='mt-[7rem] tracking-wide'>
            <div className='flex flex-col space-y-5 items-center mr-[4rem]'>
                <Image src='/memphis.webp' alt='logo' height={0} width={200}></Image>
                <p className='text-center font-light w-[60%]'>"The best drinks around if you want to stay fit"</p>
            </div>
            <div className='flex flex-col space-y-5 items-center mr-[4rem]'>
                <Image src='/bern.webp' alt='logo' height={0} width={200}></Image>
                <p className='text-center font-light w-[60%]'>"The best drinks around if you want to stay fit"</p>
            </div>
            <div className='flex flex-col space-y-5 items-center mr-[4rem]'>
                <Image src='/Aura.webp' alt='logo' height={0} width={200}></Image>
                <p className='text-center font-light w-[60%]'>"The best drinks around if you want to stay fit"</p>
            </div>

            <div className='flex flex-col space-y-5 items-center mr-[4rem]'>
                <Image src='/chicago.webp' alt='logo' height={0} width={200}></Image>
                <p className='text-center font-light w-[60%]'>"The best drinks around if you want to stay fit"</p>
            </div>

            <div className='flex flex-col space-y-5 items-center mr-[4rem]'>
                <Image src='/seoul.webp' alt='logo' height={0} width={200}></Image>
                <p className='text-center font-light w-[60%]'>"The best drinks around if you want to stay fit"</p>
            </div>

            <div className='flex flex-col space-y-5 items-center mr-[4rem]'>
                <Image src='/oslo.webp' alt='logo' height={0} width={200}></Image>
                <p className='text-center font-light w-[60%]'>"The best drinks around if you want to stay fit"</p>
            </div>
        </Marquee>

    </div>
  )
}

export default Press