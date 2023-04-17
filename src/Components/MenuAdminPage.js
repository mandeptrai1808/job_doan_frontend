import React, {useState} from "react";
import { useNavigate, NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";
// import type { MenuProps } from 'antd';
import { Button, Dropdown, Popover } from 'antd';
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import UserButton from "./UserButton";
import { click } from "@testing-library/user-event/dist/click";
import LoginButton from "./LoginButton";
import { useDispatch } from "react-redux";
export default function MenuAdminPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let userData = localStorage.getItem("login_user");
  userData = userData && JSON.parse(userData);
  if (!userData) userData = {};


  const items = [
    {
      key: '1',
      label: (
        <p onClick={() => {
          dispatch({
            type: 'SWITCH_TYPEID',
            content: 0
          })
          navigate('/adminmenu')
        }}>
          3 Tháng đầu thai kì
        </p>
      ),
    },
    {
      key: '2',
      label: (
        <p onClick={() => {
          dispatch({
            type: 'SWITCH_TYPEID',
            content: 1
          })
          navigate('/adminmenu')

        }}>
          3 Tháng giữa thai kì
        </p>
      ),
    },
    {
      key: '3',
      label: (
        <p onClick={() => {
          dispatch({
            type: 'SWITCH_TYPEID',
            content: 2
          })
          navigate('/adminmenu')

        }}>
          3 Tháng cuối đến sinh
        </p>
      ),
    },
    {
      key: '4',
      label: (
        <p onClick={() => {
          dispatch({
            type: 'SWITCH_TYPEID',
            content: 3
          })
          navigate('/adminmenu')

        }}>
          Trẻ đến tuổi ăn dặm
        </p>
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
      <div className="w-fit text-3xl flex items-center text-white">
        {/* <p className="m-0">LOGO</p> */}
        <div 
        className="h-10 w-10"
        style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/logomenu.png"})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
        </div>
        <h1 className="ml-2 hidden md:block">ADMIN PAGE</h1>
      </div>
        <h1 className="ml-2 md:text-3xl md:hidden block text-2xl text-white font-bold">ADMIN PAGE</h1>
            <div className={`w-10 h-10 ${subMenu ? 'bg-slate-500': ''} rounded md:hidden flex items-center text-white text-3xl font-bold justify-center`}
              onClick={() => {
                buttonSubMenu()
              }}
            >
              <MenuOutlined/>
            </div>

      <div className="md:flex hidden  text-white w-2/3 justify-center">
        <NavLink
          to={'/admin'}
          className="hover:bg-white hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black"
        >
          <p>QUẢN LÝ USERS</p>
        </NavLink >
          <Dropdown menu={{ items }} placement="bottomRight" size="large" trigger='hover' arrow>
        <NavLink to={'/adminmenu'} className="hover:bg-white hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black">
          <p>QUẢN LÝ THỰC ĐƠN</p>
        </NavLink>
        </Dropdown>
        <NavLink 
        to={"/admincamnang"}
        className="hover:bg-white hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black">
          <p>QUẢN LÝ CẨM NANG</p>
        </NavLink>

        <NavLink to={'/lienhe'} className="hover:bg-white bg hover:font-bold duration-200  cursor-pointer hover:border-2px h-20 px-5 flex items-center hover:text-black">
          <p>LIÊN HỆ</p>
        </NavLink>
      </div>

    </div>
    {subMenu ? <SubMenu/> : ''}
    </div>
  );
}
