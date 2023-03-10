import React from 'react'
import Footer from './Footer'
import MenuHeader from './MenuHeader'

export default function ProfilePage() {

    let userData = localStorage.getItem("login_user");
    userData = userData && JSON.parse(userData);
    if (!userData) userData = {};

  return (
    <div>
          <div className="w-full overflow-hidden">
        <MenuHeader />
      </div>

       <div className='pb-40 pt-10 px-5 md:px-20'>

        <div className='flex w-full items-center border-b pb-5'>
            <div className='w-20 h-20 rounded-full' style={{
                backgroundImage: `url(${userData.avatar})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
            </div>
            <div className='ml-5'>
                <p className='font-bold text-3xl'>{userData.username}</p>
                <p className='italic'>{userData.email}</p>
            </div>
        </div>
        <div>

            <p>Dưới này là một số thông tin khác</p>

        </div>
       </div>

    <Footer/>
    </div>
  )
}
