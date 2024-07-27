'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Oswald } from 'next/font/google'
import gsap from 'gsap'

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] });

const ExpMain = () => {
    const rightButtonRef = useRef(null)
    const sliderRef = useRef(null)
    const leftButtonRef = useRef(null)
    
    // State to track current position
    const [position, setPosition] = useState(0);

    const handleRight = () => { 
        if(position === -80)
                return;
        const newPosition = position - 20; // Move -20% from current position
        gsap.to(sliderRef.current, { x: `${newPosition}%`, duration: 1, ease: 'power2.inOut', overwrite: true });
        setPosition(newPosition); // Update position
    }
    
    const handleLeft = () => {
        if(position === 0)
                return;
        const newPosition = position + 20; // Move +20% from current position
        gsap.to(sliderRef.current, { x: `${newPosition}%`, duration: 1, ease: 'power2.inOut', overwrite: true });
        setPosition(newPosition); // Update position
    }
    
    const nameContainer = ['Strawberry Twister', 'Sayian Mixer sixer', 'peach blaster', 
        'Grape top knot', 'blueberry vodka blast']
    const colorContainer = ['bg-[#9e0101]', 'bg-[#69ac0b]', 'bg-[#e07605]', 'bg-[#6d0e6d]', 'bg-[#0d10ce]']
    const imageContainer = ['/containerOneMain.png', '/ImageTwo.png', '/ImageThree.png', '/ImageFour.png', '/ImageFive.png']

  return (
    <div className={`relative bg-gradient-to-t from-[#ff7caa] via-[#ec576e] to-[#b7110b]  h-[320vh] flex items-center mt-[8rem] ${oswald.className}`}>
        <Image src= '/redBannerMain.svg' alt='red banner' width={0} height={0} className='absolute -top-[20rem] w-[120vw]'></Image>
        <div className='flex w-[95%] mx-auto h-[88%]'>
            <Image src = '/drinkingMain.webp' alt='person drinking' height={0} width={450} className='h-[25%] mt-[1rem] ml-[4rem]'></Image>

            <div className='flex flex-col text-white h-[30%]'>
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
        <Image src='/quoteContainer.svg' alt='quote container' height={0} width={100} className='opacity-25 absolute left-[42rem] top-[60rem]'></Image>
        <p className="w-[50%]  absolute left-[22rem] top-[67rem] text-white text-[4rem] uppercase leading-tight tracking-tighter font-bold text-center">The best drinks around if you want to stay fit</p>

        <div className='absolute top-[92rem] left-[3rem] flex items-center w-[93%] justify-between'>
            <div>
                <div className='uppercase text-white text-[70px] font-bold tracking-tighter leading-tight'>Sayian Mixes</div>
                <p className='text-[20px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?</p>
                <button className='bg-white w-[20%] h-[30%] mt-[1rem] p-[0.7rem] rounded-lg text-[20px] uppercase font-bold text-pink-400'>View All</button>
            </div>

            <div className='w-[13%] flex items-center space-x-5 mt-[6.5rem]'>
                <button className='bg-white rounded-full'><Image src='/arrowContainer.svg' alt='arrow' height={0} width={75} className='rotate-180' ref={leftButtonRef} onClick={handleRight}></Image></button>
                <button className='bg-white rounded-full'><Image src='/arrowContainer.svg' alt='arrow' height={0} width={75} ref={rightButtonRef} onClick={handleLeft}></Image></button>
            </div>
        </div>

        <div className='absolute top-[110rem] left-[3rem] flex items-center w-[150vw] justify-between h-[70vh] space-x-8' ref={sliderRef}>
        {nameContainer.map((name, index) => 
        <div className='w-[30%] h-[95%] flex flex-col items-center rounded-2xl'>
            <Image src={`${imageContainer[index]}`} alt='image container' width={800} height={0} className='h-[100%] rounded-2xl z-0'></Image>
            <div className={`absolute top-[29rem] rounded-xl ${colorContainer[index]} z-10 w-[25.5rem] h-[6rem] flex items-center justify-between`}  
            >
            <p className='text-white font-bold text-[30px] uppercase ml-[1rem]'>{name}</p>
                    <Image src = '/arrowChange.svg' alt='arrow change' height={0} width={40} className='mr-[1rem]'></Image>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default ExpMain
