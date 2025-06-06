'use client'

import React, { useRef } from 'react';
import { useGlobalContext } from '@/context/themeContext';
import Image from 'next/image';
import { Oswald } from 'next/font/google';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] });

const MenuHome = () => {
  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);
    let background, textColor;

    const leafContainer = ['/leaf0.webp', '/leaf1.webp', '/leaf2.webp', '/leaf3.webp', '/leaf4.webp', '/leaf5.webp'];
    const listCan = ['STRAWBERRY', 'PEACH', 'DRAGONFRUIT', 'LIME', 'BLUEBERRY', 'LEMON'];
    const canContainer = ['/strawCan1.webp', '/peachCan5.webp', '/dragonCan5.webp', '/limeCan5.webp', '/blueberryCan1.webp', '/lemonCan1.webp'];
    const leftFruit = ['/strawR.webp', '/peachR.webp', '/dragonL.webp', '/limeL.webp', '/blueL.webp', '/lemonL.webp'];
    const rightFruit = ['/strawL.webp', '/peachL.webp', '/dragonR.webp', '/limeR.webp', '/blueR.webp', '/lemonR.webp'];

    const containers = canContainer.map(() => useRef(null));
    const leafRefs = leafContainer.map(() => useRef(null));
    const leftFruitRefs = leftFruit.map(() => useRef(null));
    const rightFruitRefs = rightFruit.map(() => useRef(null));

    const listColor = [
        'bg-gradient-to-t from-[#b7110b] to-[#f13e36]',
        'bg-gradient-to-t from-[#dfc129] to-[#ffa131]',
        'bg-gradient-to-t from-[#ff21ce] to-[#ff0ea6]',
        'bg-gradient-to-t from-[#76c015] to-[#69ac0b]',
        'bg-gradient-to-t from-[#3b89ff] to-[#2e4ad7]',
        'bg-gradient-to-t from-[#d6c200] to-[#d5c201]'
    ];

    // if (theme === 'peach') {
    //     background = 'bg-[#ffc98d]';
    //     textColor = 'text-white';
    // }

    const handleHover = (index: number) => { 
        gsap.to(containers[index].current, { rotate: -15, scale: 1.3 });
        gsap.to(leafRefs[index].current, { left: 45 });
        gsap.to(leftFruitRefs[index].current, { left: 300 });
        gsap.to(rightFruitRefs[index].current, { left: -10 });
    };

    const handleHoverOut = (index: number) => {
        gsap.to(containers[index].current, { rotate: 0, scale: 1 });
        gsap.to(leafRefs[index].current, { left: 120 });
        gsap.to(leftFruitRefs[index].current, { left: 120 });
        gsap.to(rightFruitRefs[index].current, { left: 120 });
    };

    const buttonColor = [
        'text-[#f13e36]',
        'text-[#ffa131]',
        'text-[#ff0ea6]',
        'text-[#69ac0b]',
        'text-[#2e4ad7]',
        'text-[#d5c201]'
    ];
  return (
    <div className='h-[120vh] w-[100vw]'>
        <div className={`bg-[#FF9FC6] ${oswald.className} h-[235vh] w-[100vw] ${textColor} flex flex-col items-center max-pad:-mt-[60rem] relative max-air:-mt-[42rem] max-mini:-mt-[30rem] max-mini:h-[250vh] max-pad:h-[190vh] max-air:h-[220vh] max-sm:h-[500vh]`}>

            <h1 className={`text-center pt-[8rem] text-[80px] text-white font-bold tracking-tighter z-50 max-pad:absolute max-sm:text-[50px] max-sm:-mt-[3rem]`}>EXPLORE FLAVORS</h1>

            <p className="text-center w-[30%] mx-auto text-white z-50 max-pad:absolute max-pad:top-[17rem] max-sm:w-[90%] max-sm:-mt-[7rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.</p>

            <button className='bg-white rounded-xl px-[1.5rem] py-[1rem] max-mini:hidden max-sm:block max-sm:absolute max-sm:top-[15rem] text-[#ff0ea6] font-bold text-[20px] max-pad:hidden max-air:hidden pad:hidden'>SHOP ALL</button>

            <div className="flex flex-wrap w-[90%] h-[90%] justify-between mt-[8rem] max-pad:mt-[26rem] max-pad:h-[65%] max-sm:items-center max-sm:justify-center max-sm:mt-[22rem]">
                {listCan.map((can, index) => (
                    <div key={index}>
                        <div className={`rounded-lg relative h-[41rem] flex flex-col items-center space-y-8 w-[26rem] ${listColor[index]} max-air:w-[23rem]
                        max-air:h-[40rem] max-air:mb-[1.5rem] max-mini:h-[40rem] max-mini:w-[20rem]`}>
                            <p className="text-white font-bold text-[30px] tracking-tighter text-center pt-[2rem]">{can}</p>
                            <Image
                                src={canContainer[index]}
                                alt="can"
                                height={0}
                                width={220}
                                ref={containers[index]}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHoverOut(index)}
                                className="z-10"
                                    onClick={() => router.push(`/Feature/?search=${can.toLowerCase()}`)}
                            />
                            <Image
                                src={leafContainer[index]}
                                alt="leaf"
                                height={0}
                                width={120}
                                className="absolute top-[23rem] left-[8rem]"
                                ref={leafRefs[index]}
                            />
                            <Image
                                src={leftFruit[index]}
                                alt="left fruit"
                                height={0}
                                width={120}
                                className="absolute top-[10rem] left-[8rem]"
                                ref={leftFruitRefs[index]}
                            />
                            <Image
                                src={rightFruit[index]}
                                alt="right fruit"
                                height={0}
                                width={120}
                                className="absolute top-[10rem] right-[8rem]"
                                ref={rightFruitRefs[index]}
                            />
                            <div className="flex justify-between w-[85%] h-[4rem]">
                                <button className="text-white font-bold text-[20px] bg-black bg-opacity-30 py-[0.9rem] px-[2.4rem] rounded-xl max-air:h-[4.2rem] max-air:mr-[1rem]">
                                    BUY NOW
                                </button>
                                <button className={`bg-white py-[0.9rem] px-[1.5rem] rounded-xl text-[20px] font-bold max-air:h-[4.2rem] flex items-center justify-center ${buttonColor[index]}`}>
                                    BUY IN STORES
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MenuHome