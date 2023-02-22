import React from "react";
import MenuHeader from "./MenuHeader";
import { Carousel } from "antd";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="bg-blue-100">
      <div className="w-full overflow-hidden">
        <MenuHeader />
      </div>

      {/* -------------------- */}

      <div className="md:px-40 px-5 mt-10 pb-40">
        <Carousel autoplay={true}>
          <div>
            <div
              className="md:h-100 h-40"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/anh1.jpg"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="bg-black bg-opacity-10 w-full h-8 absolute bottom-0 left-0"></div>
            </div>
          </div>
          <div>
            <div
              className="md:h-100 h-40"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/anh2.png"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div>
            <div
              className="md:h-100 h-40"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/anh3.webp"
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div>
            <div
              className="md:h-100 h-40"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/anh5.jpg"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div>
            <div
              className="md:h-100 h-40"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/anh6.jpg"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>

          <div>
            <div
              className="md:h-100 h-40"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/anh7.jpg"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </Carousel>

        {/* 4 box content  */}
        <div className="w-full grid grid-cols-4 md:gap-10 gap-2 mt-10 mb-10">
          <div
            className="col-span-2 md:col-span-1 md:h-52 h-40 relative opacity-80 cursor-pointer hover:scale-105 duration-200 rounded-sm hover:opacity-100"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/canhnam.jpg"
              })`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="bg-black bg-opacity-80 absolute bottom-0 w-full left-0 h-10">
              <p className="text-white text-center m-0  pt-2">Thịt hầm nấu</p>
            </div>
          </div>
          <div
            className="col-span-2 md:col-span-1 md:h-52 h-40 relative opacity-80 cursor-pointer hover:scale-105 duration-200 rounded-sm hover:opacity-100"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/chao.jpg"})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="bg-black bg-opacity-80 absolute bottom-0 w-full left-0 h-10">
              <p className="text-white text-center m-0  pt-2">Cháo nấm</p>
            </div>
          </div>
          <div
            className="col-span-2 md:col-span-1 md:h-52 h-40 relative opacity-80 cursor-pointer hover:scale-105 duration-200 rounded-sm hover:opacity-100"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/soup.webp"})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="bg-black bg-opacity-80 absolute bottom-0 w-full left-0 h-10">
              <p className="text-white text-center m-0  pt-2">Súp</p>
            </div>
          </div>
          <div
            className="col-span-2 md:col-span-1 md:h-52 h-40 relative opacity-80 cursor-pointer hover:scale-105 duration-200 rounded-sm hover:opacity-100"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/luu.jpg"})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="bg-black bg-opacity-80 absolute bottom-0 w-full left-0 h-10">
              <p className="text-white text-center m-0  pt-2">Quả lựu</p>
            </div>
          </div>
        </div>
        {/* CONTENT  */}
        <hr></hr>
        <div className="grid grid-cols-5 gap-10 mt-10">
          <div className="md:col-span-3 col-span-5">
            <h1 className="text-red-400 text-xl font-bold border-b-4 w-64 border-red-400 mb-5">
              Ý KIẾN CHUYÊN GIA
            </h1>

            <div>
              <div
                className="w-56 h-56 mt-2 mr-4 mb-2 float-left hover:scale-105 duration-100 cursor-pointer"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/BSyenphi.png"
                  })`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="font-bold hover:text-yellow-400 text-xl duration-200 cursor-pointer">
                TS BS ĐOÀN THỊ YẾN PHI
              </h1>
              <p className="text-justify text-sm">
                Nuôi con khỏe mạnh và thấy con phát triển toàn diện là niềm hạnh
                phúc của cả gia đình.Để đạt được điều này, mỗi người mẹ cần tìm
                hiểu kiến thức về cách chăm sóc dinh dưỡng,sức khỏe khoa học và
                áp dụng ngay từ những tuần đầu thai kì. Những việc cần làm bao
                gồm áp dụng chế độ ăn phù hợp, cung cấp đủ dưỡng chất cần thiết
                cho từng giai đoạn, kết hợp với vận động hợp lí và lối sống lành
                mạnh. Chương trình Dinh dưỡng Bà mẹ và Trẻ em là nơi cung cấp
                những kiến thức và công cụ thông minh hỗ trợ mẹ bầu chăm sóc
                dinh dưỡng và sức khỏe của mình và bé từ khi mang thai, đến khi
                cho con bú và nuôi con nhỏ đến 5 tuổi. Với những công cụ thông
                minh và linh hoạt của Chương trình, mẹ có thể kiểm tra chế độ
                dinh dưỡng và thói quen hiện tại của mẹ và bé đồng thời nhận
                những tư vấn phù hợp giúp mẹ điều chỉnh các thói quen hợp lý.
                Đặc biệt, Chương trình xây dựng riêng thực đơn cân bằng dinh
                dưỡng phù hợp nhu cầu cơ thể, ngon miệng cho từng giai đoạn của
                mẹ mang thai, mẹ cho con bú và bé dưới 5 tuổi. Mẹ nên áp dụng
                thực đơn này cho mẹ và bé để mẹ có thai kì khỏe mạnh, thuận lợi
                hơn và em bé được cung cấp đầy đủ dưỡng chất.
              </p>
            </div>

            <div className="my-10">
              <div
                className="w-56 h-56 mt-2 mr-4 mb-2 float-left hover:scale-105 duration-100 cursor-pointer"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/bacsinhung.jpg"
                  })`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="font-bold hover:text-yellow-400 text-xl duration-200 cursor-pointer">
                PGS TS BS BÙI THỊ NHUNG
              </h1>
              <p className="text-justify text-sm">
                Trẻ em có hai giai đoạn phát triển thể chất vượt trội là giai
                đoạn 1000 ngày đầu đời (từ khi trẻ còn là bào thai đến 24 tháng
                tuổi) và giai đoạn tuổi dậy thì. Hai giai đoạn này nếu trẻ được
                cung cấp đầy đủ dưỡng chất và có môi trường sống lành mạnh thì
                sẽ đạt được chiều cao tối ưu và phát triển toàn diện về thể chất
                và trí não. 1.000 ngày đầu đời được Tổ chức Y tế Thế giới (WHO)
                nhấn mạnh là giai đoạn vàng phát triển chiều cao và thể chất.
                Trẻ có thể tăng 25cm trong năm đầu tiên và 10cm mỗi năm trong 2
                năm tiếp theo, nếu được bổ sung dinh dưỡng đúng và đủ. Chương
                trình Dinh dưỡng dành cho Bà mẹ và Trẻ em cung cấp các thực đơn
                dinh dưỡng dành cho phụ nữ mang thai, mẹ cho con bú và trẻ em từ
                sơ sinh đến 5 tuổi, cho bé một nền tảng dinh dưỡng cân đối và
                hợp lý toàn diện ở giai đoạn vàng này. Bên cạnh đó, Chương trình
                còn giúp các thai phụ theo dõi cân nặng trong suốt thai kỳ cũng
                như theo dõi quá trình phát triển cân nặng, chiều cao của trẻ từ
                khi sinh ra đến 5 tuổi từ đó đưa ra các lời khuyên hữu ích cho
                mẹ và bé, và còn rất nhiều công cụ thông minh khác giúp chăm sóc
                sức khỏe. Bạn nên sử dụng thường xuyên thực đơn và các công cụ
                thông minh này để có một chế độ ăn dinh dưỡng và chăm sóc tốt
                sức khỏe của bạn và em bé.
              </p>
            </div>

            <div>
              <div
                className="w-56 h-56 mt-2 mr-4 mb-2 float-left hover:scale-105 duration-100 cursor-pointer"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/bslandung.png"
                  })`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <h1 className="font-bold hover:text-yellow-400 text-xl duration-200 cursor-pointer">
                TS DƯƠNG LAN NHUNG
              </h1>
              <p className="text-justify text-sm">
                Thời kỳ mang thai là giai đoạn cơ thể người phụ nữ có nhiều thay
                đổi về tâm lý và sinh lý do sự biến động nồng độ các hormone và
                việc thai nhi lớn dần trong bụng mẹ. Tâm trạng của phụ nữ mang
                thai có thể thay đổi thất thường, mệt mỏi, rối loạn giấc ngủ,
                cân nặng tăng, tiêu hóa kém, tuyến vú phát triển, rạn da, tăng
                sắc tố da, giãn tĩnh mạch, phù chân tay... Do đó, phụ nữ mang
                thai luôn cần có sự chăm sóc chu đáo về dinh dưỡng, sức khỏe thể
                chất và tinh thần, theo dõi quá trình tăng cân trong suốt thai
                kì để đảm bảo một thai kỳ khỏe mạnh. Đồng thời, sau sinh, các bà
                mẹ cũng cần lưu ý chế độ ăn để đáp ứng đủ nhu cầu của cơ thể mẹ
                và cung cấp nguồn sữa dồi dào và chất lượng cho em bé. Tuy
                nhiên, thực tế, nhiều bà mẹ vẫn còn lúng túng, chưa biết cách
                chăm sóc bản thân và em bé sao cho đúng và cũng chưa biết tham
                khảo thông tin chính thống từ nguồn nào. "Chương trình Dinh
                dưỡng Bà mẹ và Trẻ em được triển khai bởi Vụ Sức khỏe Bà mẹ -
                Trẻ em, Bộ Y tế và Công ty Ajinomoto Việt Nam, dưới sự tư vấn về
                chuyên môn dinh dưỡng của Viện Dinh Dưỡng Quốc gia chính là
                nguồn thông tin chính thống mà các bà mẹ cần." Không những cung
                cấp ngân hàng thực đơn dinh dưỡng, đa dạng và ngon miệng cho mẹ
                và bé, Chương trình còn cung cấp rất nhiều thông tin tư vấn chăm
                sóc dinh dưỡng và sức khỏe hữu ích cho từng giai đoạn của mẹ như
                trước khi mang thai, trong thai kỳ, giai đoạn cho con bú; và
                từng giai đoạn của bé như giai đoạn sơ sinh, giai đoạn ăn dặm
                đến dưới 1 tuổi, từ 1 – dưới 3 tuổi và từ 3 – 5 tuổi. Các bà mẹ
                hãy thường xuyên vào website của Chương trình để tham khảo và
                thực hành chăm sóc dinh dưỡng và sức khỏe cho mẹ và bé cùng khỏe
                mạnh nhé!
              </p>
            </div>
          </div>

          <div className="md:col-span-2 col-span-5">
            <h1 className="text-red-400 mb-5 text-xl font-bold border-b-4 md:w-96 border-red-400">
              BỆNH LÝ PHỔ BIẾN KHI MANG THAI
            </h1>
            <div className="flex duration-150 hover:text-yellow-700 hover:bg-slate-200 cursor-pointer p-2 justify-between items-center">
              <div className="w-20 h-20"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/songdienthoai.jpg"})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              ></div>
              <p className="pl-5 w-80">KHÔNG NÊN TIẾP XÚC VỚI SÓNG ĐIỆN THOẠI</p>
            </div>
            <div className="flex duration-150 hover:text-yellow-700 hover:bg-slate-200 cursor-pointer p-2 justify-between items-center">
              <div className="w-20 h-20"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/dohuyetap.jpg"})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              ></div>
              <p className="pl-5 w-80">HUYẾT ÁP CAO</p>
            </div>
            <div className="flex duration-150 hover:text-yellow-700 hover:bg-slate-200 cursor-pointer p-2 justify-between items-center">
              <div className="w-20 h-20"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/tieuduongthaiki.jpg"})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              ></div>
              <p className="pl-5 w-80">TIỂU ĐƯỜNG THAI KÌ</p>
            </div>

            <div className="flex duration-150 hover:text-yellow-700 hover:bg-slate-200 cursor-pointer p-2 justify-between items-center">
              <div className="w-20 h-20"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/tramcam.jpg"})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              ></div>
              <p className="pl-5 w-80">TRẦM CẢM KHI MANG THAI VÀ SAU SINH</p>
            </div>

            <div className="flex duration-150 hover:text-yellow-700 hover:bg-slate-200 cursor-pointer p-2 justify-between items-center">
              <div className="w-20 h-20"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/buonon.jpg"})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              ></div>
              <p className="pl-5 w-80">BUỒN NÔN VÀ ÓI MỬA LIÊN TỤC</p>
            </div>

              <div className="flex duration-150 hover:text-yellow-700 hover:bg-slate-200 cursor-pointer p-2 justify-between items-center">
              <div className="w-20 h-20"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/thieumau.png"})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              ></div>
              <p className="pl-5 w-80">THIẾU MÁU THAI KÌ</p>
            </div>

            <div className="flex duration-150 hover:text-yellow-700 hover:bg-slate-200 cursor-pointer p-2 justify-between items-center">
              <div className="w-20 h-20"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/camcum.jpg"})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              ></div>
              <p className="pl-5 w-80">CẢM CÚM</p>
            </div>

            <div className="flex duration-150 hover:text-yellow-700 hover:bg-slate-200 cursor-pointer p-2 justify-between items-center">
              <div className="w-20 h-20"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/phuchan.jpg"})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              ></div>
              <p className="pl-5 w-80">PHÙ CHÂN</p>
            </div>

            <div className="flex duration-150 hover:text-yellow-700 hover:bg-slate-200 cursor-pointer p-2 justify-between items-center">
              <div className="w-20 h-20"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/umattaigan.jpg"})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              ></div>
              <p className="pl-5 w-80">BỊ Ứ MẬT TẠI GAN</p>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
