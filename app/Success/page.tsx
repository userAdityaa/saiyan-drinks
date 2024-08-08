'use client'
import React, { useState } from 'react'
import axios from 'axios'


interface Drink {
  drink: string;
  quantity: number;
  price: number;
  image: string;
}


const Success = () => {
  const [userDrinksData, setUserDrinksData] = useState<Drink[][]>([]);
  const handleHistory = async () => { 
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
      const response = await axios.get('http://localhost:8000/user/getUser', { headers });

      const orderContainer = response.data.orderContainer;
   
      setUserDrinksData([]);
      orderContainer.forEach((order: Drink[]) => {
        setUserDrinksData((prev) => [...prev, order]);
      })

    }
    catch (e) { 
      console.log(e)
    }
  }
  return (
    <div className='flex h-[100vh] w-[100vw] justify-center items-center bg-[#4eceff]'>
      <button className='button bg-gray-400 p-[1rem] rounded-xl font-bold text-white text-[28px]
      uppercase' onClick={handleHistory}>Purchase History</button>


      <p>{userDrinksData.map((container, index) => { 
        return (
          <div key={index} className='border border-black flex bg-white p-[2rem] rounded-xl'>
            {container.map((drink, index) => { 
              return (
                <div key={index} className='border border-black mr-[4rem]' >
                  <p>{drink.drink}</p>
                  <p>{drink.quantity}</p>
                  <p>{drink.price}</p>
                </div>
              )
            })}
          </div>
        )
      })}</p>
    </div>
  )
}

export default Success