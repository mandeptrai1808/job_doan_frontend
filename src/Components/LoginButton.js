import React from 'react'
import { ImportOutlined, UserOutlined, UserAddOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

export default function LoginButton() {

    const navigate = useNavigate();

  return (
    <div className='font-bold'>
        <div className='w-40 hover:bg-blue-200 bg-blue-500 text-white flex items-center py-2 px-2 cursor-pointer duration-100 border-b'
        onClick={() => {
          navigate("/login")
        }}
        >
            <UserOutlined/>
            <p className='ml-2'>Login</p>
        </div>
        <div  className='w-40 bg-red-500 flex items-center text-white hover:bg-red-400 py-2 px-2 cursor-pointer duration-100 border-b'
        onClick={() => {
            navigate("/register")
        }}
        >
            <UserAddOutlined/>
            <p className='ml-2'>Register</p>
        </div>
    </div>
  )
}
