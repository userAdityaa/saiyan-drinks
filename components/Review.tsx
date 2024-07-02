'use client'
import React from 'react'
import { useGlobalContext } from '@/context/themeContext';
import Image from 'next/image';
import { Oswald } from 'next/font/google';

const oswald = Oswald({subsets: ['latin'], weight: ['400', '200', '300', '500']})

const Review = () => {

    const {theme, setTheme} = useGlobalContext();
     
    let background, svgColor, whichCan;

    const personList = ['/personOne', '/personTwo', '/personThree', '/personFour','/personFive'];

    if(theme === 'orange') { 
        background ='bg-[#F98A03]';
        svgColor = '#F98A03';
        whichCan = '/peachCan3.webp'
    }


  return (
    <div className={`${background} h-[140vh] w-[100vw] mt-10 flex ${oswald.className}`}>
        <svg className='w-[120%] absolute top-[203rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={`${svgColor}`} fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,234.7C384,235,480,213,576,224C672,235,768,277,864,272C960,267,1056,213,1152,213.3C1248,213,1344,267,1392,293.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/></svg>

        <div className='w-[50%] flex flex-col p-10'>
            <Image src='/star.webp' alt='stars' height={0} width={200} className='mt-[5rem]'></Image>
            <h1 className='font-bold text-[80px] text-white'>TESTIMONIALS</h1>

            <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis iusto sequi temporibus ab accusantium officiis eveniet soluta velit? Accusantium saepe aut vero reiciendis quos perferendis, debitis quidem praesentium?</p>

            <Image src={`${whichCan}`} alt='rotated can' height={0} width={600} className='mt-[5rem]'></Image>
        </div>


        <div className='w-[50%] flex flex-col'>
            <div className='rounded-xl h-[15%] w-[50%] mt-[5rem] ml-[7rem] rotate-6 relative flex flex-col bg-[#8dd3ff] text-black text-opacity-35'>
                <Image src={`${personList[0]}.webp`} alt='person' height={0} width={80} className='rounded-full absolute -top-8 -left-6'></Image>

                <h3 className=' text-[24px] font-bold absolute top-8 left-12 '>JENN C.</h3>

                <p className='absolute top-[4.3rem] w-[90%] left-10 text-[20px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolor sit amet, consecte"</p>
            </div>

            <div className='rounded-xl h-[15%] w-[50%] mt-[6rem] ml-[15rem] -rotate-12 relative flex flex-col bg-[#ffc98d] text-black text-opacity-35'>
                <Image src={`${personList[1]}.webp`} alt='person' height={0} width={80} className='rounded-full absolute -top-8 -right-6'></Image>

                <h3 className=' text-[24px] font-bold absolute top-4 left-5'>JOHN C.</h3>

                <p className='absolute top-[3.4rem] w-[90%] left-5 text-[20px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolor sit amet, consecte"</p>
            </div>

            <div className='rounded-xl h-[15%] w-[50%] mt-[5rem] ml-[2rem] -rotate-12 relative flex flex-col bg-[#c0f93f] text-black text-opacity-35'>
                <Image src={`${personList[2]}.webp`} alt='person' height={0} width={80} className='rounded-full absolute -top-8 -left-6'></Image>

                <h3 className=' text-[24px] font-bold absolute top-8 left-12 '>CHRIS G.</h3>

                <p className='absolute top-[4.3rem] w-[90%] left-10 text-[20px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolor sit amet, consecte"</p>
            </div>

            <div className='rounded-xl h-[15%] w-[50%] mt-[4rem] ml-[15rem] rotate-6 relative flex flex-col bg-[#fe647c] text-black text-opacity-35'>
                <Image src={`${personList[3]}.webp`} alt='person' height={0} width={80} className='rounded-full absolute -top-8 -right-6'></Image>

                <h3 className=' text-[24px] font-bold absolute top-4 left-5'>TINA D.</h3>

                <p className='absolute top-[3.4rem] w-[90%] left-5 text-[20px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dolor sit amet, consecte"</p>
            </div>
        </div>


    </div>
  )
}

export default Review