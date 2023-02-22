import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";
// import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';

export default function MenuHeader() {
  const navigate = useNavigate();

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];
  

  return (

    

    <div
      style={{ backgroundColor: "#181823", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
      className="w-screen h-20 flex justify-between shadow-md items-center px-20"
    >
      <div className="text-3xl text-white">
        {/* <p className="m-0">LOGO</p> */}
        <div 
        className="w-16 h-16"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/logomenu.png"})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
        </div>

      </div>

      <div className="flex text-white w-2/3 justify-center">
        <NavLink
          onClick={() => {
            navigate();
          }}
          className="hover:bg-white hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black"
        >
          <p>TRANG CHỦ</p>
        </NavLink>
        <div className="hover:bg-white hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black">
          <p>THỰC ĐƠN</p>
        </div>
        <div className="hover:bg-white hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black">
          <p>MẸ VÀ BÉ</p>
        </div>
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

        <div className="flex items-center border-left">
          <div
            className="mr-2"
            onClick={() => {
              navigate("/register");
            }}
          >
            <p className="text-red-500 hover:scale-110 duration-150 cursor-pointer font-bold bg-slate-100 p-2 rounded">
              REGISTER
            </p>
          </div>
          <div
            onClick={() => {
              navigate("/login");
            }}
          >
            <p className="text-white hover:scale-110 duration-150 cursor-pointer font-bold bg-red-500 p-2 rounded">
              LOGIN
            </p>
          </div>
        </div>
    </div>
  );
}
