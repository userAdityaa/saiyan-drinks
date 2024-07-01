'use client'
import { NavbarProps } from '@/types/NavbarTypes'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { Oswald } from 'next/font/google';
import gsap from 'gsap';
import { useGlobalContext } from '@/context/themeContext';
import { text } from 'stream/consumers';

const oswald = Oswald({subsets: ['latin'], weight: ['400', '200', '300', '500']})

  
const Hero = () => {

  const {theme, setTheme} = useGlobalContext();

  const [activeButton, setActiveButton] = useState('BUY NOW');
  const [whichCan, setWhichCan] = useState('peachCan1');

  const listAvl = ['/bern.webp', '/barca.webp', '/seoul.webp', '/chicago.webp'];
  const listCan = ['peach', 'lime', 'dragonfruit', 'lemon', 'straw', 'grape'];

  const containers = listCan.map(() => useRef<HTMLDivElement>(null));

  let leftTheme, rightTheme, topicName, textColor, buttonColor, collectionCan;



  if (theme === 'orange') {
    leftTheme = 'bg-[#ff8c00]';
    rightTheme = 'bg-[#ffc98d]';
    topicName = 'PEACH';
    textColor = 'text-[#ff8c00]';
    collectionCan = ['peachCan1', 'peachCan2', 'peachCan3', 'peachCan4'];
    buttonColor = 'bg-[#ffa131]';
  } else if (theme === 'lime') {
    leftTheme = 'bg-[#69ac0b]';
    rightTheme = 'bg-[#cdfe8c]';
    topicName = 'LIME';
    textColor = 'text-[#69ac0b]';
    collectionCan = ['limeCan1', 'limeCan2', 'limeCan3', 'limeCan4'];
    buttonColor = 'bg-[#76c015]';
  } else if(theme == 'dragonfruit') { 
    leftTheme = 'bg-[#ff21ce]';
    rightTheme = 'bg-[#ffb5ef]';
    topicName = "DRAGON FRUIT"; 
    textColor = 'text-[#ff21ce]';
    collectionCan = ['dragonCan1', 'dragonCan2', 'dragonCan3', 'dragonCan4'];
  }

  const changeCan = (can: string) => {
    setWhichCan(can);
  };

  const handleCanClick = (index: number) => {
    if(index == 0) { 
      setTheme('orange');
      setWhichCan('peachCan1');
    }
    else if (index === 1) {
      setTheme('lime');
      setWhichCan('limeCan1');
    } else if(index === 2) {
      setTheme('dragonfruit');
      setWhichCan('dragonCan1');
    }  
  };

  const handleMouseEnter = (index: number) => {
    if (containers[index].current) {
      gsap.to(containers[index].current, { y: -10 });
    }
  };

  const handleMouseLeave = (index: number) => {
    if (containers[index].current) {
      gsap.to(containers[index].current, { y: 0 });
    }
  };

  return (
    <div className={`h-[100vh] w-[100vw] flex justify-center ${oswald.className}`}>
      <div className={`w-[50%] h-[100%] ${leftTheme} flex flex-col justify-center`}>
        <div className='flex flex-col items-center h-[80%] p-[5rem]'>

          <div className='flex space-x-3 items-center'>
            <Image src='/star.webp' alt='stars' width={110} height={110}></Image>
            <p className='text-white font-light text-[15px]'>3 reviews</p>
          </div>

          <p className='text-[5rem] font-bold text-white tracking-tight'>
            {topicName}
          </p>

          <p className='text-white'>$ 8.00 USD</p>

          <p className='w-[50%] text-center text-[18px] font-light text-white mt-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

          <div className='flex items-center mt-[2.5rem] space-x-4 absolute top-[25rem]'>
                        {listCan.map((can, index) => (
                            <div className='flex-col space-y-3 items-center' key={index} onMouseLeave={() => handleMouseLeave(index)} onMouseEnter={() => handleMouseEnter(index)} ref={containers[index]} onClick={() => handleCanClick(index)}>
                                <Image src={`/${can}.webp`} alt='cans' height={90} width={90}></Image>
                                <div className='uppercase text-white text-center font-semibold'>{can}</div>
                            </div>
                        ))}
                    </div>

          <div className='border border-zinc-300 w-[28%] h-[18%] absolute top-[38rem] rounded-lg pt-[0.8rem] pl-[1.2rem]'>
            <div className='flex items-center text-white text-[20px] w-[95%]'>
              <div
                className={`flex w-[50%] justify-center cursor-pointer ${activeButton === 'BUY NOW' ? `${buttonColor} text-white rounded-lg` : ''}`}
                onClick={() => setActiveButton('BUY NOW')}
              >
                BUY NOW
              </div>
              <div
                className={`flex w-[50%] justify-center cursor-pointer ${activeButton === 'FIND IN STORES' ? `${buttonColor} text-white rounded-lg` : ''}`}
                onClick={() => setActiveButton('FIND IN STORES')}
              >
                FIND IN STORES
              </div>
            </div>

            {activeButton === 'BUY NOW' ? 
            <div className='flex items-center mt-[2rem] h-[40%] space-x-4'>
              <input type="number" className='w-[20%] h-[100%] text-[22px] pl-[1rem]' />

              <button className={`bg-white ${textColor} h-[100%] w-[70%] text-[22px]`}>ADD TO CART</button>
            </div>
                : <div className='flex items-center mt-[2rem]'>
                    {listAvl.map((avl, index) => {
                        return <Image src={`${avl}`} alt='avl' height={0} width={90}></Image>
                    })}
                    </div>}   
          </div>

                        

          
        </div>
      </div>

      <div className={`w-[50%] h-[100%] ${rightTheme} flex flex-col items-center`}>
            <div className='w-[100%] h-[60%] mt-[4rem]'>
                <svg xmlns="http://www.w3.org/2000/svg" className="rotating-slow object-containe relative" viewBox="0 0 771 771"><defs><filter x="-3.5%" y="-3.5%" width="107%" height="100%" filterUnits="objectBoundingBox" id="filter-bm-58z8e9r-1"><feGaussianBlur stdDeviation="9" in="SourceGraphic"/></filter></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd" opacity=".65"><g id="Home" transform="translate(-526 -192)" fill="white"><path id="Star" filter="url(#filter-bm-58z8e9r-1)" d="m911.5 701.893-21.167 252.513 7.239-253.296-49.306 248.556 35.554-250.892-76.825 241.472 63.421-245.334-103.379 231.353 90.491-236.691-128.632 218.323 116.423-225.071-152.267 202.548 140.89-210.62L659.954 858.98l163.587-193.521L630.02 829.046l184.226-173.988-210.62 140.89 202.548-152.267-225.071 116.423 218.323-128.632-236.691 90.491 231.353-103.379-245.334 63.421 241.472-76.825-250.892 35.554 248.556-49.306-253.296 7.239L787.107 577.5l-252.513-21.167 253.296 7.239-248.556-49.306 250.892 35.554-241.472-76.825 245.334 63.421-231.353-103.379 236.691 90.491-218.323-128.632 225.071 116.423-202.548-152.267 210.62 140.89L630.02 325.954l193.521 163.587L659.954 296.02l173.988 184.226-140.89-210.62 152.267 202.548-116.423-225.071 128.632 218.323-90.491-236.691 103.379 231.353-63.421-245.334 76.825 241.472-35.554-250.892 49.306 248.556-7.239-253.296L911.5 453.107l21.167-252.513-7.239 253.296 49.306-248.556-35.554 250.892 76.825-241.472-63.421 245.334 103.379-231.353-90.491 236.691 128.632-218.323-116.423 225.071 152.267-202.548-140.89 210.62 173.988-184.226-163.587 193.521 193.521-163.587-184.226 173.988 210.62-140.89-202.548 152.267 225.071-116.423-218.323 128.632 236.691-90.491-231.353 103.379 245.334-63.421-241.472 76.825 250.892-35.554-248.556 49.306 253.296-7.239-252.513 21.167 252.513 21.167-253.296-7.239 248.556 49.306-250.892-35.554 241.472 76.825-245.334-63.421 231.353 103.379-236.691-90.491 218.323 128.632-225.071-116.423 202.548 152.267-210.62-140.89 184.226 173.988-193.521-163.587 163.587 193.521-173.988-184.226 140.89 210.62-152.267-202.548 116.423 225.071-128.632-218.323 90.491 236.691-103.379-231.353 63.421 245.334-76.825-241.472 35.554 250.892-49.306-248.556 7.239 253.296z"/></g></g></svg>


                <Image className='absolute top-[8rem] right-[6rem]' src={`/${whichCan}.webp`} alt='can' height={500} width={550}></Image>

                <div className='flex w-[50%] mx-auto h-[18%] absolute top-[41rem] space-x-10 justify-center'>
                    {collectionCan!.map((can, index) => {
                        return <div key={index} className='mt-[1rem] border border-white rounded-full h-[80%] w-[15%] flex items-center justify-center' onClick={() => changeCan(can)}>
                            <Image src={`/${can}.webp`} alt='cans' height={10} width={90}></Image>
                        </div>
                    })}
                </div>

            </div>
      </div>    
    </div>
  )
}

export default Hero
