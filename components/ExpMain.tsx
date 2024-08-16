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
    

    const [position, setPosition] = useState(0);

    const handleRight = () => { 
        if(position === -80)
                return;
        const newPosition = position - 20; 
        gsap.to(sliderRef.current, { x: `${newPosition}%`, duration: 1, ease: 'power2.inOut', overwrite: true });
        setPosition(newPosition); 
    }
    
    const handleLeft = () => {
        if(position === 0)
                return;
        const newPosition = position + 20; 
        gsap.to(sliderRef.current, { x: `${newPosition}%`, duration: 1, ease: 'power2.inOut', overwrite: true });
        setPosition(newPosition);
    }
    
    const nameContainer = ['Strawberry Twister', 'Sayian Mixer sixer', 'peach blaster', 
        'Grape top knot', 'blueberry vodka blast']
    const colorContainer = ['bg-[#9e0101]', 'bg-[#69ac0b]', 'bg-[#e07605]', 'bg-[#6d0e6d]', 'bg-[#0d10ce]']
    const imageContainer = ['/containerOneMain.png', '/ImageTwo.png', '/ImageThree.png', '/ImageFour.png', '/ImageFive.png']

  return (
    <div className={`relative bg-gradient-to-t from-[#ff7caa] via-[#ec576e] to-[#b7110b]  h-[320vh] flex items-center mt-[8rem] ${oswald.className} max-mini:-mt-[20rem] max-air:-mt-[20rem] max-pad:-mt-[45rem]`}>
        <Image src= '/redBannerMain.svg' alt='red banner' width={0} height={0} className='absolute -top-[20rem] w-[120vw] max-mini:-top-[10rem] max-air:-top-[10rem] max-pad:-top-[10rem] max-sm:-top-[5.5rem]'></Image>
        <div className='flex w-[95%] mx-auto h-[88%] max-mini:flex-col max-air:flex-col max-pad:flex-col'>
            <Image src = '/drinkingMain.webp' alt='person drinking' height={0} width={450} className='h-[25%] mt-[1rem] ml-[4rem] max-mini:hidden max-air:hidden max-pad:hidden'></Image>

            <div className='flex flex-col text-white h-[30%] max-mini:-mt-[10rem] max-air:-mt-[10rem] max-pad:-mt-[10rem]'>
                <p className='uppercase text-white text-[80px] tracking-tighter font-bold ml-[10rem] w-[80%] mt-[3rem] leading-tight  max-mini:w-[95%] max-mini:text-center max-mini:ml-0 max-air:ml-0 max-air:text-center max-air:w-[95%] max-pad:w-[95%] max-pad:text-center max-pad:ml-0 max-sm:text-[50px] max-sm:mx-auto'>It starts from the inside</p>
                    <p className='text-[18px] ml-[10rem] w-[60%] mt-[1.5rem] font-light max-mini:text-center max-mini:ml-[8rem] max-air:text-center max-air:ml-[8rem] max-pad:ml-[11rem] max-air-text-center max-pad:text-center max-sm:mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eligendi molestias sit illum deserunt!</p>

                <div className='flex items-center mt-[1.5rem] ml-[10rem] max-mini:ml-[5rem] max-air:ml-[5rem] max-pad:ml-[6rem] max-sm:mx-auto max-sm:ml-[1.5rem]'>
                    <div className='flex flex-col space-y-3 max-sm:text-[14px] max-sm:text-center '>
                        <Image src = '/oneFeMain.webp' alt='feature' height={0} width={120}></Image>
                        <p className='w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <span className='max-sm:hidden'> Magni, quibusdam?</span></p>
                    </div>
                    <div className='flex flex-col space-y-3 max-sm:text-[14px] max-sm:text-center'>
                        <Image src = '/twoFeMain.webp' alt='feature' height={0} width={120}></Image>
                        <p className='w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <span className='max-sm:hidden'>Magni, quibusdam? </span> </p>
                    </div>
                    <div className='flex flex-col space-y-3 max-sm:text-[14px] max-sm:text-center'>
                        <Image src = '/threeFeMain.webp' alt='feature' height={0} width={120}></Image>
                        <p className='w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <span className='max-sm:hidden'> Magni, quibusdam? </span></p>
                    </div>
                </div>
            </div>

            <Image src = '/drinkingMain.webp' alt='person drinking' height={0} width={450} className='h-[25%] mt-[1rem] ml-[4rem] max-mini:-mt-[10rem] max-mini:h-[20%] max-mini:mx-auto max-air:mx-auto max-air:h-[20%] max-air:-mt-[20rem] max-pad:-mt-[32rem] max-pad:h-[15%] max-pad:mx-auto max-sm:w-[90%] max-sm:h-[18%]'></Image>
        </div>
        <Image src='/quoteContainer.svg' alt='quote container' height={0} width={100} className='opacity-25 absolute left-[42rem] top-[60rem] max-mini:mt-[30rem] max-mini:left-[22rem] max-air:left-[22rem] max-air:mt-[32rem] max-pad:mt-[32rem] max-pad:left-[30rem] max-sm:left-[10.5rem] max-sm:top-[46rem]'></Image>
        <p className="w-[50%]  absolute left-[22rem] top-[67rem] text-white text-[4rem] uppercase leading-tight tracking-tighter font-bold text-center max-mini:mt-[28rem] max-mini:left-[2.5rem] max-mini:w-[90%] max-air:w-[90%] max-air:left-[2.5rem] max-air:mt-[28rem] max-pad:mt-[28rem] max-pad:left-[17.5rem] max-sm:top-[52rem] max-sm:text-[50px] max-sm:left-[1.5rem]">The best drinks around if you want to stay fit</p>

        <div className='absolute top-[92rem] left-[3rem] flex items-center w-[93%] justify-between  max-mini:top-[110rem] max-air:top-[110rem] max-pad:top-[120rem] max-sm:top-[98rem] max-sm:w-[100%]'>
            <div>
                <div className='uppercase text-white text-[70px] font-bold tracking-tighter leading-tight max-sm:text-[50px]'>Sayian Mixes</div>
                <p className='text-[20px] text-white max-sm:w-[90%] max-sm:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, corporis?</p>
                <button className='bg-white w-[20%] h-[30%] mt-[1rem] p-[0.7rem] rounded-lg text-[20px] uppercase font-bold text-pink-400 max-sm:w-[8rem] max-sm:text-[16px]'>View All</button>
            </div>

            <div className='w-[13%] flex items-center space-x-5 mt-[6.5rem] max-sm:w-[40%] max-sm:mr-[5rem] max-sm:mt-[13rem]'>
                <button className='bg-white rounded-full'><Image src='/arrowContainer.svg' alt='arrow' height={0} width={75} className='rotate-180 max-sm:w-[6rem]' ref={leftButtonRef} onClick={handleRight}></Image></button>
                <button className='bg-white rounded-full  max-sm:w-[6rem]'><Image src='/arrowContainer.svg' alt='arrow' height={0} width={75} ref={rightButtonRef} onClick={handleLeft}></Image></button>
            </div>
        </div>

        <div className='absolute top-[110rem] left-[3rem] flex items-center w-[150vw] max-mini:w-[280vw] max-mini:h-[60vh] justify-between h-[70vh] space-x-8 max-mini:top-[125rem] max-air:top-[125rem] max-air:w-[260vw] max-air:h-[50vh] max-pad:h-[50vh] max-pad:w-[230vw] max-pad:top-[135rem] max-sm:top-[118rem] max-sm:w-[420vw]' ref={sliderRef}>
        {nameContainer.map((name, index) => 
        <div className='w-[30%] h-[95%] flex flex-col items-center rounded-2xl max-mini:w-[50rem] max-pad:w-[50%]'>
            <Image src={`${imageContainer[index]}`} alt='image container' width={800} height={0} className='h-[100%] rounded-2xl z-0 max-sm:w-[80rem]'></Image>
            <div className={`absolute top-[29rem] rounded-xl ${colorContainer[index]} z-10 w-[25.5rem] h-[6rem] flex items-center justify-between max-sm:w-[20.2rem] max-sm:top-[28rem]`}  
            >
            <p className='text-white font-bold text-[30px] uppercase ml-[1rem] max-sm:text-[25px]'>{name}</p>
                    <Image src = '/arrowChange.svg' alt='arrow change' height={0} width={40} className='mr-[1rem]'></Image>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default ExpMain
