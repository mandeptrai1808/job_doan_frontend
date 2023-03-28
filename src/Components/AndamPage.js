import React from 'react'


export default function AndamPage() {
  return (
    <div>
   <div>
 <h1 className='text-xl font-bold border-b-4 mb-2 w-fit pr-10 border-red-500'>GIAI ĐOẠN TRẺ ĐẾN TUỔI ĂN DẬM?</h1>

 
 <h2 className='text-red-400 font-bold text-xl mt-10'>Món chính</h2>
 <div className='flex'>
   <div className='w-56 h-56 mr-10'
   style={{
     backgroundImage: `url(${
       process.env.PUBLIC_URL + "/canhchuathitbam.webp"
     })`,
     backgroundPosition: "center",
     backgroundSize: "cover",
   }}
   >
   </div>
   <div className='w-96'>
     <p className='font-bold border-b'>Canh chua thịt băm</p>
     <p>
       1. Thịt heo xay: 150-200gr <br/>
       2. Rau củ: 1/2 quả dứa, 3-4 quả cà chua, 100gr giá đỗ, 2-3 củ hành tím, 1-2 nhánh hành lá <br/>
       3. Gia vị: Mắm, muối, hạt nêm <br/>
     </p>
   </div>
 </div>
   </div>


</div>
  )
}
