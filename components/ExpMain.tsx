import React from 'react'
import Image from 'next/image'
import { Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] });

const ExpMain = () => {
  return (
    <div className={`relative bg-gradient-to-t from-[#ec576e] to-[#b7110b] h-[160vh] flex items-center mt-[8rem] ${oswald.className}`}>
        <Image src= '/redBannerMain.svg' alt='red banner' width={0} height={0} className='absolute -top-[20rem] w-[120vw]'></Image>
        <div className='flex w-[95%] mx-auto h-[88%]'>
            <Image src = '/drinkingMain.webp' alt='person drinking' height={0} width={450} className='h-[50%] mt-[1rem] ml-[4rem]'></Image>

            <div className='flex flex-col text-white'>
                <p className='uppercase text-white text-[80px] tracking-tighter font-bold ml-[10rem] w-[80%] mt-[3rem] leading-tight'>It starts from the inside</p>
                <p className='text-[18px] ml-[10rem] w-[60%] mt-[1.5rem] font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eligendi molestias sit illum deserunt!</p>

                <div className='flex items-center mt-[1.5rem] ml-[10rem]'>
                    <div className='flex flex-col space-y-3'>
                        <Image src = '/oneFeMain.webp' alt='feature' height={0} width={120}></Image>
                        <p className='w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quibusdam?</p>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <Image src = '/twoFeMain.webp' alt='feature' height={0} width={120}></Image>
                        <p className='w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quibusdam?</p>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <Image src = '/threeFeMain.webp' alt='feature' height={0} width={120}></Image>
                        <p className='w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quibusdam?</p>
                    </div>
                </div>
            </div>

           
           
        </div>
    </div>
  )
}

export default ExpMain