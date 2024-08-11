'use client'
import React, { useEffect, useRef } from 'react'
import { Oswald } from 'next/font/google'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const oswald = Oswald({subsets: ['latin'], weight: ['400', '200', '300', '500']})

const TipsHome = () => {
    gsap.registerPlugin(ScrollTrigger)
    const rotateRef = useRef(null)
    useEffect(() => {
        gsap.to(rotateRef.current, {rotate: 5, duration: 5, scrollTrigger: {
            trigger: rotateRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
        }})
     }, [])
    const container = ['quality', 'clean', '4g fiber', 'no toxins']
  return (
    <div className={`h-[120vh] w-[100vw] bg-[#4eceff] ${oswald.className} relative`}>
        <div className=' w-[95%] mx-auto h-[90%] max-pad:h-[10vh]'>
            <Image src = '/canGive.webp' alt='can giving' height={0} width={720} className=' -rotate-[34deg] w-[50%] max-pad:w-[45%] max-pad:pt-[5rem] max-air:w-[45%] max-mini:pt-[7rem]' ref={rotateRef}></Image>
            <h2 className='absolute right-[4rem] top-[1rem] text-white text-[68px] uppercase font-semibold tracking-tighter max-pad:text-[50px] max-air:text-[45px]'>All natural, <span className='text-[#fff500]'>always.</span></h2>
            <div className='flex flex-wrap justify-between w-[40%] absolute top-[6.2rem] right-[3rem]'>
                {container.map((item, index) => { 
                        return <div key={index} className=' w-[18rem] h-[10rem] mt-[5rem] max-pad:mt-[2rem] max-pad:w-[12rem] max-air:w-[10rem] max-pad:h-[10rem] max-air:h-[11rem] max-mini:h-[10rem] max-mini:w-[8rem]'>

                        <h2 className='bg-[#fff500] text-[#4eceff] rounded-md font-bold text-[24px] -rotate-12 w-[50%] max-air:w-[90%] max-pad:w-[70%] text-center uppercase p-[0.9rem] max-mini:w-[100%] max-mini:text-[22px]'>{item}</h2>
                        <p className='text-white mt-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  <span className='max-air:hidden'>maiores laudantium labo</span><span className='max-pad:hidden max-air:hidden'>  ex in quis libero maiores laudantium labore nostrum excepturi.</span></p>

                    </div>
                })}
            </div>  
        </div>
        <svg
            className='-mt-[32rem] max-pad:-mt-[22rem] max-air:-mt-[10rem] max-mini:-mt-[5rem]'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 375 86"
            width="375"
            height="86"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: '140%', height: '100%' }}
                        >
            <defs>
            <clipPath id="__lottie_element_4">
                <rect width="375" height="86" x="0" y="0" />
            </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_4)">
            <g transform="matrix(1,0,0,1,-90.23973846435547,70.5260009765625)" opacity="1" style={{ display: 'block' }}>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                    fill="#FF9FC6"
                    fillOpacity="1"
                    d="M-360,-20.416000366210938 C-390,-25.82699966430664 -420,-25.82699966430664 -450,-20.416000366210938 C-450,-20.416000366210938 -450,24.474000930786133 -450,24.474000930786133 C-450,24.474000930786133 450,24.474000930786133 450,24.474000930786133 C450,24.474000930786133 450,-20.416000366210938 450,-20.416000366210938 C420,-15.005000114440918 390,-15.005000114440918 360,-20.416000366210938 C330,-25.82699966430664 300,-25.82699966430664 270,-20.416000366210938 C240,-15.005000114440918 210,-15.005000114440918 180,-20.416000366210938 C150,-25.82699966430664 120,-25.82699966430664 90,-20.416000366210938 C60,-15.005000114440918 30,-15.005000114440918 0,-20.416000366210938 C-30,-25.82699966430664 -60,-25.82699966430664 -90,-20.416000366210938 C-120,-15.005000114440918 -150,-15.005000114440918 -180,-20.416000366210938 C-210,-25.82699966430664 -240,-25.82699966430664 -270,-20.416000366210938 C-300,-15.005000114440918 -330,-15.005000114440918 -360,-20.416000366210938z"
                />
                </g>
            </g>
            </g>
        </svg>
    </div>
  )
}

export default TipsHome