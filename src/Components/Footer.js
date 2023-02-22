import React from 'react'

export default function Footer() {
  return (
    <div
    className='w-full  h-80 border-t-4 relative flex items-center border-black'
    style={{backgroundColor: "#181823"}}
    >
    
       <div className='grid grid-cols-2 p-2'>
            <div className='md:col-span-1 col-span-2 text-white md:px-40 md:pb-20'>
                <h1 className='text-xl mb-5 border-b w-40'>VỀ CHÚNG TÔI</h1>

                <p>
                    Trung tâm tư vấn cho mẹ và bé
                </p>
                <p className='opacity-50'>Luôn luôn sẳn sàng hỗ trợ</p>
            </div>

            <div className='md:col-span-1 col-span-2 text-white md:px-40 mt-5 md:mt-0 md:pb-20'>
                <h1 className='text-xl mb-5 border-b w-40'>LIÊN HỆ</h1>

                <p>
                    Địa chỉ
                </p>
                <p className='opacity-50'>Số 132, Đường 3/2, Hưng Lợi, Ninh Kiều, Cần Thơ</p>
                <p className='opacity-50 my-5'>SĐT: +84 944 151 930</p>
                <p className='opacity-50'>Email: dinhduongmevabe.com</p>
            </div>
        </div>


    <div className='absolute p-2 text-center bottom-0 w-full text-white left-0 bg-black'>
        <p>made by someone</p>
    </div>
    </div>
  )
}
