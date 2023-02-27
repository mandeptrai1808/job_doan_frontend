import React from 'react'
import Footer from './Footer'
import MenuHeader from './MenuHeader'

export default function Camnang() {
  return (
    <div>
         <div className="w-full overflow-hidden">
        <MenuHeader />
        </div>
            
        <div className="md:px-40 px-5 mt-10 pb-40">
            <h1 className='text-xl font-bold border-b-4 mb-10 w-fit pr-10 border-red-500'>VÌ SAO CẦN CHÚ Ý CHĂM SÓC DINH DƯỠNG CHO MẸ SAU SINH?</h1>
            <p>
            Nuôi con hoàn toàn bằng sữa mẹ trong 6 tháng đầu có vai trò vô cùng quan trọng đối với sự phát triển của trẻ. Theo Tổ chức Y tế thế giới, nên cho trẻ bú sớm trong vòng 1 giờ sau sinh và nuôi trẻ hoàn toàn bằng sữa mẹ trong 6 tháng đầu, sau đó cho trẻ ăn bổ sung từ khi được tròn 6 tháng, kết hợp với bú sữa mẹ tới khi trẻ được 24 tháng tuổi. Trong giai đoạn sau sinh - nuôi con bú, chế độ dinh dưỡng của người mẹ có ảnh hưởng lớn tới sức khỏe của trẻ. Cụ thể, chế độ dinh dưỡng tốt giúp bà mẹ có đủ sữa nuôi con. Vì vậy, bà mẹ sau sinh cần có một chế độ dinh dưỡng hợp lý, kết hợp với vận động, nghỉ ngơi khoa học và có tâm lý thoải mái.
            </p>
            <div className='w-full flex justify-center'>
            <div
              className="md:h-96 h-64 md:w-1/2 w-full"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/camnang1.jpg"
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            </div>

            <h1 className='text-xl font-bold border-b-4 mb-10 w-fit pr-10 border-red-500'>TƯ THẾ NGỦ NÀO TỐT NHẤT CHO CẢ MẸ VÀ THAI NHI?</h1>
            <h1 className=''>NHỮNG TƯ THẾ NGỦ TỐT CHO BÀ BẦU</h1>
            <p>
            Nuôi con hoàn toàn bằng sữa mẹ trong 6 tháng đầu có vai trò vô cùng quan trọng đối với sự phát triển của trẻ. Theo Tổ chức Y tế thế giới, nên cho trẻ bú sớm trong vòng 1 giờ sau sinh và nuôi trẻ hoàn toàn bằng sữa mẹ trong 6 tháng đầu, sau đó cho trẻ ăn bổ sung từ khi được tròn 6 tháng, kết hợp với bú sữa mẹ tới khi trẻ được 24 tháng tuổi. Trong giai đoạn sau sinh - nuôi con bú, chế độ dinh dưỡng của người mẹ có ảnh hưởng lớn tới sức khỏe của trẻ. Cụ thể, chế độ dinh dưỡng tốt giúp bà mẹ có đủ sữa nuôi con. Vì vậy, bà mẹ sau sinh cần có một chế độ dinh dưỡng hợp lý, kết hợp với vận động, nghỉ ngơi khoa học và có tâm lý thoải mái.
            </p>
            <div className='w-full flex justify-center'>
            <div
              className="md:h-96 h-64 md:w-1/2 w-full"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/camnang1.jpg"
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            </div>
        </div>


        <Footer/>
    </div>
  )
}
