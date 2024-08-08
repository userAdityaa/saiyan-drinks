'use client'
import React, { Suspense, useState } from 'react'
import { Oswald } from 'next/font/google'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] })

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }


        try {
            const response = await axios.post('http://localhost:8000/user/login', { email, password }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const token = response.data.token;
            console.log(token);
            if (token) {
                localStorage.setItem('token', token);
                console.log('Token:', token);
                router.push('/Success');
                setEmail('');
                setPassword('');
                setError('');
            } else {
                setError('No token received.');
            }
        } catch (e: any) {
            console.error('Login failed:', e.response ? e.response.data : e.message);
            setError('Login failed. Please check your email and password.');
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
        <div className={`bg-[#4eceff] h-[100vh] w-[100vw] ${oswald.className} relative `}>
            <div className='border border-white bg-white w-[30rem] h-[20rem] absolute top-[10rem]
            rounded-xl left-[30rem] flex flex-col items-center'>
                <form onSubmit={handleSubmit} className='text-[24px] p-[3rem]'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name='email'
                        value={email}
                        className='bg-zinc-200 p-[0.5rem] pl-[3.5rem] w-[70%] mt-[1rem]'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name='password'
                        value={password}
                        className='bg-zinc-200 p-[0.5rem] pl-[3.5rem] w-[70%] mt-[1rem]'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type='submit'
                        className='text-black bg-zinc-200 uppercase text-[24px] font-extrabold p-[0.6rem] w-[95%] rounded-lg mt-[1rem]'
                    >
                        Sign In 
                    </button>
                    {error && <p className='text-red-500 mt-2'>{error}</p>}
                </form>
            </div>
        </div>
        </Suspense>
    )
}

export default Signin
