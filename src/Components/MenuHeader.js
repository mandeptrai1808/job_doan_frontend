import React, {useState} from "react";
import { useNavigate, NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";
// import type { MenuProps } from 'antd';
import { Button, Dropdown, Popover } from 'antd';
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import UserButton from "./UserButton";
import { click } from "@testing-library/user-event/dist/click";
import LoginButton from "./LoginButton";
export default function MenuHeader() {
  const navigate = useNavigate();

  let userData = localStorage.getItem("login_user");
  userData = userData && JSON.parse(userData);
  if (!userData) userData = {};


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

  

  const [subMenu, setSubMenu] = useState(false)

  const buttonSubMenu = () => {
    setSubMenu(
      !subMenu
      )
  }


  return (

    <div>
    <div
      style={{ backgroundColor: "#181823", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}

      className="w-screen h-20 flex px-5 justify-between shadow-md items-center md:px-20"
    >
      <div className={`w-10 h-10 ${subMenu ? 'bg-slate-500': ''} rounded md:hidden flex items-center text-white text-3xl font-bold justify-center`}
        onClick={() => {
          buttonSubMenu()
        }}
      >
        <MenuOutlined/>
      </div>
      <div className="w-fit text-3xl text-white">
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

      <div className="md:flex hidden  text-white w-2/3 justify-center">
        <NavLink
          to={'/'}
          className="hover:bg-white hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black"
        >
          <p>TRANG CH???</p>
        </NavLink>
          <Dropdown menu={{ items }} placement="bottomRight" size="large" trigger='click' arrow>
        <div className="hover:bg-white hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black">
          <p>TH???C ????N</p>
        </div>
        </Dropdown>
        <NavLink 
        to={"/mevabe"}
        className="hover:bg-white hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black">
          <p>M??? V?? B??</p>
        </NavLink>
        
        <NavLink to={"/camnang"}>
        <div className="hover:bg-white relative hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black">
          <p>C???M NANG</p>
          {/* <div className="absolute top-20 right-0">
          <SubMenu/>
          </div> */}
        </div>
        </NavLink>

        <div className="hover:bg-white bg hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black">
          <p>LI??N H???</p>
        </div>
      </div>

      <div className="hidden md:block">
        {(userData.username) ? 
        <Popover content={<UserButton/>} placement='bottomRight' trigger={"click"}>
        <div className="md:flex cursor-pointer opacity-80 hover:opacity-100 duration-100 hidden items-center border-left">
          <div className="w-10 h-10 rounded-full" style={{
            backgroundImage: `url(${userData.avatar})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}>

          </div>
          <div className="text-white  ml-5">
            <p className="m-0 text-lg font-bold">
              {userData.username} 
            </p>
            <p className="m-0 text-sm opacity-50">
              {userData.email}
            </p>
          </div>
        </div>

        </Popover>

        
        :

        <div className="md:flex hidden items-center border-left">
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
        
        }
      </div>

      <div className="w-10 h-10 md:hidden flex items-center text-white text-3xl font-bold justify-center">
        {userData.username ? 
        <Popover content={<UserButton/>} placement='bottomRight' trigger={"click"}>

         <div className="w-10 h-10 rounded-full" style={{
          backgroundImage: `url(${userData.avatar})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>

        </div>
        </Popover>
        :
      <Popover   content={<LoginButton/>} placement='bottomRight' trigger={"click"}>
            <UserOutlined/>
      </Popover>
        }
      </div>  
    </div>
    {subMenu ? <SubMenu/> : ''}
    </div>
  );
}
