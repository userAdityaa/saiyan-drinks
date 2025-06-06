'use client'

import React from 'react'
import { useGlobalContext } from '@/context/themeContext'
import Image from 'next/image'
import { Oswald } from 'next/font/google'

const oswald = Oswald({subsets: ['latin'], weight: ['400', '200', '300', '500']})

const Serving = () => {

    const {theme, setTheme} = useGlobalContext();

    let background, textSvg, boardColor, textColor, borderColor, svgColor, content;

    if(theme === 'peach') { 
        background ='bg-[#ffc98d]';
        textSvg= '/peachTag.svg';
        boardColor ='bg-[#ff8c00]';
        textColor = 'text-[#ff8c00]';
        borderColor = 'border-[3px] border-[#ff8c00]';
        svgColor = 'fill-[#ff8c00]';
        content = '/peachContent.png'
    }
    else if(theme === 'lime') { 
        background = 'bg-[#cdfe8c]';
        textSvg = '/limeTag.svg';
        boardColor = 'bg-[#69ac0b]';
        textColor = 'text-[#69ac0b]';
        borderColor = 'border-[3px] border-[#69ac0b]';
        svgColor = 'fill-[#69ac0b]';
        content = '/limeContent.png';
    } else if(theme === 'dragonfruit') {
        background = 'bg-[#ffb5ef]';
        textSvg = '/dragonTag.svg';
        boardColor = 'bg-[#ff21ce]';
        textColor = 'text-[#ff21ce]';
        borderColor = 'border-[3px] border-[#ff21ce]';
        svgColor = 'fill-[#ff21ce]';
        content = '/dragonContent.png';
    }

  return (
    <div className={`h-[100vh] w-[100vw] ${background} flex ${oswald.className}`}>
        <div className='flex w-[92%] mx-auto h-[100%]'>
            <div className='w-[50%]'>


                <Image src={`${textSvg}`} alt='text svg' height={300} width={550} className='mt-[8rem] ml-[3rem]'></Image>


                <div className='absolute top-[72rem] left-[8rem] flex flex-col'>
                    <div className={`${textColor} ${borderColor} rounded-full h-[8rem] w-[8rem] flex items-center justify-center absolute text-[34px] font-bold`}>
                            5g
                    </div>
                    <div className={`${textColor} mt-[8.2rem] ml-[0.9rem] text-[22px] text-semibold`}>MORE FIBER</div>
                </div>

                <div className='absolute top-[67rem] left-[20rem] flex flex-col'>
                    <div className={`${textColor} ${borderColor} rounded-full h-[8rem] w-[8rem] flex items-center justify-center absolute text-[34px] font-bold`}>
                            <svg id="Layer_1" height= '80px' width = '200px' fill="Currentcolor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><g><path d="m429.34 197.48a39.13 39.13 0 0 0 39.09-39.09v-85.33a39.1 39.1 0 1 0 -78.19 0v85.33a39.14 39.14 0 0 0 39.1 39.09zm-26.6-124.42a26.6 26.6 0 1 1 53.19 0v85.33a26.6 26.6 0 0 1 -53.19 0z"/><path d="m427.19 118.31c9.65 0 9.67-15 0-15s-9.67 15 0 15z"/><path d="m233.14 147.88c4.58 1.83 44.66 19.1 41.77 61.66a37.54 37.54 0 0 0 34.92 40q1.29.09 2.58.09a37.65 37.65 0 0 0 37.44-35c5.39-79.26-56.33-124.18-89.71-136.86a37.61 37.61 0 0 0 -47.77 50.44 37 37 0 0 0 20.77 19.67zm-9.88-43.88a25.19 25.19 0 0 1 32.44-14.53c30.39 11.54 86.57 52.37 81.68 124.32a25.16 25.16 0 0 1 -26.71 23.3 25.05 25.05 0 0 1 -23.29-26.7c3.49-51.39-44.16-71.94-49.71-74.16a24.7 24.7 0 0 1 -13.89-13.11 25 25 0 0 1 -.52-19.12z"/><path d="m261.44 130c9.65 0 9.67-15 0-15s-9.67 15 0 15z"/><path d="m58.26 241.69a37.32 37.32 0 0 0 15-3.12c90.58-39.39 92.36-131.18 80.65-174.22a37.56 37.56 0 0 0 -72.52 19.71c.69 2.53 16.14 62-38.12 85.62a37.56 37.56 0 0 0 15 72zm-10-60.54c64.06-27.86 46-97.42 45.2-100.36a25.06 25.06 0 1 1 48.36-13.16c10.73 39.43 9.16 123.5-73.58 159.47a24.73 24.73 0 0 1 -10 2.09 25.06 25.06 0 0 1 -10-48z"/><path d="m118.4 97.44c9.66 0 9.67-15 0-15s-9.66 15 0 15z"/><path d="m223.33 314.2c-10.38-17.91.47-50.49 7.34-63.43a37.56 37.56 0 0 0 -66.09-35.71c-4.23 7.81-40.37 77.92-6.23 136.81a37.55 37.55 0 1 0 65-37.67zm-10.81 6.27a25.06 25.06 0 1 1 -43.36 25.13c-30.72-53 2.52-117.4 6.41-124.58a25.06 25.06 0 0 1 44.08 23.86c-6.78 12.76-21.26 51.22-7.13 75.59z"/><path d="m182.25 278.27c-9.65 0-9.67 15 0 15s9.67-15 0-15z"/><path d="m461.4 246.44a37.74 37.74 0 0 0 -35.8-11.27 37.57 37.57 0 0 0 -19.52 62.08c14 15.25 10.44 49.4 6.52 63.52a37.56 37.56 0 0 0 72.24 20.6c2.44-8.53 22.59-84.8-23.44-134.93zm11.41 131.48a25.06 25.06 0 0 1 -48.18-13.78c3.86-13.92 9.7-54.6-9.36-75.35a25.06 25.06 0 1 1 36.92-33.89c41.42 45.1 22.88 115.18 20.62 123.02z"/><path d="m452.32 323.65c9.65 0 9.67-15 0-15s-9.66 15 0 15z"/><path d="m131.89 406.61c-22.18-18.33-31.86-68.78-33.08-90.33a37.56 37.56 0 0 0 -75 4c.53 10.1 6.7 100 60.24 144.25a37.56 37.56 0 1 0 47.85-57.91zm-4.61 44.91a25 25 0 0 1 -35.28 3.36c-49.42-40.83-55.21-125.72-55.71-135.27a25.09 25.09 0 0 1 23.71-26.33h1.35a25.07 25.07 0 0 1 25 23.72c1.12 19.9 10.06 76.53 37.6 99.27a25.06 25.06 0 0 1 3.35 35.28z"/><path d="m95.08 415.78c-9.66 0-9.67 15 0 15s9.66-15 0-15z"/><path d="m346.47 322.09c-35.47 3.78-106.57 31.91-121.91 111.25a37.61 37.61 0 0 0 36.91 44.66 37.6 37.6 0 0 0 36.83-30.44c8.43-43.62 51.57-50.25 56.39-50.85a37.56 37.56 0 0 0 -8.23-74.66zm6.75 62.25c-5.81.73-57.07 8.61-67.18 60.88a25.06 25.06 0 0 1 -49.21-9.51c13.95-72.18 78.69-97.75 111-101.19a24 24 0 0 1 2.67-.14 25.06 25.06 0 0 1 2.75 50z"/><path d="m268.81 407.19c-9.66 0-9.67 15 0 15s9.66-15 0-15z"/></g></svg>
                           
                    </div>
                    <div className={`${textColor} mt-[8.2rem] ml-[1.3rem] text-[22px] text-semibold`}>PREBIOTIC</div>
                </div>

                <div className='absolute top-[72rem] left-[35rem] flex flex-col'>
                    <div className={`${textColor} ${borderColor} rounded-full h-[8rem] w-[8rem] flex items-center justify-center absolute text-[34px] font-bold`}>
                            0g
                    </div>
                    <div className={`${textColor} mt-[8.2rem] ml-[1.2rem] text-[22px] text-semibold`}>0 CALORIES</div>
                </div>

                <div className='absolute top-[84rem] left-[15rem] flex flex-col'>
                    <div className={`${textColor} ${borderColor} rounded-full h-[8rem] w-[8rem] flex items-center justify-center absolute text-[34px] font-bold`}>
                    <svg id="Layer_1" height="80px" width="200px" fill="Currentcolor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m279.8 427.6c-5.9 0-11.8-.2-17.7-.6l-30.3-2 7.2-11.6c22.1-35.7 54.3-79.2 76.4-108.2-31.9 20.7-64 49.4-90.3 81.2l-13.1 15.9-1.8-27.2c-4.4-200.8 97.9-211.4 188.2-220.8 36.2-3.8 70.4-7.3 95.8-22.6l11.5-6.9 3.6 54.9c4.5 67.8-16.9 130.6-60.2 176.9-42.7 45.8-102.9 71-169.3 71zm-19.4-17.1 2.8.2c5.5.4 11.1.6 16.6.6 61.8 0 117.7-23.4 157.4-65.8 40.2-42.9 60-101.4 55.8-164.6l-1.9-29c-26.4 12.1-57.9 15.3-91 18.8-85 8.8-172.7 17.9-173.6 189.3 35.1-38.3 77.6-70.8 116.7-88.8l31.4-14.5-21.6 26.9c-.6.8-56 70.4-92.6 126.9z"/></g></g><g><g><path d="m86.1 242.6h158.9v16.4h-158.9z" transform="matrix(.707 .707 -.707 .707 225.857 -43.61)"/></g></g><g><g><path d="m189.5 218.7h16.4v64.2h-16.4z"/></g></g><g><g><path d="m109.4 226.6h40.1v16.4h-40.1z"/></g></g><g><g><path d="m202.9 350.2c-58 0-110.5-22-147.9-62-37.8-40.4-56.4-95.2-52.5-154.3l3.3-49.5 11.5 6.9c21.9 13.1 51.4 16.2 82.7 19.5 63.8 6.6 136 14.2 157.9 113.1l.8 3.5-2 2.9c-17.9 26.3-27.6 62.8-29.8 111.5l-.3 7.3-8.2.6c-5.2.3-10.4.5-15.5.5zm-182.4-238.8-1.6 23.6c-3.6 54.5 13.5 105 48.2 142 34.3 36.6 82.5 56.8 135.9 56.8 2.7 0 5.3 0 8-.2 2.8-46.5 12.7-82.4 30.2-109.6-20.1-84.2-79.7-90.4-142.8-97-28.3-2.8-55.2-5.6-77.9-15.6z"/></g></g></g></svg>
                    </div>
                    <div className={`${textColor} mt-[8.2rem] ml-[1.5rem] text-[22px] text-semibold`}>ORGANIC</div>
                </div>

                <div className='absolute top-[84rem] left-[30rem] flex flex-col'>
                    <div className={`${textColor} ${borderColor} rounded-full h-[8rem] w-[8rem] flex items-center justify-center absolute text-[34px] font-bold`}>
                            <svg id="Capa_1" enableBackground="new 0 0 512.021 512.021" viewBox="0 0 512.021 512.021" height="80px" width="180px" fill="Currentcolor" xmlns="http://www.w3.org/2000/svg"><g><path d="m496.575 344.027c4.143 0 7.5-3.358 7.5-7.5v-40.315c0-11.696-5.404-25.082-17.646-31.061l-90.858-44.373c-5.465-2.668-11.735-2.668-17.2 0l-90.858 44.373c-7.689 3.755-12.521 10.018-15.362 17.973l-44.183-44.183 6.663 3.254c13.458 6.571 29.262 6.594 42.762 0l84.727-41.377c6.681-3.263 10.997-10.176 10.997-17.611v-105.772c0-12.804-6.134-25.438-17.646-31.061l-39.13-19.11c-3.723-1.819-8.212-.273-10.03 3.448-1.817 3.722-.274 8.213 3.448 10.031l38.768 18.934-92.514 45.181-92.514-45.181 90.495-44.196c1.283-.626 2.754-.626 4.037 0l20.277 9.903c3.723 1.818 8.214.274 10.03-3.448 1.817-3.722.274-8.212-3.448-10.03l-20.277-9.903c-5.465-2.669-11.736-2.669-17.201 0l-90.858 44.373c-11.423 5.58-17.646 18.138-17.646 31.06v72.445l-59.192-59.191c-8.605-8.606-22.537-8.608-31.144 0-8.586 8.586-8.586 22.556 0 31.142l112.185 112.185-27.107-13.238c-5.465-2.668-11.735-2.668-17.2 0l-90.856 44.373c-11.618 5.673-17.647 18.407-17.647 31.061v105.772c0 7.436 4.317 14.348 10.999 17.611l84.725 41.377c13.458 6.571 29.262 6.594 42.762 0l84.727-41.378c6.681-3.263 10.997-10.176 10.997-17.611v-86.57l27.711 27.711v58.859c0 7.436 4.317 14.348 10.999 17.611l84.725 41.377c7.988 3.9 17.276 5.697 26.748 4.623l39.969 39.969c8.605 8.609 22.536 8.608 31.143.001 8.585-8.586 8.585-22.556 0-31.142l-27.116-27.117 56.745-27.713c6.681-3.263 10.997-10.176 10.997-17.611v-30.457c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v30.457c0 1.745-1.013 3.367-2.58 4.133l-61.378 29.975c-14.149-14.149-6.547-6.547-30.646-30.646v-68.781l93.977-45.895c.415 1.778.628 3.604.628 5.442v40.315c-.004 4.144 3.353 7.502 7.496 7.502zm-233.064-226.14 93.977-45.895c.415 1.778.628 3.604.628 5.442v105.772c0 1.745-1.013 3.367-2.58 4.133l-84.726 41.377c-2.319 1.133-4.776 1.995-7.299 2.571zm21.983 172.883c10.696 5.224 83.616 40.835 93.977 45.895v53.781l-94.602-94.602c.026-1.714.237-3.415.625-5.074zm-131.588-213.335c0-1.838.213-3.664.629-5.443 9.473 4.626 84.82 41.424 93.976 45.896v113.4c-2.522-.576-4.979-1.438-7.299-2.571l-45.873-22.403-41.433-41.433zm-36.355 372.63c-2.522-.576-4.979-1.438-7.299-2.571l-84.725-41.377c-1.567-.766-2.581-2.388-2.581-4.133v-105.772c0-1.837.213-3.664.629-5.442l93.976 45.895zm-85.014-171.612 90.494-44.196c1.283-.627 2.755-.626 4.038 0l66.315 32.387c8.132 8.132 4.745 4.745 15.868 15.869l-84.202 41.122c-9.885-4.829-82.466-40.275-92.513-45.182zm194.618 123.531c0 1.745-1.013 3.367-2.58 4.133l-84.726 41.377c-2.319 1.133-4.776 1.995-7.299 2.571v-113.4c10.562-5.158 77.351-37.776 87.918-42.936l6.687 6.686zm145.017 45.51-84.725-41.377c-1.567-.766-2.581-2.388-2.581-4.133v-43.859c2.892 2.892 86.358 86.359 90.854 90.854-1.21-.427-2.396-.923-3.548-1.485zm80.67 37.537c2.737 2.737 2.737 7.191 0 9.929-2.744 2.743-7.183 2.745-9.928 0-36.133-36.134-347.739-347.74-383.735-383.735-2.738-2.737-2.738-7.191 0-9.929 2.745-2.745 7.185-2.744 9.929 0 12.082 12.082 374.237 374.238 383.734 383.735zm-65.871-161.397-92.515-45.181 90.495-44.196c1.283-.627 2.755-.626 4.038 0l90.496 44.196c-13.591 6.638-79.063 38.612-92.514 45.181z"/></g></svg>
                    </div>
                    <div className={`${textColor} mt-[8.2rem] ml-[0.9rem] text-[22px] text-semibold`}>MORE FIBER</div>
                </div>


            </div>

            <div className='w-[50%] flex items-center justify-center ml-[4rem]'>
                <Image src={`${content}`} alt='content' height={400} width={650}></Image>
            </div>
        </div>
    </div>
  )
}

export default Serving