import React from 'react'
import Image from 'next/image'
import { Oswald } from 'next/font/google'

const oswald = Oswald({subsets: ['latin'], weight: ['400', '200', '300', '500']})

const HeroContact = () => {
  return (
    <div className={`bg-[#68d9ff] h-[320vh] w-[100vw] ${oswald.className} flex flex-col items-center tracking-tighter`}>
        <h1 className='uppercase mt-[10rem] text-[100px] text-white font-extrabold'>Contact us</h1>
        <p className='text-white w-[30%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.</p>
        <Image src = '/contactImage.webp' alt='contact image' height={0} width={1500}></Image>
        <Image src = '/contactSvg.svg' alt='contact svg' height={0} width={1500} className='-mt-[18rem]'></Image>
        <div className='bg-[#f6f1f6] h-[65rem] w-[100vw]'>
            <h1 className='uppercase text-[#68d9ff] text-[80px] font-extrabold tracking-tighter ml-[4rem] mt-[1rem]'>Get in touch</h1>

            <form action="">
                <div className='flex space-x-5 ml-[4.5rem] mt-[3rem]'>
                    <div className='flex flex-col tracking-wider text-gray-400'>
                        <p className='mb-[0.5rem]'>First Name</p>
                        <label htmlFor="username"></label>
                        <input type="text" name='username' placeholder = 'First name' className='w-[40rem] h-[4rem] border border-black p-[1.4rem] bg-transparent rounded-md'/>
                    </div>
                    <div className='flex flex-col tracking-wider text-gray-400'>
                        <p className='mb-[0.5rem]'>Last Name</p>
                        <label htmlFor="username"></label>
                        <input type="text" name='username' placeholder = 'Last name' className='w-[40rem] h-[4rem] border border-black p-[1.4rem] bg-transparent rounded-md'/>
                    </div>
                </div>
                <div className='flex flex-col tracking-wider text-gray-400 ml-[4.5rem] mt-[2.5rem]'>
                        <p className='mb-[0.5rem]'>Email</p>
                        <label htmlFor="username"></label>
                        <input type="text" name='username' placeholder = 'Email' className='w-[81.5rem] h-[4rem] border border-black p-[1.4rem] bg-transparent rounded-md'/>
                </div>

                <div className='flex flex-col tracking-wider text-gray-400 ml-[4.5rem] mt-[2.5rem]'>
                        <p className='mb-[0.5rem]'>Message</p>
                        <label htmlFor="username"></label>
                        <textarea name="" id="" placeholder='Enter your message' className='w-[81.5rem] h-[4rem] border border-black p-[1.4rem] bg-transparent rounded-md'></textarea>
                </div>

                <button type='submit' className='uppercase text-[30px] text-center bg-[#68d9ff] rounded-lg text-white py-[1rem] px-[38.2rem] ml-[4.5rem] mt-[3rem] font-extrabold'>submit</button>
            </form>
        </div>

        <Image src = '/blueContact.svg' alt='blue contact' height={0} width={1500} className='-mt-[16rem]'></Image>
        <Image src = '/footer.webp' alt='footer image' height={0} width={1300}></Image>
    </div>
  )
}

export default HeroContact