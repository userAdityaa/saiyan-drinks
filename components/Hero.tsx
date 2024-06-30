import { NavbarProps } from '@/types/NavbarTypes'
import React from 'react'

const Hero = ({theme}: NavbarProps) => {
    let leftTheme; 
    let rightTheme;
    if(theme === 'orange') {
        leftTheme = 'bg-[#ff8c00]';
        rightTheme = 'bg-[#ffc98d]';
    }
  return (
    <div className='h-[100vh] w-[100vw] flex justify-center'>
        <div className={`w-[50%] h-[100%] ${leftTheme}`}>
            <div className='flex flex-col items-center'>

            </div>
        </div>

        <div className={`w-[50%] h-[100%] ${rightTheme}`}>

        </div>
    </div>
  )
}

export default Hero