'use client'
import React, { useEffect, useState } from 'react';
import { Oswald } from 'next/font/google';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] });

const Cart = () => {
    const router = useRouter();
    const [peach, setPeach] = useState<any>(null);
    const [lime, setLime] = useState<any>(null);
    const [dragonfruit, setDragonfruit] = useState<any>(null);

    useEffect(() => {
        const peachItem = localStorage.getItem('Peach');
        const limeItem = localStorage.getItem('Lime');
        const dragonfruitItem = localStorage.getItem('Dragonfruit');

        if (peachItem) setPeach(JSON.parse(peachItem));
        if (limeItem) setLime(JSON.parse(limeItem));
        if (dragonfruitItem) setDragonfruit(JSON.parse(dragonfruitItem));
    }, []);

    let drinks = [peach, lime, dragonfruit];

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            const headers = token ? {
                'Authorization': `${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };

            const response = await axios.post('http://localhost:8000/user/logout', {}, { headers });

            if (response.data.success) {
                console.log('Logged out successfully');
                localStorage.removeItem('token');
            } else {
                console.log('Logged out failed');
                console.error(response.data.message);
                router.push('/Login');
            }
        } catch (error) {
            router.push('/Login');
            console.error('Request failed:', error);
        }
    };

    const handlePayClick = async () => {
        try {
            const token = localStorage.getItem('token');
            const headers = token ? {
                'Authorization': `${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };
            const response = await axios.post('http://localhost:8000/user/validate', {}, { headers });
            if (response.status === 200) {
                const { userEmail } = response.data;
                axios.post('http://localhost:8000/user/orderDrinks', { drinks: drinks, userEmail: userEmail }, { headers });
                router.push('/Success');
            } else {
                router.push('/Login');
            }
        } catch (error) {
            console.error('Request failed:', error);
            router.push('/Login');
        }
    };

    const [total, setTotal] = useState(() => (peach?.price || 0) + (lime?.price || 0) + (dragonfruit?.price || 0));

    return (
        <div className={`bg-[#4eceff] h-[180vh] w-[100vw] ${oswald.className} relative `}>
            <h1 className='text-center text-white font-extrabold text-[85px] pt-[8rem] uppercase'>Vending Machine</h1>

            <div className='flex h-[90%] w-[90%] justify-between mx-auto'>
                {peach && <div className='bg-white h-[40.5%] w-[25%] flex flex-col items-center rounded-2xl mt-[3rem]'>
                    <div className='bg-[#ff8c00] w-[95%] flex items-center justify-center rounded-lg mt-[0.6rem]'>
                        <Image src={peach.image} alt='peach can' height={0} width={200} />
                    </div>

                    <div className='bg-[#ff8c00] w-[95%] mt-[0.5rem] flex h-[4rem] items-center rounded-lg text-white space-x-5 uppercase'>
                        <p className='text-[30px] font-extrabold ml-[1rem]'>{peach.drink}</p>
                        <p className='mr-[1rem] text-[30px] font-extrabold mt-[0.2rem]'>300 ml</p>
                    </div>

                    <div className='bg-[#ff8c00] w-[95%] mt-[0.5rem] flex h-[10rem] rounded-lg text-white space-x-5 uppercase flex-col text-[30px] font-extrabold'>
                        <div className='flex justify-between w-[90%] mt-[2rem] ml-[1rem]'>
                            <p>Quantity: </p>
                            <input type="number" className='w-[30%] text-black pl-[2rem]' value={peach.quantity} />
                        </div>
                        <div className='flex justify-between w-[90%] mt-[1rem] ml-[1rem]'>
                            <p>Price: </p>
                            <input type="text" className='w-[30%] mr-[0.2rem] text-black pl-[1rem]' value={peach.price} />
                        </div>
                    </div>

                    <button className='text-white text-[30px] font-extrabold bg-[#ff8c00] rounded-lg w-[95%] p-[0.8rem] mt-[1rem] uppercase'>Remove</button>
                </div>}

                {lime && <div className='bg-white ml-[3rem] h-[40.5%] w-[25%] flex flex-col items-center rounded-2xl mt-[3rem]'>
                    <div className='bg-[#69ac0b] w-[95%] flex items-center justify-center rounded-lg mt-[0.6rem]'>
                        <Image src={lime.image} alt='lime can' height={0} width={200} />
                    </div>

                    <div className='bg-[#69ac0b] w-[95%] mt-[0.5rem] flex h-[4rem] items-center rounded-lg text-white space-x-5 uppercase'>
                        <p className='text-[30px] font-extrabold ml-[1rem]'>{lime.drink}</p>
                        <p className='mr-[1rem] text-[30px] font-extrabold mt-[0.2rem]'>300 ml</p>
                    </div>

                    <div className='bg-[#69ac0b] w-[95%] mt-[0.5rem] flex h-[10rem] rounded-lg text-white space-x-5 uppercase flex-col text-[30px] font-extrabold'>
                        <div className='flex justify-between w-[90%] mt-[2rem] ml-[1rem]'>
                            <p>Quantity: </p>
                            <input type="number" className='w-[30%] text-black pl-[2rem]' value={lime.quantity} />
                        </div>
                        <div className='flex justify-between w-[90%] mt-[1rem] ml-[1rem]'>
                            <p>Price: </p>
                            <input type="text" className='w-[30%] mr-[0.2rem] text-black pl-[1rem]' value={lime.price} />
                        </div>
                    </div>

                    <button className='text-white text-[30px] font-extrabold bg-[#69ac0b] rounded-lg w-[95%] p-[0.8rem] mt-[1rem] uppercase'>Remove</button>
                </div>}

                {dragonfruit && <div className='bg-white ml-[3rem] h-[40.5%] w-[25%] flex flex-col items-center rounded-2xl mt-[3rem]'>
                    <div className='bg-[#ff21ce] w-[95%] flex items-center justify-center rounded-lg mt-[0.6rem]'>
                        <Image src={dragonfruit.image} alt='dragonfruit can' height={0} width={200} />
                    </div>

                    <div className='bg-[#ff21ce] w-[95%] mt-[0.5rem] flex h-[4rem] items-center rounded-lg text-white space-x-5 uppercase'>
                        <p className='text-[30px] font-extrabold ml-[1rem]'>{dragonfruit.drink}</p>
                        <p className='mr-[1rem] text-[30px] font-extrabold mt-[0.2rem]'>300 ml</p>
                    </div>

                    <div className='bg-[#ff21ce] w-[95%] mt-[0.5rem] flex h-[10rem] rounded-lg text-white space-x-5 uppercase flex-col text-[30px] font-extrabold'>
                        <div className='flex justify-between w-[90%] mt-[2rem] ml-[1rem]'>
                            <p>Quantity: </p>
                            <input type="number" className='w-[30%] text-black pl-[2rem]' value={dragonfruit.quantity} />
                        </div>
                        <div className='flex justify-between w-[90%] mt-[1rem] ml-[1rem]'>
                            <p>Price: </p>
                            <input type="text" className='w-[30%] mr-[0.2rem] text-black pl-[1rem]' value={dragonfruit.price} />
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

            <button className='bg-zinc-400 absolute top-[72rem] left-[35rem] p-[1rem] text-[34px] uppercase font-extrabold text-white rounded-xl w-[20rem]' onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Cart;
