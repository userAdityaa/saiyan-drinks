'use client'
import React, { useState } from 'react'
import { Oswald } from 'next/font/google'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '200', '300', '500'] })

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    axios.post('http://localhost:8000/user/signup', { name, email, password }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((res) => { 
      alert("User Created")
      setName('')
      setEmail('')
      setPassword('')
      console.log(res)
    })
    .catch((e) => { 
      console.log(e)
    })
  }

  const handleSignInEmail = () => { 
    router.push('/Signin');
  }

  return (
    <div className={`bg-[#4eceff] h-[100vh] w-[100vw] ${oswald.className} relative `}>
      <div className='border border-white bg-white w-[30rem] h-[35rem] absolute top-[10rem]
        rounded-xl left-[30rem] flex flex-col items-center'>
        <form onSubmit={handleSubmit} className='text-[24px] p-[3rem]'>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name='username'
            value={name}
            className='bg-zinc-200 p-[0.5rem] pl-[3.5rem] w-[70%]'
            onChange={(e) => setName(e.target.value)}
          />
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
            Sign Up
          </button>
        </form>

        <p className='-mt-[1rem] font-extrabold'>OR SIGN IN WITH</p>

        <button
            onClick={handleSignInEmail}
            className='text-black bg-zinc-200 uppercase text-[24px] font-extrabold p-[0.5rem] w-[78%] rounded-lg mt-[1rem]'
          >
            Sign In With Email
          </button>
          <button
            type='submit'
            className='text-black bg-zinc-200 uppercase text-[24px] font-extrabold p-[0.5rem] w-[78%] rounded-lg mt-[1.5rem]'
          >
            Sign In With Google
          </button>
      </div>
    </div>
  )
}

export default Login
