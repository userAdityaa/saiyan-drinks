'use client';
import React from 'react'
import { useGlobalContext } from '@/context/themeContext';
import { Oswald } from 'next/font/google';
import Image from 'next/image';

const oswald = Oswald({subsets: ['latin'], weight: ['400', '200', '300', '500']})

const Comparison = () => {

  const {theme, setTheme} = useGlobalContext();

  let background, textColor, compBoard;

  if(theme === 'orange') { 
    background ='bg-[#ffc98d]';  
    textColor = 'text-[#ff8c00]'; 
    compBoard = '/peachComp.png';
  }
  else if(theme === 'lime') { 
    background = 'bg-[#cdfe8c]';
    textColor = 'text-[#69ac0b]';
    compBoard = '/limeComp.png';
  }
  else if(theme === 'dragonfruit') { 
    background = 'bg-[#ffb5ef]';
    textColor = 'text-[#ff21ce]';
    compBoard = '/dragonComp.png';
  }

  return (
    <div className={`h-[120vh] w-[100vw] ${background} flex flex-col items-center ${oswald.className} ${textColor}`}>
      <h1 className='mt-[5rem] text-[80px] font-bold tracking-tighter'>US VS THEM</h1>
      <Image src={`${compBoard}`} alt='comparison board' height={0} width={1200} className='mt-[2rem]'></Image>
    </div>
  )
}

export default Comparison