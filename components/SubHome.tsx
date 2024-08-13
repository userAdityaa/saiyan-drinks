'use client'
import React, { use, useEffect, useRef } from 'react'
import { Oswald } from 'next/font/google'
import Image from 'next/image';
import gsap from 'gsap'

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] });

const SubHome = () => {
  const leftLimeRef = useRef(null);
  const rightLimeRef = useRef(null);
  const rightLeafRef = useRef(null);

  useEffect(() => { 
    gsap.to(leftLimeRef.current, {y: 50, duration: 2, repeat: -1, yoyo: true});
    gsap.to(rightLimeRef.current, {y: 120, duration: 2, repeat: -1, yoyo: true});
    gsap.to(rightLeafRef.current, {y: 100, duration: 2, repeat: -1, yoyo: true});
  }, [])
  return (
    <div className={`${oswald.className} relative`}>
      <svg xmlns="http://www.w3.org/2000/svg" className='-mt-[12rem] max-mini:-mt-[7rem]' xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 375 86" width="375" height="86" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible' }}>
      <defs>
        <clipPath id="__lottie_element_8">
          <rect width="375" height="86" x="0" y="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_8)">
        <g transform="matrix(1,0,0,1,278.06805419921875,61.5260009765625)" opacity="1" style={{ display: 'block' }}>
          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
            <path fill="rgb(240,225,75)" fillOpacity="1" d="M-360,-20.416000366210938 C-390,-25.82699966430664 -420,-25.82699966430664 -450,-20.416000366210938 C-450,-20.416000366210938 -450,24.474000930786133 -450,24.474000930786133 C-450,24.474000930786133 450,24.474000930786133 450,24.474000930786133 C450,24.474000930786133 450,-20.416000366210938 450,-20.416000366210938 C420,-15.005000114440918 390,-15.005000114440918 360,-20.416000366210938 C330,-25.82699966430664 300,-25.82699966430664 270,-20.416000366210938 C240,-15.005000114440918 210,-15.005000114440918 180,-20.416000366210938 C150,-25.82699966430664 120,-25.82699966430664 90,-20.416000366210938 C60,-15.005000114440918 30,-15.005000114440918 0,-20.416000366210938 C-30,-25.82699966430664 -60,-25.82699966430664 -90,-20.416000366210938 C-120,-15.005000114440918 -150,-15.005000114440918 -180,-20.416000366210938 C-210,-25.82699966430664 -240,-25.82699966430664 -270,-20.416000366210938 C-300,-15.005000114440918 -330,-15.005000114440918 -360,-20.416000366210938z" />
          </g>
        </g>
      </g>
    </svg>

    <div className='bg-[#f0e14a] h-[160vh] flex flex-col items-center font-bold text-[#fc0c68] max-mini:h-[135vh] max-air:h-[130vh] max-pad:h-[100vh]'>
      <h1 className='text-[80px] uppercase text-center w-[50%] leading-tight tracking-tight max-mini:text-[70px] max-mini:mt-[4rem] max-mini:w-[90%] max-air:text-[70px] max-air:w-[90%] max-air:mt-[4rem]'>Subscribe &amp; Save with Sayian Drinks</h1>
      <p className='text-center w-[60%] mt-[2rem] text-[18px] max-mini:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam sunt amet. Fugiat, a?Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

      <div className='flex w-[70%] justify-between mt-[4rem] max-mini:w-[95%] max-mini:ml-[2.5rem] max-air:w-[95%]'>
        <div className='flex space-x-2 items-center'>
          <Image src = '/noBS.webp' alt = 'no bs' height={0} width={100}></Image>
          <p className='text-[22px]'>NO BS DISCOUNTS</p>
        </div>
        <div className='flex space-x-2 items-center'>
          <Image src = '/dis8.webp' alt = 'no bs' height={0} width={100}></Image>
          <p className='text-[22px]'>8% DISCOUNT</p>
        </div>
        <div className='flex space-x-2 items-center'>
          <Image src = '/ship.webp' alt = 'no bs' height={0} width={100}></Image>
          <p className='text-[22px]'>2 DAY SHIPPING</p>
        </div>
      </div>

      <Image src='/lemonMain.webp' alt='lemon main' height={0} width={120} className='absolute top-[50rem] left-[15rem] max-mini:-left-[2rem]' ref={leftLimeRef}></Image>
      <Image src='/lemonMain.webp' alt='lemon main' height={0} width={120} className='absolute top-[22rem] right-[8rem] rotate-[130deg]' ref={rightLimeRef}></Image>

      <Image src='/leafMain.webp' alt='lemon main' height={0} width={180} className='absolute top-[75rem] -left-[4rem] -rotate-90'></Image>
      
      <Image src='/leafMain.webp' alt='lemon main' height={0} width={180} className='absolute top-[45rem] -right-[4rem]'  ref={rightLeafRef}></Image>
      
      <Image src='/limeFlav.webp' alt='lemon main' height={0} width={300} className='absolute top-[63rem] left-[18rem] max-mini:left-[6.4rem] max-air:left-[6rem] max-pad:left-[6rem]'></Image>
      <Image src='/lemonBagMain.webp' alt='lemon main' height={0} width={640} className='absolute top-[57rem] right-[0rem]  max-mini:w-[28rem] max-air:w-[28rem]'></Image>
    </div>
    </div>
  )
}

export default SubHome