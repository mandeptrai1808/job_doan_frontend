import React from "react";
import Footer from "./Footer";
import MenuHeader from "./MenuHeader";
import { MessageOutlined } from "@ant-design/icons";

export default function MevabePage() {
  return (
    <div>
      <div className="w-full overflow-hidden">
        <MenuHeader />
      </div>

      <div className="md:px-40 px-5 mt-10 pb-40">
        <h1 className="text-red-400 text-xl font-bold border-b-4 w-fit pr-5 border-red-400">
          VỀ DINH DƯỠNG VÀ SỨC KHỎE CỦA MẸ
        </h1>
        <hr></hr>
        <div className="grid grid-cols-5 gap-10">
          <div className="md:col-span-3 col-span-5">
            <div
              className="md:h-100 h-96 w-full mt-5 mr-4 mb-20  float-left"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/suckhoeme.png"
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div>
              <h1 className="font-bold hover:text-yellow-400">
                Nên tăng bao nhiêu trong thai kì?
              </h1>
              <div className="md:pl-20 text-justify opacity-90">
                <p>
                  Tăng bao nhiêu cân tùy thuộc vào chỉ số khối cơ thể (BMI)
                  trước khi mang thai. Nếu đang mang thai, mẹ có thể căn cứ vào
                  vào chỉ BMI sau:
                </p>
                <p>
                  {` - BMI < 18,5: thiếu cân – mẹ nên tăng 12-18kg trong thai kỳ;`}
                </p>
                <p>
                  {`- BMI=18,5-24,9: cân nặng bình thường – mẹ nên tăng 11-15kg trong thai kỳ;`}
                </p>
                <p>
                  {`- BMI > 25& < 30: thừa cân – mẹ nên tăng 7-11kg trong thai kỳ;`}
                </p>
                <p>
                  {`- BMI > 30: béo phì – mẹ nên tăng 5-9kg trong thai kỳ;`}
                </p>
                <br />
                <br />
                <p>
                  Mẹ nên tăng cân từ từ và tham khảo ý kiến của bác sĩ sản khoa:
                  <br />
                  <br />- 3 tháng đầu nên tăng 0,5-2kg
                  <br></br>- Sau 3 tháng đầu, mỗi tháng nên tăng 1-2kg cho đến
                  lúc sinh.
                </p>
                <div
                  className="md:h-96 h-40 w-full mt-5 mr-4 mb-20  float-left"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/ran-da-2.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>

            <div>
              <h1 className="font-bold hover:text-yellow-400">
                Nên ăn và uống bao nhiêu trong thai kỳ?
              </h1>
              <div className="md:pl-20 text-justify opacity-90">
                <p>
                  Tiêu thụ thực phẩm lành mạnh, đặc biệt là nước và số lượng
                  calo thích hợp có thể giúp mẹ và em bé tăng cân đúng mức.Cần
                  ăn bao nhiêu thực phẩm và bao nhiêu calo phụ thuộc cân nặng
                  trước khi mang thai, tuổi của mẹ và tốc độ tăng cân.
                </p>
                <br />
                <p>
                  - Nếu mẹ có cân nặng bình thường: hầu như không cần tăng calo
                  trong ba tháng đầu mà chỉ cần ăn uống như bình thường.
                  <br />
                  - Bổ sung khoảng 340 calo mỗi ngày trong tam cá nguyệt thứ
                  hai.
                  <br />- Bổ sung khoảng 450 calo mỗi ngày trong tam cá nguyệt
                  thứ ba.
                </p>

                <div
                  className="md:h-96 h-40 w-full mt-5 mr-4 mb-20  float-left"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/anuong.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <h1 className="font-bold hover:text-yellow-400">
                Mẹ nên ăn uống những loại thực phẩm nào?
              </h1>
              <div className="md:pl-20 text-justify opacity-90">
                <p>
                  Trong chế độ khi mang thai lành mạnh, mẹ hãy bổ sung thường
                  xuyên những thực phẩm dưới đây:
                </p>
                <br />
                <p>
                  - Trái cây và rau quả: cung cấp vitamin và chất xơ.
                  <br />
                  - Ngũ cốc nguyên hạt như bột yến mạch, bánh mì ngũ cốc và gạo
                  nâu: cung cấp chất xơ, vitamin B và các chất dinh dưỡng cần
                  thiết khác.
                  <br />
                  - Sữa và các sản phẩm sữa không béo hoặc ít béo, đậu nành,
                  hạnh nhân, gạo hoặc các loại đồ uống khác có thêm canxi và
                  vitamin D.
                  <br />- Protein từ các nguồn lành mạnh như các loại đậu,
                  trứng, thịt nạc, hải sản chứa ít thủy ngân.
                </p>

                <div
                  className="md:h-96 h-40 w-full mt-5 mr-4 mb-20  float-left"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/Chat-dinh-duong-tot-cho-ba-bau-1.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <h1 className="font-bold hover:text-yellow-400">
                Mang thai nên kiêng ăn gì?
              </h1>
              <div className="md:pl-20 text-justify opacity-90">
                <p>
                Chế độ khi mang thai lành mạnh là một chế độ ăn uống khoa học. Để thực hiện được, mẹ cần tránh những thực phẩm có khả năng gây hại dưới đây:
                </p>
                <br />
                <p>
                - Rượu; <br/>
                - Caffeine: chỉ uống cà phê hoặc trà decaf không ngọt hoặc với một chút nước trái cây.<br/>
                - Cá có thể có hàm lượng thủy ngân cao: cá thu vua, marlin, cam thô, cá mập, cá kiếm, hoặc cá ngói.<br/>
                - Thực phẩm có thể gây bệnh cho bạn hoặc em bé từ virus, ký sinh trùng hoặc vi khuẩn: phô mai mềm làm từ sữa chưa tiệt trùng hoặc sữa tươi; bột cookie thô; thịt, trứng và hải sản nấu chưa chín…;<br/>
                - Bất cứ thứ gì không phải là thực phẩm như bột giặt, đất sét, tro, hoặc chip sơn…kể cả có nhiều mẹ nghén bởi những thứ kì dị.<br/>
                </p>

                <div
                  className="md:h-96 h-40 w-full mt-5 mr-4 mb-20  float-left"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/ba-bau-uong-ca-phe.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <h1 className="font-bold hover:text-yellow-400">
               Một số vấn đề sức khỏe thai phụ cần lưu ý
              </h1>
              <div className="md:pl-20 text-justify opacity-90">
                <p>
                Ngoài ra mẹ bầu cần chú ý một số vấn đề sức khỏe liên quan đến dinh dưỡng và biết cách xử lý đúng như sau:
                </p>
                <br />
                <p>
                - Thiếu máu, thiếu sắt thường xảy ra ở 3 tháng giữa và 3 tháng cuối thai kỳ. Uống viên sắt bổ sung với hàm lượng Sắt nguyên tố 60mg và 400 μg acid folic. Uống mỗi ngày 1 viên liên tục từ khi phát hiện có thai cho đến 1 tháng sau khi sinh là cách giải quyết tốt nhất cho mẹ bầu.<br/>
                - Khó tiêu: Do áp lực của tử cung lên hệ tiêu hóa, cần chia nhỏ bữa ăn, không ăn no trước khi đi ngủ, ăn chậm và ngồi thẳng khi ăn.<br/>
                - Táo bón: Xảy ra ở khoảng 30-40% phụ nữ có thai, mẹ bầu nên uống nhiều nước (8 ly/ngày), ăn thức ăn có nhiều chất xơ.<br/>
                - Nôn ói: Thường xảy ra vào tuần 6-16. Mẹ bầu nên tránh thức ăn có mùi, dùng thức ăn có nhiều bột đường, ít chất béo. Sáng sớm ngủ dậy nên uống một ly nước nóng với bánh mì, bánh quy.

                </p>

                <div
                  className="md:h-96 h-40 w-full mt-5 mr-4 mb-20  float-left"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/luuy.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <h1 className="font-bold hover:text-yellow-400">
               Các chất dinh dưỡng và năng lượng 
              </h1>
              <div className="md:pl-20 text-justify opacity-90">
                <p>
                Năng lượng trung bình cần cho một phụ nữ là 2.200 kcal/ ngày, khi mang thai ở 3 tháng giữa, lượng năng lượng cần tăng lên thêm 360kcal/ ngày. Trong 3 tháng cuối là thời điểm tăng tốc cho sự phát triển của thai nhi, mẹ bầu cần thêm 475kcal/ ngày, đảm bảo năng lượng để con lớn và tăng cân trong thời điểm cuối của thai kỳ. Tương ứng với lượng năng lượng nạp vào cơ thể, tốc độ tăng cân tương ứng của thai nhi mà ở mức 0,4 kg/ tuần trong 4 tháng giữa và ở 3 tháng cuối thai kỳ, đối với phụ nữ có cân nặng bình thường trước khi mang thai tăng 0,5kg/tuần đối với phụ nữ có cân nặng thấp và 0,3kg/tuần đối với phụ nữ thừa cân. Các chất dinh dưỡng chính cần được bổ sung hợp lý qua các bữa ăn như chất đạm giúp xây dựng bào thai, nhau thai, mô cơ thể mẹ, hay chất béo để xây dựng màng tế bào, hệ thống thần kinh cho thai nhi, cung cấp năng lượng và giúp hấp thụ các vitamin trong dầu cho mẹ. Để bổ sung chất đạm, mẹ bầu nên ăn các thực phẩm giàu chất đạm như thịt cá, trứng, sữa, các loại đậu. Đối với chất béo, mẹ bầu nên bổ sung cả chất béo no và không no, nhưng với chất béo no không nên dùng quá 10% năng lượng khẩu phần ăn hàng ngày, tăng sử dụng dầu thực vật thay vì dầu động vật.
                </p>

                <div
                  className="md:h-96 h-40 w-full mt-5 mr-4 mb-20  float-left"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/chatdinhduong.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <h1 className="font-bold hover:text-yellow-400">
              Tầm quan trọng của sắt trong thai kì, lượng sắt cần thiết mỗi ngày
              </h1>
              <div className="md:pl-20 text-justify opacity-90">
                <p>
                Sắt là yếu tố cần thiết để tạo nên hemoglobin, chất tạo nên màu đỏ của hồng cầu, có nhiệm vụ chuyên chở oxy tới các cơ quan và tế bào trong cơ thể. Phụ nữ mang thai cần thêm một lượng sắt gấp khoảng 2 lần so với phụ nữ khác. Lượng sắt này giúp cơ thể sản sinh thêm máu để cung cấp oxy tới thai nhi. Các bà bầu được khuyên nên uống viên sắt hàng ngày, liều 27 mg. Ngoài ra, nên ăn những thực phẩm giàu chất sắt như thịt nạc đỏ, thịt gà, vịt, cá, đậu đỗ phơi khô, ngũ cốc được tăng cường sắt, nước quả mận. Để hấp thụ chất sắt dễ dàng hơn, hãy kết hợp với các thực phẩm giàu vitamin C như cam, quýt, cà chua.
                </p>

                <div
                  className="md:h-96 h-40 w-full mt-5 mr-4 mb-20  float-left"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/sat.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <h1 className="font-bold hover:text-yellow-400">
              Một số chất dinh dưỡng cho bà bầu quan trọng nhất
              </h1>
              <h1 className="my-5 opacity-60 font-bold text-lg">Axit folic</h1>
              <div className="md:pl-20 text-justify opacity-90">
                <p>
                Axit folic hay vitamin B9 là một trong những vitamin cần thiết nhất của mẹ bầu. Thiếu hụt axit folic sẽ dẫn đến những vấn đề sức khỏe nghiêm trọng ở mẹ và bé. Phụ nữ mang thai thiếu axit folic dễ bị thiếu máu, cơ thể suy nhược dẫn đến sinh non, thiếu tháng. Thai nhi không được cung cấp axit folic dễ gặp những dị tật về ống thần kinh, ảnh hưởng đến xương sống và não. Trẻ sinh ra bị nhẹ cân, sinh thiếu tháng, thiếu máu trong cơ thể. (2, 3) Chính vì thế, mẹ bầu cần bổ sung axit folic ít nhất là 3 tháng trước thai kỳ và trong suốt thai kỳ. Phụ nữ mang thai cần khoảng 400 đến 800mcg axit folic mỗi ngày để nuôi dưỡng cơ thể mẹ và bé (4). Vitamin B9 tồn tại dưới dạng folate có trong các loại rau lá màu xanh, bơ, cam, quýt, bưởi,… Ngoài ra mẹ bầu có thể uống bổ sung thêm viên uống axit folic.
                </p>

                <div
                  className="md:h-96 h-40 w-full mt-5 mr-4 mb-20  float-left"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/axitfolic.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>

            </div>
              <h1 className="my-5 opacity-60 font-bold text-lg">Vitamin D</h1>
              <div className="md:pl-20 text-justify opacity-90">
                <p>
                Nhiều nghiên cứu từ các chuyên gia y tế cho rằng việc thiếu hụt vitamin D dẫn đến nguy cơ tiền sản giật ở thai phụ. Vitamin D là vi chất dinh dưỡng cần thiết cho sự hấp thụ và chuyển hóa canxi, photpho. Thai nhi bị thiếu đi vi chất này có thể bị bệnh còi xương bẩm sinh, xương thủy tinh, loãng xương. Trong giai đoạn mang thai, cơ thể nặng nề gây tác động lên hệ xương khớp. Vì thế vitamin D rất quan trọng cho cơ thể mẹ bầu. Mỗi ngày, mẹ bầu cần bổ sung 800UI lượng vitamin D cho cơ thể hoặc cao hơn (7, 8). Bà bầu cũng có thể tăng vitamin D tự nhiên bằng cách tắm nắng sớm, ăn thực phẩm nhiều chất dinh dưỡng này.
                </p>

                <div
                  className="md:h-96 h-40 w-full mt-5 mr-4 mb-20  float-left"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/vitamind.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>

              <h1 className="my-5 opacity-60 font-bold text-lg">Canxi</h1>
              <div className="md:pl-20 text-justify opacity-90">
                <p>
                Canxi, vitamin D là bộ đôi vitamin và khoáng chất cho bà bầu quan trọng. Canxi là yếu tố quyết định tạo nên khung xương vững chắc cho trẻ. Nếu không được cung cấp đủ lượng canxi, cơ thể sẽ lấy chúng từ xương người mẹ để nuôi dưỡng thai nhi. Việc này khiến cho mẹ bầu thường hay bị nhức xương, đi lại khó khăn,… Trẻ sơ sinh bị thiếu canxi thường bị còi xương và gặp những bệnh lý về xương khớp.Lượng canxi đề xuất cho bà bầu là 800 đến 1000mg mỗi ngày trong suốt hành trình mang thai. Đặc biệt, bạn cần bổ sung nhiều hơn, khoảng 1500mg canxi vào 3 tháng cuối thai kỳ và trong khi đang cho con bú. Canxi tự nhiên có nhiều trong các loại hải sản, sữa, trứng,…
                </p>

                <div
                  className="md:h-96 h-40 w-full mt-5 mr-4 mb-20  float-left"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/canxi.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>

              <h1 className="my-5 opacity-60 font-bold text-lg">Omega 3</h1>
              <div className="md:pl-20 text-justify opacity-90">
                <p>
                Omega 3 là vi chất dinh dưỡng được biết đến là cần thiết cho sự phát triển trí não, võng mạc mắt. Thông thường, một số mẹ bầu đã bỏ quên đến chất dinh dưỡng cần thiết này. Mẹ bầu nên bổ sung từ 1,3 đến 1,4g omega 3 trong quá trình mang thai. Thai phụ có thể bổ sung omega 3 qua các loại cá. Tuy nhiên, phụ nữ mang thai cần tránh các loại các lớn, thay vào đó nên lựa chọn những loại cá da trơn, cá hồi, tôm,… Bởi những loại cá này thường có hàm lượng thủy ngân thấp. Thực phẩm chứa hàm lượng thủy ngân cao có thể dẫn đến một số biến chứng bất thường khi sinh. Ngoài ra, omega 3 còn có trong hạt chia, đậu edamame, rong biển, quả óc chó.
                </p>

                <div
                  className="md:h-96 h-40 w-full mt-5 mr-4 mb-20  float-left"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/omega3.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>

              <h1 className="my-5 opacity-60 font-bold text-lg">I-ốt</h1>
              <div className="md:pl-20 text-justify opacity-90">
                <p>
                Từ lâu, Iốt được biết đến là vi chất dinh dưỡng cần thiết với mọi lứa tuổi. Vi chất này có trong rong biển, cá, các loại sò,… Bà bầu cần sử dụng các loại muối có hàm lượng Iốt cao. Lượng Iốt cần thiết cho cơ thể mẹ bầu là từ 175 đến 220mg.Thiếu hụt Iốt tiềm ẩn những nguy cơ nghiêm trọng như sảy thai, thai lưu, sinh non. Iốt đặc biệt cần thiết cho sự phát triển của trẻ. Nếu thiếu Iốt nghiêm trọng, trẻ dễ bị đần độn, tổn thương não, liệt tay chân, nhẹ hơn là nói ngọng, câm hoặc điếc.
                </p>

                <div
                  className="md:h-96 h-40 w-full mt-5 mr-4 mb-20  float-left"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/iot.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>

              <h1 className="my-5 opacity-60 font-bold text-lg">Vitamin A</h1>
              <div className="md:pl-20 text-justify opacity-90">
                <p>
                Vitamin A có vai trò quan trọng đối với khỏe bà mẹ và thai nhi. Vitamin A giữ vai trò quan trọng đối với sự phát triển và hoàn thiện các cơ quan như tim, gan, phổi, thận, mắt, xương và hệ thần kinh trung ương của thai nhi. Bổ sung vitamin A đúng cách còn giúp hạn chế nguy cơ đẻ non, sinh con nhẹ cân. Đối với sức khỏe mẹ bầu, vitamin A còn tốt cho sự phục hồi của cơ thể mẹ sau sinh. Tuy nhiên, việc phụ nữ mang thai uống bổ sung vitamin A cần phải được các bác sĩ hướng dẫn. Bởi nếu lạm dụng hoặc bổ sung quá nhiều vitamin A có thể gây ra một số dị dạng ở thai nhi. Bà bầu chỉ nên bổ sung tầm 750mcg vitamin A mỗi ngày. Mẹ có thể bổ sung nguồn vitamin A tự nhiên từ rau xanh, các loại củ màu đỏ vàng như bí đỏ, cà rốt, quả gấc,… Nếu chế độ ăn khoa học và nhiều chất dinh dưỡng, thai phụ sẽ không cần phải bổ sung thêm vitamin A từ các loại thuốc.
                </p>

                <div
                  className="md:h-96 h-40 w-full mt-5 mr-4 mb-20  float-left"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/vitamina.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
        </div>
      </div>
      <div className="md:col-span-2 col-span-5 grid grid-cols-5 p-5">
        <div className="w-10 h-10 text-3xl opacity-50 col-span-1">
                  <MessageOutlined/>
        </div>
        <div className="col-span-4">
          <h1 className="font-bold">Sức khỏe mẹ và bé</h1>
          <p className="text-sm">Khi mang thai, mẹ sẽ được các bác sĩ tư vấn về tình trạng sức khỏe để xác định mức cân năng cần tăng trong từng giai đoạn thai kì. Dựa vào đó, mẹ sẽ theo dõi quá trình tăng cân ở mỗi thời điểm để điều chỉnh chế độ dinh dưỡng phù hợp</p>
        </div>
      </div>

      </div>
      </div>

      <div className="md:px-40 px-5 mt-10 pb-40">
        <h1 className="text-red-400 text-xl font-bold border-b-4 w-fit pr-5 border-red-400">
         VỀ SỨC KHỎE CỦA BÉ
        </h1>
        <hr></hr>
        <div className="grid grid-cols-5 gap-10">
          <div className="md:col-span-3 col-span-5">
            <div
              className="md:h-100 h-96 w-full mt-5 mr-4 mb-20  float-left"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/skbe.png"
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div>
            <h1 className="font-bold hover:text-yellow-400">
            Lý do vì sao các loại rau củ là lựa chọn tốt cho bé ăn dặm?
            </h1>
            <div className="pl-20">
                <h1 className="my-5 font-bold opacity-50">1. Cung cấp vitamin, khoáng chất và chất chống oxy hóa</h1>
                <p>
                Trẻ em cần vitamin, khoáng chất và chất chống oxy hóa để có trí não khỏe mạnh. Các loại rau củ tốt cho bé ăn dặm vì chứa những dưỡng chất nói trên. <br/>
                - Vitamin (đặc biệt là Vitamin A) giúp cơ thể hấp thụ các khoáng chất và chất dinh dưỡng.<br/>
                - Khoáng chất giúp cải thiện mật độ xương.<br/>
                - Chất chống oxy hóa sẽ bảo vệ các tế bào và não khỏi thương tổn bởi các gốc tự do.
                </p>
                <h1 className="my-5 font-bold opacity-50">2. Cải thiện chức năng nhận thức ở trẻ</h1>
                <p>
                Các loại rau củ tốt cho bé ăn dặm, đặc biệt là bông cải xanh, các loại rau có màu đỏ, tím giúp cải thiện chức năng nhận thức, học hỏi và suy nghĩ ở trẻ. Bông cải xanh chứa nhiều chất chống oxy hóa và vitamin K, một trong những loại vitamin hòa tan trong chất béo. Vitamin K góp phần vào sự hình thành sphingolipid, một loại chất béo được tìm thấy trong các tế bào não. Nghiên cứu chỉ ra rằng Vitamin K còn giúp tăng cường trí nhớ.
                </p>
                <h1 className="my-5 font-bold opacity-50">3. Bảo vệ trẻ trước bệnh tật, ung thư
                </h1>
                <p>
                Chất phytochemical là thứ mang lại cho rau củ màu sắc tuyệt đẹp. Hoạt chất này tồn tại trong các loài thực vật nhằm chống lại mầm bệnh và các loại côn trùng gây hại. Tuy nhiên, các nhà khoa học đã nghiên cứu và phát hiện phytochemical mang lại nhiều lợi ích cho sức khỏe con người. Nó bảo vệ chúng ta khỏi các tác nhân gây bệnh cũng như ngừa ung thư.
                </p>
                <h1 className="my-5 font-bold opacity-50">4. Các loại rau củ quả tốt cho bé ăn dặm vì chứa ít calo
                </h1>
                <p>
                Các loại rau củ tốt cho bé ăn dặm vì là thực phẩm tốt cho sự hình thành não bộ nhưng lại chứa ít calo. Do đó, cho con ăn nhiều rau củ vừa tốt mà lại không lo trẻ tăng cân, tăng cholesterol hoặc lượng đường trong máu.
                </p>
                <h1 className="my-5 font-bold opacity-50">5. Chứa nhiều chất xơ

                </h1>
                <p>
                Các loại rau củ tốt cho bé ăn dặm vì chứa nhiều chất xơ, giúp trẻ đi ngoài đều đặn, rất cần thiết để loại bỏ các chất độc dư thừa ra khỏi cơ thể. Chế độ ăn nhiều chất xơ còn liên quan đến việc duy trì năng lượng. Mẹ thêm rau vào thực đơn của trẻ sẽ giúp con luôn tràn đầy năng lượng, thúc đẩy các hoạt động thể chất và não bộ của trẻ. Chế độ ăn nhiều chất xơ còn bảo vệ cơ thể chống lại bệnh tiểu đường tuýp 2. Đây là bệnh đang gia tăng ở trẻ em. Các nhà nghiên cứu đã phát hiện thức ăn nhanh, chế độ ăn uống nhiều đường chính là thủ phạm gây ra bệnh tiểu đường ở trẻ.
                </p>
                 <h1 className="my-5 font-bold opacity-50">6. Các loại rau củ quả chứa các enzym tốt cho hệ tiêu hóa của bé ăn dặm
                </h1>
                <p>
                Rau củ quả tươi chứa các enzym giúp tiêu hóa, hấp thụ các vitamin, khoáng chất, chất dinh dưỡng có trong thực phẩm. Nấu thức ăn trên 118 độ C sẽ tiêu hủy các enzym tự nhiên có trong rau củ quả. Để tận dụng nguồn enzym này cho bé, thi thoảng mẹ có thể cho con uống thêm nước ép rau củ, ăn trái cây tươi.
                </p>
            </div>
            <h1 className="font-bold hover:text-yellow-400 mt-10 mb-5">
          Cho bé sơ sinh bú mới chào đời
            </h1>
            <div className="ml-20">
                <p>
                Khi bé mới sinh ra, cơ thể cũng như dạ dày của trẻ còn rất nhỏ nên chỉ có thể chứa được 30 - 90ml sữa mỗi lần bú. Trong 24h khi bé mới chào đời, bạn nên cho bé bú cách khoảng 2 - 3 tiếng một lần, sẽ có thay đổi tùy thuộc vào thể trạng của trẻ. Bạn cũng cần lưu ý dấu hiệu khi bé đói như khóc to, mút tay, chép môi, quay đầu để tìm ti mẹ,... Không nên cho bé vừa nằm vừa bú sẽ khiến bé dễ bị sặc, nôn trớ sữa. Sau khi bú, bé cần được ợ hơi để bụng được dễ chịu. Bạn có thể để bé tựa trên vai mình, đỡ mông bé và vỗ nhẹ lưng. Các mẹ cũng không cần lo lắng khi bé bị nấc trong 24h đầu mới sinh, bởi đây là hiện tượng bình thường. Tuyệt đối không nên cho bé vừa nằm vừa bú vì rất dễ bị sặc, hãy để bé thẳng đứng và dựa vào người bạn
                </p>
            </div>

            <h1 className="font-bold hover:text-yellow-400  mt-10 mb-5">
            Cách đội mũ, quấn tã, đeo bao tay, chân cho trẻ sơ sinh
            </h1>
            <div className="ml-20">
                <p>
                Khi chào đời, em bé thoát khỏi sự bao bọc của cơ thể mẹ và tập thích nghi với môi trường bên ngoài. Vì vậy, mẹ cần phải giữ ấm cho cơ thể bé. Cách chăm sóc trẻ sơ sinh đúng đắn là mẹ nên chú ý đến việc đội mũ và quấn tã cho bé. <br/>
                - Đội mũ che thóp là cực kỳ cần thiết. Tuy nhiên bạn cũng đừng lạm dụng việc đội mũ liên tục. Chỉ khi ra ngoài lạnh mới cần che thóp. Khi bé ở trong nhà hoặc nơi kín gió, hãy để đầu bé được thoáng mát. Do cơ thể bé cũng tự có khả năng điều hòa thích nghi nên nếu cứ đội mũ kín mít, bé sẽ bị ngứa ngáy khó chịu, ra nhiều mồ hôi. Điều này sẽ dẫn đến sốt cao nguy hiểm đến sức khỏe của bé.<br/>
                - Cách chăm sóc trẻ sơ sinh sai lầm mà bố mẹ hay gặp phải là quấn tã quá ấm hay quá chặt. Nhiều người cho rằng quấn chặt tã khiến bé ít bị giật mình, dễ ngủ và ngủ sâu hơn. Tuy nhiên, các nghiên cứu khoa học chỉ ra rằng, hành động này dễ làm ép khớp háng của bé. Khi đó, chân của bé sẽ bị lệch trục, ảnh hưởng trực tiếp đến sức khỏe và thẩm mỹ. Không chỉ vậy, quấn chặt tã còn là nguyên nhân khiến bé bị ngạt thở, bí bách và nóng.<br/>
                - Bố mẹ cần lưu ý trong giai đoạn này da bé cực kỳ nhạy cảm. Khi mua mũ nón, quấn tã cho bé nên chọn chất liệu vải mềm mại, nhẹ nhàng trên da bé. Mẹ nên sử dụng nước xả vải dành cho trẻ sơ sinh sau mỗi lần giặt để giúp sợi vải mềm mại, thông thoáng hơn.<br/>
                Da trẻ mỏng manh vì vậy rất cần sự bảo vệ nên việc mang bao tay, bao chân và đội mũ có chất liệu mềm và thoáng cho trẻ là điều cần thiết<br/>
                </p>
            </div>
            </div>
      </div>
      <div className="md:col-span-2 col-span-5 grid grid-cols-5 p-5">
        <div className="w-10 h-10 text-3xl opacity-50 col-span-1 ">
                  <MessageOutlined/>
        </div>
        <div className="col-span-4">
          <h1 className="font-bold">Theo dỗi sức khỏe của bé</h1>
          <p className="text-sm">Sự phát triển của bé trong giai đoạn từ sơ sinh đến 5 tuổi đặc biệt quan trọng. Trong đó, việc theo dỗi sự tăng trưởng về chiều cao cần nặng ở mỗi giai đoạn của bé rất cần thiết.</p>
        </div>
      </div>

      </div>
      </div>
      <Footer />
    </div>
  );
}
