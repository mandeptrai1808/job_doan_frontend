import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MenuHeader() {

    const navigate = useNavigate()

  return (
    <div className='w-screen bg-black h-20 flex justify-between items-center px-20'>
        <div className='text-3xl text-white'>
                <p className='m-0'>LOGO</p>
        </div>

        <div className='flex text-white w-2/3 justify-center'>
            <div className='hover:bg-white hover:font-bold duration-200 shadow-md cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black'>
                <p>HOMEPAGE</p>
            </div>
            <div className='hover:bg-white hover:font-bold duration-200 shadow-md cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black'>
                <p>HOMEPAGE</p>
            </div>
            <div className='hover:bg-white hover:font-bold duration-200 shadow-md cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black'>
                <p>HOMEPAGE</p>
            </div>
            <div className='hover:bg-white hover:font-bold duration-200 shadow-md cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black'>
                <p>HOMEPAGE</p>
            </div>
                
            <div className='hover:bg-white bg hover:font-bold duration-200 shadow-md cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black'>
                <p>HOMEPAGE</p>
            </div>
            
            <div className='hover:bg-white bg hover:font-bold duration-200 shadow-md cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black'
                onClick={() => {
                  navigate('/login')
                }}
            >
                <p className='text-blue-500'>LOGIN</p>
            </div>
            <div className='hover:bg-white bg hover:font-bold duration-200 shadow-md cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black'
                onClick={() => {
                  navigate('/register')
                }}    
            >
                <p className='text-red-500'>REGISTER</p>
            </div>
        </div>

    </div>
  )
}
