import React from 'react'
import Image from 'next/image'
import { Roboto_Condensed } from 'next/font/google'


const roboto = Roboto_Condensed({subsets: ['latin'], weight: ['400', '600']})

const Navbar = () => {
  return (
    <nav className={`fixed border rounded-full border-black w-[80vw] h-[9vh] top-5 left-[10vw] flex items-center justify-center ${roboto.className} text-[22px] font-semibold`}>

       
        <div className='flex items-center'>
            <div className='flex items-center justify-center mr-4'>
                <p>PRODUCTS</p>
                <Image src='/arrow-down.svg' alt='arrow down' width={35} height={35}></Image>
            </div>
            <p className='mr-4'>SHOP ALL</p>
            <p>ALL PAGES</p>
        </div>  


    </nav>
  )
}

export default Navbar