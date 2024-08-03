'use client'
import React, { useEffect, useState } from 'react'
import { Oswald } from 'next/font/google'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const oswald = Oswald({subsets: ['latin'], weight: ['400', '200', '300', '500']})

const Cart = () => {
    const router = useRouter();
    let peach: any = null;
    let lime: any = null;
    let dragonfruit: any = null;
    
    if(localStorage.getItem('Peach') !== null) {
        peach = JSON.parse(localStorage.getItem('Peach')!);
    if(localStorage.getItem('Lime') !== null) {
        lime = JSON.parse(localStorage.getItem('Lime')!);
    }
    if(localStorage.getItem('Dragonfruit') !== null) {
        dragonfruit = JSON.parse(localStorage.getItem('Dragonfruit')!);
    }}
    
    const handlePayClick = () => { 
        axios.post('http://localhost:8000/user/signup').then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            router.push('/Login')
        });
    }

    const [total, setTotal] = useState(peach.price + lime.price + dragonfruit.price);
    return (
        <div className={`bg-[#4eceff] h-[180vh] w-[100vw] ${oswald.className} relative `}>
            <h1 className='text-center text-white font-extrabold text-[85px] pt-[8rem] uppercase'>Vending Machine</h1>

            <div className='flex h-[90%] w-[90%] justify-between mx-auto'>
                {peach && <div className='bg-white h-[40.5%] w-[25%] flex flex-col items-center rounded-2xl mt-[3rem]'>
                    <div className='bg-[#ff8c00] w-[95%] flex items-center justify-center rounded-lg mt-[0.6rem]'>
                    <Image src = {`${peach.image}`} alt='peach can' height={0} width={200} ></Image>
                    </div>

                    <div className='bg-[#ff8c00] w-[95%] mt-[0.5rem] flex h-[4rem] items-center rounded-lg text-white space-x-5 uppercase'>
                        <p className='text-[30px] font-extrabold ml-[1rem]'>{peach.drink}</p>
                        <p className='mr-[1rem] text-[30px] font-extrabold mt-[0.2rem]'>300 ml</p>
                    </div>

                    <div className='bg-[#ff8c00] w-[95%] mt-[0.5rem] flex h-[10rem]  rounded-lg text-white space-x-5 uppercase flex-col text-[30px] font-extrabold'>
                        <div className='flex justify-between w-[90%] mt-[2rem] ml-[1rem]'>
                            <p>Quantity: </p>
                            <input type="number" className='w-[30%] text-black pl-[2rem]' value={peach.quantity}/>
                        </div>
                        <div className='flex justify-between w-[90%] mt-[1rem] ml-[1rem]'>
                            <p>Price: </p>
                            <input type="text" className='w-[30%] mr-[0.2rem] text-black pl-[1rem]' value={peach.price}/>
                        </div>
                    </div>

                    <button className='text-white text-[30px] font-extrabold bg-[#ff8c00] rounded-lg w-[95%] p-[0.8rem] mt-[1rem] uppercase'>Remove</button>
                </div>}

                {lime && <div className='bg-white ml-[3rem] h-[40.5%] w-[25%] flex flex-col items-center rounded-2xl mt-[3rem]'>
                    <div className='bg-[#69ac0b] w-[95%] flex items-center justify-center rounded-lg mt-[0.6rem]'>
                    <Image src = {`${lime.image}`} alt='peach can' height={0} width={200} ></Image>
                    </div>

                    <div className='bg-[#69ac0b] w-[95%] mt-[0.5rem] flex h-[4rem] items-center rounded-lg text-white space-x-5 uppercase'>
                        <p className='text-[30px] font-extrabold ml-[1rem]'>{lime.drink}</p>
                        <p className='mr-[1rem] text-[30px] font-extrabold mt-[0.2rem]'>300 ml</p>
                    </div>

                    <div className='bg-[#69ac0b] w-[95%] mt-[0.5rem] flex h-[10rem]  rounded-lg text-white space-x-5 uppercase flex-col text-[30px] font-extrabold'>
                        <div className='flex justify-between w-[90%] mt-[2rem] ml-[1rem]'>
                            <p>Quantity: </p>
                            <input type="number" className='w-[30%] text-black pl-[2rem]' value={lime.quantity}/>
                        </div>
                        <div className='flex justify-between w-[90%] mt-[1rem] ml-[1rem]'>
                            <p>Price: </p>
                            <input type="text" className='w-[30%] mr-[0.2rem] text-black pl-[1rem]' value={lime.price}/>
                        </div>
                    </div>

                    <button className='text-white text-[30px] font-extrabold bg-[#69ac0b] rounded-lg w-[95%] p-[0.8rem] mt-[1rem] uppercase'>Remove</button>
                </div>}

                {dragonfruit && <div className='bg-white ml-[3rem] h-[40.5%] w-[25%] flex flex-col items-center rounded-2xl mt-[3rem]'>
                    <div className='bg-[#ff21ce] w-[95%] flex items-center justify-center rounded-lg mt-[0.6rem]'>
                    <Image src = {`${dragonfruit.image}`} alt='peach can' height={0} width={200} ></Image>
                    </div>

                    <div className='bg-[#ff21ce] w-[95%] mt-[0.5rem] flex h-[4rem] items-center rounded-lg text-white space-x-5 uppercase'>
                        <p className='text-[30px] font-extrabold ml-[1rem]'>{dragonfruit.drink}</p>
                        <p className='mr-[1rem] text-[30px] font-extrabold mt-[0.2rem]'>300 ml</p>
                    </div>

                    <div className='bg-[#ff21ce] w-[95%] mt-[0.5rem] flex h-[10rem]  rounded-lg text-white space-x-5 uppercase flex-col text-[30px] font-extrabold'>
                        <div className='flex justify-between w-[90%] mt-[2rem] ml-[1rem]'>
                            <p>Quantity: </p>
                            <input type="number" className='w-[30%] text-black pl-[2rem]' value={dragonfruit.quantity}/>
                        </div>
                        <div className='flex justify-between w-[90%] mt-[1rem] ml-[1rem]'>
                            <p>Price: </p>
                            <input type="text" className='w-[30%] mr-[0.2rem] text-black pl-[1rem]' value={dragonfruit.price}/>
                        </div>
                    </div>

                    <button className='text-white text-[30px] font-extrabold bg-[#ff21ce] rounded-lg w-[95%] p-[0.8rem] mt-[1rem] uppercase'>Remove</button>
                </div>}

            </div>

             
            <div className="rounded-xl absolute bg-white top-[60rem] left-[35rem] w-[20rem] h-[5rem] flex items-center justify-center">
                    <p className='text-black text-[34px] uppercase font-extrabold'>Total: {total}</p>
            </div>    
            <button className='bg-zinc-400 absolute top-[66rem] left-[35rem] p-[1rem] text-[34px] uppercase font-extrabold text-white rounded-xl w-[20rem]' onClick={handlePayClick}>
                Pay Now
            </button>  
        </div>
    )
}

export default Cart