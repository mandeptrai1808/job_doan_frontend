import React from 'react'
import Footer from '../Components/Footer'
import MenuHeader from '../Components/MenuHeader'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetMenuList } from '../Redux/Actions/ManagerAction'
import Bathangdau from '../Components/Bathangdau'
import BathanggiuaPage from '../Components/BathanggiuaPage'
import BathangcuoiPage from '../Components/BathangcuoiPage'
import AndamPage from '../Components/AndamPage'

export default function MenuPage() {

    const dispatch = useDispatch();

  const {typeId, menuListCurrent} = useSelector(state => state.ManagerReducer);


  const ThucDonContent = menuListCurrent.map((item, index) => {
        return   <div key={index} className='flex bg-slate-50 shadow-md rounded-sm py-5 px-2 relative mb-5'>
        <div className='w-40 rounded-md overflow-hidden md:h-40 h-24 mr-10'
        style={{
          backgroundImage: `url(${item.img?.replaceAll(
            "\\",
            "/"
          )})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        >
        </div>
        <div className='w-96'>
          <p className='font-bold border-b'>{item.title}</p>
         <p style={{whiteSpace: 'pre-line'}}>{item.content}</p>
        </div>

      </div> 
  })

  const menuList = [
    <Bathangdau/>,
    <BathanggiuaPage/>,
    <BathangcuoiPage/>,
    <AndamPage/>
  ]
  useEffect(() => {
    dispatch(GetMenuList(typeId))
}, [typeId])

  return (
    <div>
         <div className="w-full overflow-hidden">
        <MenuHeader />
      </div>
        <div className="md:px-40 px-5 mt-10 pb-20">
        {menuList[typeId]}
     
{/* cvoncac */} {ThucDonContent}

        </div>

     
      <Footer/>

    </div>
  )
}
