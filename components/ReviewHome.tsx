import React from 'react'
import { Oswald } from 'next/font/google';
import Image from 'next/image';


const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] });

const ReviewHome = () => {
    const containerImage = ['/personOne.webp', '/personFour.webp', '/personThree.webp'];
    const containerName = ['Kelly Ludvick', 'Jenny Jenner', 'Chris Kelly']
  return (
    <div className={`bg-[#f13e36] mt-[58rem] h-[120vh] z-[100] text-white ${oswald.className}`}>
        <div className='flex flex-col items-center h-[90%]'>
            <p className='uppercase text-[80px] font-semibold tracking-tighter mt-[6rem]'>what are you saying</p>
            <p className='text-center w-[50%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea est maxime rerum minima maiores vero suscipit necessitatibus quis fugit! Error.</p>
            <div className='flex space-x-[1rem] mt-[5rem] w-[90%]'>
                {containerImage.map((container, index) => { 
                    return <div className='w-[30rem] h-[25rem] rounded-lg bg-red-100 bg-opacity-45 flex flex-col items-center'>
                        <p className='text-center w-[75%] text-[26px] font-semibold mt-[2rem]'>
                        "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO DOLOR SIT AMET, CONSECTE"
                        </p>
                        <p className='text-[22px] mt-[3rem] tracking-wide'>{containerName[index]}</p>
                        <Image src = {`${containerImage[index]}`} alt='image' height={0} width={120} className='rounded-full mt-[3rem]'></Image>
                    </div>
                })}
            </div>  
        </div>
    </div>
  )
}

export default ReviewHome