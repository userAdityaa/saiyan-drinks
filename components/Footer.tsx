'use client'

import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '@/context/themeContext';
import Image from 'next/image';
import { Oswald } from 'next/font/google';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] });

const Footer = () => {
const { theme, setTheme } = useGlobalContext();

  gsap.registerPlugin(ScrollTrigger);

  let background, svgColor;

  if(theme === 'peach') { 
    background = 'bg-[#F98A03]';
    svgColor = '#F98A03';
  }
  else if(theme === 'lime') { 
    background = 'bg-[#69ac0b]';
    svgColor = '#69ac0b';
  }
  else if(theme === 'dragonfruit') { 
    background = 'bg-[#ff21ce]'
    svgColor = '#ff21ce'
  }

  return (
    <div className={`${background} h-[70vh] relative`}>
        <svg
        className="w-[120%] absolute -top-[23rem]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path fill={`${svgColor}`} fillOpacity="1" d="M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,224C672,235,768,277,864,272C960,267,1056,213,1152,213.3C1248,213,1344,267,1392,293.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>

      <Image src='/footer.webp' alt='footer' height={0} width={1300} className='absolute top-[10.5rem] left-[5rem]'></Image>

    </div>
  )
}

export default Footer