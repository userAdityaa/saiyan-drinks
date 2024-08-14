import React from 'react'
import { Oswald } from 'next/font/google';
import Image from 'next/image';


const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] });

const ReviewHome = () => {
    const containerImage = ['/personOne.webp', '/personFour.webp', '/personThree.webp'];
    const containerName = ['Kelly Ludvick', 'Jenny Jenner', 'Chris Kelly']
  return (
    <div className={`bg-[#f13e36] mt-[58rem] h-[120vh] z-[100] text-white ${oswald.className} max-pad:h-[80vh] max-air:mt-[70rem] max-mini:h-[150vh] max-mini:mt-[85rem] max-sm:mt-[210rem] max-sm:h-[180vh]`}>
        <div className='flex flex-col items-center h-[90%] max-mini:-mt-[2rem] z-50 '>
            <p className='uppercase text-[80px] font-semibold tracking-tighter mt-[6rem] max-sm:text-[40px] max-sm:mt-[10rem]'>what are you saying</p>
            <p className='text-center w-[50%] max-sm:w-[90%] max-sm:mt-[1rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea est maxime rerum minima maiores vero suscipit necessitatibus quis fugit! Error.</p>
            <div className='flex space-x-[1rem] mt-[5rem] w-[90%] max-air:flex-wrap max:mini:flex-wrap max-sm:items-center max-sm:justify-center'>
                {containerImage.map((container, index) => { 
                    return <div className='max-air:w-[22.5rem] w-[32rem] h-[25rem] rounded-lg bg-red-100 bg-opacity-45 flex flex-col items-center max-air:last:w-[60rem] max-air:last:h-[18rem] max-air:last:mt-[8rem] max-mini:w-[21rem] max-mini:last:w-[90rem] max-sm:mb-[8rem] max-sm:last:hidden'>
                        <p className='text-center w-[75%] text-[26px] font-semibold mt-[2rem]'>
                        "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO DOLOR SIT AMET, CONSECTE"
                        </p>
                        <p className='text-[22px] mt-[3rem] tracking-wide'>{containerName[index]}</p>
                        <Image src = {`${containerImage[index]}`} alt='image' height={0} width={120} className='rounded-full mt-[3rem]max-air:last:mt-[2rem]'></Image>
                    </div>
                })}
            </div>  
        </div>
    </div>
  )
}

export default ReviewHome