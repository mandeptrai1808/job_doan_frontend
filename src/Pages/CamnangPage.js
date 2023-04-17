import React from 'react'
import MenuHeader from '../Components/MenuHeader'
import Footer from '../Components/Footer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCamnang } from '../Redux/Actions/ManagerAction'


export default function CamnangPage() {

    
    const dispatch = useDispatch();
    const {camnangList} = useSelector(state => state.ManagerReducer);
    console.log(camnangList)
    
    const contentCamnang = camnangList.map((item,index) => {
      return <div>

<h1 className='text-xl font-bold mt-10 mb-5 border-b-4 w-fit pr-10 border-red-500'>{item.title}</h1>
<div style={{whiteSpace: 'pre-line'}}>
        {item.content}
</div>
<div className='w-full my-5 flex justify-center'>
            <div
              className="md:h-96 h-64 md:w-2/3 w-full rounded-xl"
              style={{
                backgroundImage: `url(${item.image?.replaceAll(
                    "\\",
                    "/"
                  )})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            </div>

      </div>
    })

    useEffect(() => {
      dispatch(GetAllCamnang());
    }, [])

  return (
    <div>
         <div className="w-full overflow-hidden">
        <MenuHeader />
        </div>

        <div className="md:px-40 px-5 mt-10 pb-20">
            {contentCamnang}
            </div>

        <Footer/>

    </div>
  )
}
