import React from 'react'
import Image from 'next/image'
import { Oswald } from 'next/font/google'

const oswald = Oswald({subsets: ['latin'], weight: ['400', '200', '300', '500']})

const HeroHome = () => {
  return (
    <div className={`bg-[#4eceff] h-[180vh] max-mini:h-[210vh] w-[100vw] ${oswald.className} flex flex-col justify-center items-center`}>
        <Image src='/goSaiyan.webp' width={1100} height={500} alt='logo' className='absolute top-[22%] left-[18vw] w-[64%] max-pad:top-[13%] max-mini:top-[18%] max-sm:w-[22rem] max-sm:left-8'></Image>
        <p className='text-white w-[30%] text-center -mt-[60vh] max-mini:-mt-[80rem] max-pad:-mt-[94rem] max-air:-mt-[85rem] max-sm:w-[95%] max-sm:-mt-[70rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam beatae sit doloribus atque</p>
        <button className='bg-[#fff500] text-[#4eceff] py-[0.8rem] px-[1.4rem] rounded-md font-bold text-[20px] mt-[1.5rem]'>SHOP NOW</button>
        <Image src='/mainCan.webp' alt='main can' width={2300} height={0} className='absolute top-[75%] left-[12%] max-pad:top-[40%] max-mini:w-[88%] max-mini:top-[55%] max-sm:w-[370px]'></Image>
        <Image src='/redOrange.webp' alt='red orange' height={200} width={200} className='absolute top-[40%] left-[0%] max-pad:top-[10%] max-pad:-left-[5%] max-mini:w-[20%]'></Image>
        <Image src='/mainPeach.webp' alt='main peachs' height={200} width={150} className='max-mini:w-[15%] max-pad:top-[8%] max-pad:-right-[2.5%] absolute top-[20%] right-[1vw]'></Image>
        <Image src='/mainLime.webp' alt='main lime' height={200} width={150} className='max-mini:w-[18%] absolute top-[80%] right-[2%] max-pad:top-[40%]'></Image>
        <Image src='/leftLeaf.webp' alt='main leaf' height={200} width={250} className='max-mini:w-[22%] absolute top-[110%] -left-[3%] rotate-45 max-pad:top-[70%]'></Image>
        <Image src='/rightLeafe.webp' alt='main leaf' height={200} width={220} className='absolute top-[150%] -right-[5%] -rotate-12 max-pad:hidden'></Image>
    </div>
  )
}

export default HeroHome