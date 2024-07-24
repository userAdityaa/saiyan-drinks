import React from 'react'
import Image from 'next/image'
import { Oswald } from 'next/font/google'

const oswald = Oswald({subsets: ['latin'], weight: ['400', '200', '300', '500']})

const HeroHome = () => {
  return (
    <div className={`bg-[#4eceff] h-[180vh] w-[100vw] ${oswald.className} flex flex-col justify-center items-center`}>
        <Image src='/goSaiyan.webp' width={880} height={500} alt='logo' className='absolute top-[22%] left-[20%]'></Image>
        <p className='text-white w-[30%] text-center -mt-[28rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam beatae sit doloribus atque</p>
        <button className='bg-[#fff500] text-[#4eceff] py-[0.8rem] px-[1.4rem] rounded-md font-bold text-[20px] mt-[1.5rem]'>SHOP NOW</button>
        <Image src='/mainCan.webp' alt='main can' width={1200} height={300} className='absolute top-[75%] left-[12%]'></Image>
        <Image src='/redOrange.webp' alt='red orange' height={200} width={200} className='absolute top-[40%] left-[0%]'></Image>
        <Image src='/mainPeach.webp' alt='main peachs' height={200} width={150} className='absolute top-[20%] right-[5%]'></Image>
        <Image src='/mainLime.webp' alt='main lime' height={200} width={150} className='absolute top-[80%] right-[2%]'></Image>
        <Image src='/leftLeaf.webp' alt='main leaf' height={200} width={250} className='absolute top-[110%] -left-[3%] rotate-45'></Image>
        <Image src='/rightLeafe.webp' alt='main leaf' height={200} width={220} className='absolute top-[150%] -right-[5%] -rotate-12'></Image>
    </div>
  )
}

export default HeroHome