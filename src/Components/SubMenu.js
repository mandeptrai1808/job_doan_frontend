import React from 'react'
import { Button, Dropdown } from 'antd';
import { useNavigate, NavLink } from "react-router-dom";

export default function SubMenu() {

  const items = [
    {
      key: '1',
      label: (
        <a href="#">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a href="#">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a href="#">
          3rd menu item
        </a>
      ),
    },
  ];

  const navigate = useNavigate()
  return (

        <div className="bg-slate-900  text-white w-full shadow-md">
        <NavLink
         to={'/'}
          className="hover:bg-white hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black"
        >
          <p>TRANG CHỦ</p>
        </NavLink>
        <div className="hover:bg-white hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black">
          <p>THỰC ĐƠN</p>
        </div>
        <NavLink 
          to={'/mevabe'}
        className="hover:bg-white hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black">
          <p>MẸ VÀ BÉ</p>
        </NavLink>
        <Dropdown menu={{ items }} placement="bottomRight" size="large" trigger='click' arrow>
        <div className="hover:bg-white relative hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black">
          <p>CẨM NANG</p>
          {/* <div className="absolute top-20 right-0">
          <SubMenu/>
          </div> */}
        </div>
        </Dropdown>

        <div className="hover:bg-white bg hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black">
          <p>LIÊN HỆ</p>
        </div>
      </div>
  )
}
