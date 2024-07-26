'use client'
import React, { useEffect } from 'react'
import { Oswald } from 'next/font/google'
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] });

const AmbMain = () => {
    const imageRef = useRef(null);
    const containerName = ['Jennysmith', 'Teena92', 'Deen54']
    const profileImage = ['/profileONe.webp', '/profileTwo.webp', '/profileThree.webp']
    const containerView = ['778.9K', '549K', '7.5M']

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY

            if(scrollTop > 7500) 
                gsap.to(imageRef.current, {x: scrollTop / 30 , duration: 2, repeat: -1, yoyo: true})
            if(scrollTop < 7450 && scrollTop > 7000)
                gsap.to(imageRef.current, {x: -scrollTop / 10 , duration: 2, repeat: -1, yoyo: true})     
        });
    }, []);

  return (
    <div className={`${oswald.className} h-[170vh] bg-[#f0e14a]`}>
        <div className='flex items-center -mt-[1rem]' ref={imageRef}>
            <Image src = '/textAnimation.svg' alt='animation text' width={900} height={0}></Image> 
            <Image src = '/textAnimation.svg' alt='animation text' width={900} height={0}></Image> 
            <Image src = '/textAnimation.svg' alt='animation text' width={900} height={0}></Image>
            <Image src = '/textAnimation.svg' alt='animation text' width={900} height={0}></Image>
            <Image src = '/textAnimation.svg' alt='animation text' width={900} height={0}></Image>
            <Image src = '/textAnimation.svg' alt='animation text' width={900} height={0}></Image>
        </div>
        <div className='text-[90px] font-[900] uppercase tracking-tighter text-[#fc0c68] w-[70%] text-center mt-[8rem] ml-[16%]'>Saiyan Ambassadors</div>
        <div className='h-[49%] flex items-center justify-evenly mt-[5rem]'>
                <div className='border border-white w-[24%] h-[95%] rounded-2xl flex flex-col items-center bg-white -rotate-12 ml-[2rem]'>
                    <Image src='/vidOne.jpg' alt='video one' height={0} width={310} className='rounded-2xl mt-[1rem] '></Image>

                  

                    <div className='flex h-[5.5%] w-[90%] mt-[1rem] items-center'>

                            <div className='flex items-center h-[90%]  w-[50%]'>
                                <Image src={`${profileImage[0]}`} alt='profile' height={0} width={45} className='rounded-full box-content'></Image>

                                <p className='text-[#fc0c68] ml-[1rem] uppercase font-extrabold tracking-tighter text-[20px]'>{containerName[0]}</p>
                            </div>

                            <div className='w-[30%] flex ml-[2rem] items-center'>
                                <p className='text-[#fc0c68] font-extrabold text-[20px]'>{containerView[0]}</p>
                                <div className='ml-[1rem]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="100px" fill="grey" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
                                </div>
                            </div>

                    </div>
                </div>  
               
                <div className='border border-white w-[24%] h-[97%] rounded-2xl flex flex-col items-center bg-white rotate-6 ml-[6rem] mt-[8rem]'>
                    <Image src='/vidTwo.jpg' alt='video one' height={0} width={300} className='rounded-2xl mt-[1rem] '></Image>


                    <div className='flex h-[5.5%] w-[90%] mt-[1rem] items-center'>

                            <div className='flex items-center h-[90%]  w-[50%]'>
                                <Image src={`${profileImage[1]}`} alt='profile' height={0} width={45} className='rounded-full box-content'></Image>

                                <p className='text-[#fc0c68] ml-[1rem] uppercase font-extrabold tracking-tighter text-[20px]'>{containerName[1]}</p>
                            </div>

                            <div className='w-[30%] flex ml-[3rem] items-center'>
                                <p className='text-[#fc0c68] font-extrabold text-[20px]'>{containerView[1]}</p>
                                <div className='ml-[1rem]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="100px" fill="grey" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
                                </div>
                            </div>

                    </div>
                </div>  
                <div className='border border-white w-[24%] h-[95%] rounded-2xl flex flex-col items-center bg-white -rotate-6 ml-[4rem]'>
                    <Image src='/vidThree.jpg' alt='video one' height={0} width={310} className='rounded-2xl mt-[1rem] '></Image>

                    <div className='flex h-[5.5%] w-[90%] mt-[1rem] items-center'>

                            <div className='flex items-center h-[90%]  w-[50%]'>
                                <Image src={`${profileImage[2]}`} alt='profile' height={0} width={45} className='rounded-full box-content'></Image>

                                <p className='text-[#fc0c68] ml-[1rem] uppercase font-extrabold tracking-tighter text-[20px]'>{containerName[2]}</p>
                            </div>

                            <div className='w-[30%] flex ml-[3.5rem] items-center'>
                                <p className='text-[#fc0c68] font-extrabold text-[20px]'>{containerView[2]}</p>
                                <div className='ml-[1rem]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="100px" fill="grey" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
                                </div>
                            </div>

                    </div>
                </div>    
        </div>
    </div>
  )
}

export default AmbMain