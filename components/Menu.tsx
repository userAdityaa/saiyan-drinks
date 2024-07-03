'use client'

import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '@/context/themeContext';
import Image from 'next/image';
import { Oswald } from 'next/font/google';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Marquee from "react-fast-marquee";

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] })

const Menu = () => {

    const { theme, setTheme } = useGlobalContext();

    const textRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    let background, textColor;

    const leafRef = useRef<HTMLImageElement>(null);

    

    const listCan = ['STRAWBERRY', 'PEACH', 'DARGONFRUIT', 'LIME', 'BLUEBERRY', 'LEMON']

    const canContainer = ['/strawCan1.webp', '/peachCan5.webp', '/dragonCan5.webp', '/limeCan5.webp', '/blueberryCan1.webp', '/lemonCan1.webp']

    const containers = canContainer.map(() => useRef<HTMLImageElement>(null));


    const listColor = ['bg-gradient-to-t from-[#b7110b] to-[#f13e36]',  'bg-gradient-to-t from-[#dfc129] to-[#ffa131]', 'bg-gradient-to-t from-[#ff21ce] to-[#ff0ea6]', 'bg-gradient-to-t from-[#76c015] to-[#69ac0b]', 'bg-gradient-to-t from-[#3b89ff] to-[#2e4ad7]', 'bg-gradient-to-t from-[#d6c200] to-[#d5c201]']

    if(theme == 'orange') {
        background ='bg-[#ffc98d]';
        textColor = 'text-[#ff8c00]';
    }

    const handleHover = (index: number) => { 
        gsap.to(containers[index].current, {rotate: -15, scale: 1.3})
        gsap.to(leafRef.current, {left: 8})
    }


    const handleHoverOut = (index: number) => {
        gsap.to(containers[index].current, {rotate: 0, scale: 1})
        gsap.to(leafRef.current, {left: -8})
    }
    

    const buttonColor = ['text-[#f13e36]', 'text-[#ffa131]', 'text-[#ff0ea6]', 'text-[#69ac0b]', 'text-[#2e4ad7]', 'text-[#d5c201]']

  return (
    <div className={` ${background} ${oswald.className} h-[235vh] w-[100vw] ${textColor} flex flex-col items-center`}>
        <svg className='absolute -mt-10 top-[320rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" height='500px' width='2000px'><path fill="hsla(31.791044776119403, 100.00%, 77.68%, 1.00)" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,224C672,235,768,277,864,272C960,267,1056,213,1152,213.3C1248,213,1344,267,1392,293.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/></svg>


        <h1 className={`text-center pt-[8rem] text-[80px] ${textColor} font-bold tracking-tighter`}>EXPLORE FLAVORS</h1>

        <p className='text-center w-[30%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.</p>


        <div className='flex flex-wrap w-[90%] h-[90%] justify-between mt-[8rem]'>
            {listCan.map((can, index) => { 
                return <div>
                    <div className={`rounded-lg h-[41rem] flex flex-col items-center space-y-8 w-[26rem] ${listColor[index]} `} key={index}>
                        <p className='text-white font-bold text-[30px] tracking-tighter text-center pt-[2rem]'>{can}</p>

                        <Image src={`${canContainer[index]}`} alt='can' height={0} width={220} ref={containers[index]} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHoverOut(index)} className='z-10'></Image>

                    
                    

                        <div className='flex justify-between w-[85%]'>
                        <button className='text-white font-bold text-[20px] bg-black bg-opacity-30 py-[1.0.9rem] px-[2.4rem] rounded-xl'>
                            BUY NOW
                        </button>


                        <button className={`bg-white py-[0.9rem] px-[1.5rem] rounded-xl text-[20px] font-bold ${buttonColor[index]}`}>
                            BUY IN STORES
                        </button>
                        </div>
                    </div>
                </div>
            })}
        </div>
        
    </div>
  )
}

export default Menu