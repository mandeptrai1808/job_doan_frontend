import React from 'react'
import Footer from '../Components/Footer'
import MenuAdminPage from '../Components/MenuAdminPage'

export default function AdminPage({content}) {
  return (
    <div>
        <MenuAdminPage/>
        <div className="md:px-40 px-5 mt-10 pb-40">
            {content}
        </div>
        <Footer/>
    </div>
  )
}
