import React from 'react'
import Footer from './Footer'
import MenuHeader from './MenuHeader'

export default function Camnang() {
  return (
    <div>
         <div className="w-full overflow-hidden">
        <MenuHeader />
        </div>
            
        <div className="md:px-40 px-5 mt-10 pb-20">
            <h1 className='text-xl font-bold border-b-4 mb-2 w-fit pr-10 border-red-500'>VÌ SAO CẦN CHÚ Ý CHĂM SÓC DINH DƯỠNG CHO MẸ SAU SINH?</h1>
            <p>
            Nuôi con hoàn toàn bằng sữa mẹ trong 6 tháng đầu có vai trò vô cùng quan trọng đối với sự phát triển của trẻ. Theo Tổ chức Y tế thế giới, nên cho trẻ bú sớm trong vòng 1 giờ sau sinh và nuôi trẻ hoàn toàn bằng sữa mẹ trong 6 tháng đầu, sau đó cho trẻ ăn bổ sung từ khi được tròn 6 tháng, kết hợp với bú sữa mẹ tới khi trẻ được 24 tháng tuổi. Trong giai đoạn sau sinh - nuôi con bú, chế độ dinh dưỡng của người mẹ có ảnh hưởng lớn tới sức khỏe của trẻ. Cụ thể, chế độ dinh dưỡng tốt giúp bà mẹ có đủ sữa nuôi con. Vì vậy, bà mẹ sau sinh cần có một chế độ dinh dưỡng hợp lý, kết hợp với vận động, nghỉ ngơi khoa học và có tâm lý thoải mái.
            </p>
            <div className='w-full flex my-5 justify-center'>
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
            <p>
            Đặc biệt, nhiều nghiên cứu đã khẳng định dinh dưỡng của người mẹ có ảnh hưởng nhất định tới lượng sữa và thành phần vi chất có trong sữa mẹ. Cụ thể, nếu chế độ ăn uống của người mẹ thiếu vitamin, đặc biệt là vitamin A, D và B1 thì sữa mẹ cũng sẽ thiếu các vitamin này. Bên cạnh đó, trong 6 tháng đầu đời, lượng kháng thể của trẻ được cung cấp trực tiếp qua sữa mẹ. Vì vậy, việc đảm bảo cung cấp đủ năng lượng và chất dinh dưỡng cần thiết cho người mẹ sẽ giúp phòng ngừa bệnh tật tốt nhất cho bé. Những trẻ được nuôi dưỡng hoàn toàn bằng sữa mẹ trong 6 tháng đầu sẽ phát triển toàn diện về trí tuệ và thể chất, có sức đề kháng tốt, ít mắc các bệnh nhiễm trùng và khi lớn lên ít mắc các bệnh mạn tính không lây.
            </p>

            <h1 className='text-xl font-bold mt-10 mb-5 border-b-4 w-fit pr-10 border-red-500'>TƯ THẾ NGỦ NÀO TỐT NHẤT CHO CẢ MẸ VÀ THAI NHI?</h1>
            <h1 className='font-bold text-red-500 opacity-50'>NHỮNG TƯ THẾ NGỦ TỐT CHO BÀ BẦU</h1>
            <br/>

            <p>
            Khi thai lớn, xu hướng thai nhi sẽ xoay và chọn vị trí thuận nhất trong tử cung để nằm. Tư thế thông thường nhất của thai là đầu ở trên xương vệ và mông thai nhi ở đáy tử cung bên phải.
              <br/>
              <br/>
            Vậy bà bầu nên nằm nghiêng bên nào? Mẹ bầu nên nằm nghiêng về bên trái vì những lý do sau:
              <br/>
            <br/>

            <div className='md:pl-10 px-2 text-justify italic'>
            1. Khi nằm nghiêng trái, trọng lượng thai nhi sẽ đổ về một bên thay vì đổ về phía sau trong tư thế nằm ngửa, khiến tĩnh mạch chủ dưới bị chèn ép, cản trở máu chảy về tim, dẫn đến lưu thống máu và oxy đến thai nhi hạn chế. Ở tư thế nghiêng trái, bạn có thể làm giảm trọng lượng của tử cung bằng cách đặt một cái gối mềm dài, có độ đàn hồi tốt bên trái ngay dưới bụng để đỡ bụng và một gối ôm gác chân
            <br/>
            <br/>

            2. Tử cung không đè hoặc đẩy các tạng hệ tiêu hoá như dạ dày, ruột, khiến cho việc tiêu hoá thức ăn được dễ dàng hơn, ngăn ngừa tình trạng ứ đọng đồ ăn trong dạ dày, gây ợ chua hay trào ngược dạ dày do sự tiết ra quá mức của các acid dịch vị.
            <br/>
            <br/>

            3. Nếu nằm lâu ở một tư thế nghiêng trái, mẹ có thể bị mỏi, tư thế thay thế là quay sang phải nhưng đừng nên nằm ngửa.
            </div>

            </p>
            <div className='w-full my-5 flex justify-center'>
            <div
              className="md:h-96 h-64 md:w-1/2 w-full"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/camnang2.jpg"
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            </div>

            <h1 className='font-bold text-red-500  opacity-50'>NHỮNG TƯ THẾ NGỦ TỐT CHO BÀ BẦU</h1>



              <p className='md:pl-10 px-2 text-justify italic'>

              <b>1. Nằm ngửa:</b> Ở tư thế này, tử cung sẽ đè vào tĩnh mạch chủ dưới, gây ứ trệ tuần hoàn, cản trở máu về tim, từ đó hạn chế lượng máu từ tim bơm ra và hậu quả là huyết áp tụt giảm. Các triệu chứng hay gặp là chóng mặt, mệt, tim đập nhanh hồi hộp, khó thở, mặt nhợt nhạt, đổ mồ hôi lạnh. Nằm ngửa cũng khiến bầu to đẩy dạ dày, cơ hoành lên cao, khiến sản phụ khó thở.

              <br/>
              <br/>

              <b>2. Nằm sấp:</b> Tư thế nằm sấp sẽ khiến trọng lượng mẹ đè lên tử cung và thai, gây áp lực lên ổ bụng, tử cung, tuần hoàn nhau- thai, ảnh hưởng đến tưới máu thai
              </p>

              <h1 className='text-xl font-bold border-b-4 mb-2 mt-10 w-fit pr-10 border-red-500'>MẸO GIÚP MẸ BẦU NGỦ NGON</h1>
              Do trong thai kỳ, có những thay đổi nội tiết + thai lớn, khiến sản phụ luôn cảm giác nặng nề, mệt mỏi, ăn uống ì ạch khó tiêu nên dẫn đến tình trạng mẹ bầu hay mất ngủ, buồn bực. Để xử trí những triệu chứng khó chịu này khi mang thai và có một giấc ngủ ngon, mẹ bầu có thể thử các mẹo sau:
              <div className='md:pl-10 px-2 text-justify italic'>
              <br/>
              <div>
              1. Đừng lo lắng thái quá về tình trạng mất ngủ vì càng stress, tình trạng mất ngủ càng nặng nề hơn
              <br/>
              <br/>
              2. Không tự ý mua thuốc ngủ hay các thuốc đông tây y không rõ nguồn gốc
              <br/>
              <br/>
              3. Giải toả căng thẳng, khúc mắc trong ngày với chồng hay gia đình về công việc, các nút thắt trong các mối quan hệ, chia sẻ những khó chịu về thai nghén…
              <br/>
              <br/>
              4. Ăn ngủ đúng giờ. Nên ăn tối trước 19 giờ hay trước khi đi ngủ tối thiểu 3 giờ. Không ăn đêm quá trễ quá vì sẽ làm hệ tiêu hoá ì ạch, đồ ăn ứ đọng, không tiêu hoá được. Có thể uống uống sữa trước khi ngủ 30-60 phút để tranh đói về đêm.
              <br/>
              <br/>
              5. Vận động nhe nhàng trong ngày. Các bài tập yoga dành cho bà bầu, đi bộ 30 phút nhẹ nhàng hít thở không khí trong lành buổi tối, bơi lội…đều khiến cơ thể linh hoạt, dẻo dai, tăng tuần hoàn lên não và các cơ quan khác, tăng cường hệ thống miễn dịch. Ngồi tĩnh lặng và hít thở sâu còn giúp duy trì tâm lý bình tĩnh, trạng thái tinh thần ổn định, giảm tâm lý tiêu cực ảnh hưởng đến cơ thể, nhất là khi bạn đang đối mặt với áp lực và căng thẳng trong cuộc sống, công việc.
              <br/>
              <br/>
              6. Tắm nước ấm và rửa mặt bằng sữa rửa mặt giúp làm sạch các lỗ chân lông, khiến cơ thể sạch sẽ, dễ chịu. Massage chân, massage toàn thân giúp giảm triệu chứng mệt mỏi.
              <br/>
              <br/>
              7. Đọc sách giấy giúp giảm căng thắng, thư giãn, tăng niềm vui và đam mê. Bạn cũng có thể dành 10- 20 phút trước ngủ để thai giáo, trò chuyện cùng thai nhi giúp kết nối mẹ con thêm sâu sắc. Nên tránh xa các bộ phim bạo lực và tránh sa đà vào các phim bộ dài tập, dẫn đến quên cả thời gian, bỏ lỡ thời khắc buồn ngủ. Tránh xa màn hình tivi và máy tính vì ánh sáng xanh phát ra từ màn hình TV và máy tính gia tăng áp lực lên não.
              <br/>
              <br/>
              8. Trước ngủ nên đi tiểu để bàng quang trống. Tránh uống quá nhiều nước trước ngủ vì dễ gây thức giấc ban đêm. Nên tránh thói quen đi tiểu về đêm vì như vậy sẽ tập cho bàng quang (bọng đái) một thói quen hư và ngưỡng chịu đựng áp lực của bàng quang sẽ kém, dễ bị kích thích mắc tiểu ngay cả khi nước tiểu chưa nhiều, lúc nào cũng có cảm giác còn sót nước tiểu.
              <br/>
              <br/>
              9. Nằm ngủ tại giường và thưởng thức sự thư thái, không ngủ gục trên bàn hay bất kỳ nơi nào tạm bợ. Không gian phòng ngủ phải yên tĩnh, sạch sẽ, thoáng mát, ánh sáng dịu nhẹ, nhiệt độ mát vừa phải 26-28 độ, tránh nhiệt độ quá lạnh về đêm khiến sản phụ bị cảm và nên có một tấm chăn coton mỏng che chắn hờ. Quần áo nên rông rãi thoải mái, mềm, thấm hút mồ hôi. Chăn mùng mền sạch sẽ, thoáng mát, gọn gàng. Các loại gối đỡ lưng hay đỡ bụng cũng giúp giảm trọng lượng của bầu và giảm đau lưng.
              <br/>
              <br/>
              10. Có thể bật một số nhạc nhẹ để ngủ ngon như nhạc sóng não Delta…Tưởng tượng và chìm vào giấc ngủ sâu, dẫn dắt vào thế giới giấc ngủ trong đó có những giấc mơ rất hạnh phúc của bạn và con.

              </div>
              </div>


              <h1 className='text-xl font-bold border-b-4 mb-2 mt-10 w-fit pr-10 border-red-500'>KHI NÀO MẸ NÊN BẮT ĐẦU CHO TRẺ TẬP ĂN DẶM?</h1>
              <p>
              Theo khuyến cáo của Tổ chức Y tế Thế giới (WHO), mẹ nên bắt đầu cho trẻ tập ăn dặm khi trẻ được tròn 6 tháng tuổi, vì lúc này hệ tiêu hóa của trẻ mới phát triển tương đối hoàn chỉnh để có thể hấp thu những thực phẩm đặc và phức tạp hơn sữa mẹ. Đồng thời, trẻ phải đạt được những mốc phát triển sau đây: trẻ đã cứng cổ; ngồi vững; trẻ nhanh đói hơn; tỏ ra thích thú với đồ ăn; khi đưa thìa vào miệng trẻ, trẻ ít dùng lưỡi đẩy ra.
              </p>
              <div className='w-full my-5 flex justify-center'>
            <div
              className="md:h-96 h-64 md:w-1/2 w-full"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/andam.png"
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            
            </div>

            <div>

            <h1 className='text-xl font-bold border-b-4 mb-2 mt-10 w-fit pr-10 border-red-500'>NHỮNG ĐIỀU MẸ BẦU CẦN LƯU Ý 3 THÁNG CUỐI THAI KỲ</h1>
            <h1 className='font-bold text-red-500  opacity-50'>NHỮNG TƯ THẾ NGỦ TỐT CHO BÀ BẦU</h1>

              <p>
              Sự phát triển của thai nhi trong 3 tháng cuối diễn ra một cách rất mạnh mẽ. Đây là giai đoạn thai nhi có sự bứt phá về cân nặng và chiều cao. Từ một bào thai nhỏ nhắn, chỉ khoảng 1kg ở cuối tam cá nguyệt thứ 2, em bé trong bụng mẹ ở tam cá nguyệt thứ 3 có thể tăng thêm từ 0,25 - 0,5kg mỗi tuần. Đến cuối thai kỳ, trọng lượng trung bình của thai nhi có thể lên đến 3-3,5kg, thậm chí nhiều trường hợp bé có thể nặng đến 4-5kg khi chào đời.

              </p>
              <div className='w-full my-5 flex justify-center'>
            <div
              className="md:h-96 h-64 md:w-1/2 w-full"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/camnang4.jpg"
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            

            </div>
            <p>
            Không chỉ cân nặng, 3 tháng cuối thai kỳ cũng là giai đoạn em bé trong bụng mẹ phát triển hoàn thiện các cơ quan trong cơ thể, đặc biệt là hệ thần kinh và phổi. Hệ tiêu hóa của bé trong giai đoạn này cũng bắt đầu tích tụ các chất màu xanh, kết quả của các chất bài tiết từ gan, ruột và tế bào chết, và sẽ được bài tiết ra ngoài khi bé chào đời. Chất này thường được gọi là phân su. Mẹ đừng quá bất ngờ khi thấy “sản phẩm” của con có màu lạ nhé!

            </p>

            <h1 className='font-bold text-red-500 mt-10 opacity-50'>NHỮNG XÉT NGHIỆM QUAN TRỌNG</h1>

            <p>
            Ngoài sự phát triển của thai nhi, những điều cần biết khi mang thai 3 tháng cuối cũng không thể thiếu tầm quan trọng của các buổi khám thai. Các buổi khám thai trong 3 tháng cuối nhằm đảm bảo sự phát triển của thai nhi và sức khỏe bà bầu không có gì khác thường. Ngoài những thủ tục thăm khám thông thường như đo huyết áp, xét nghiệm máu, xét nghiệm nước tiểu, mẹ bầu cũng được siêu âm để kiểm tra xem có bất thường về nhau thai, nước ối, hay vị trí của thai nhi…
            </p>

            <div className='w-full my-5 flex justify-center'>
            <div
              className="md:h-96 h-64 md:w-1/2 w-full"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/camnang3.jpg"
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            </div>

            <p>
            Nếu có điều gì “không đúng”, bác sĩ có thể tư vấn bầu chọn cách ứng phó an toàn và phù hợp. Chẳng hạn nếu ngôi thai nghịch, bác sĩ có thể đề nghị mẹ nên sinh mổ, hoặc tiến hành đưa thai nhi ra ngoài sớm hơn trong trường hợp nhau thai quấn cổ làm bé cưng không thở được…
            </p>


            <h1 className='font-bold text-red-500 mt-10 opacity-50'>BỔ SUNG DINH DƯỠNG CHO BÀ BẦU TRONG 3 THÁNG CUỐI:</h1>
            <p>
            Để đáp ứng cho sự phát triển “thần tốc” của bé cưng trong bụng, ngoài những nhóm chất cơ bản như chất xơ, tinh bột, mẹ bầu nên đặc biệt tăng cường các nhóm thực phẩm giàu đạm, can-xi, sắt và chất béo. Chất béo rất quan trọng, bởi đây là giai đoạn thai nhi phát triển não bộ mạnh mẽ và cần rất nhiều chất béo để hoàn tất quá trình phát triển này. Không chỉ cần cho sự phát triển của thai nhi, dinh dưỡng cho bà bầu 3 tháng cuối cũng là tiền đề giúp mẹ bầu vượt cạn dễ dàng hơn. Mẹ bầu nên tăng cường vitamin C giúp hỗ trợ quá trình làm lành vết thương. Đồng thời, vitamin C cũng có tác dụng tăng cường khả năng hấp thu sắt của cơ thể, ngăn ngừa nguy cơ thiếu máu do thiếu sắt – vấn đề các mẹ bầu 3 tháng cuối thường gặp.
            </p>

        </div>
              <div>
              <h1 className='text-xl font-bold border-b-4 mb-2 mt-10 w-fit pr-10 border-red-500'>HƯỚNG DẪN CÁCH CHĂM SÓC MẸ VÀ EM BÉ SAU KHI SINH CON</h1>
              <h1 className='font-bold text-red-500  opacity-50'>CHĂM SÓC MẸ</h1>
              <p className='italic text-justify'>
              1. Theo dõi sản dịch.
              <br/>
              - Bình thường sản dịch có màu đỏ như kinh nguyệt, mùi tanh nồng, kéo dài khoảng 7 ngày, sau đó ít dần, chuyển sang màu hồng nhạt, sau khoảng 4 tuần thì hết hẳn.
              - Sau 4 tuần thì có thể có kinh nguyệt trở lại, máu ra như kinh nguyệt thường kỳ. Chú ý dùng biện pháp tránh thai vì rất dễ có thai sớm sau sinh.
              <br/>
              <br/>

              2. Vết khâu tầng sinh môn và vết mổ:
              - Không kiêng tắm và gội đầu.
              - Vết khâu sẽ liền sẹo sau khoảng 7 ngày: rửa, vệ sinh bằng Betadine. Nếu đau: uống giảm đau Efferalgan 500mg x 2 viên. Sau 6 giờ có thể uống nhắc lại 1 lần nếu cần. Ngày uống không quá 4 lần.
              <br/>
              <br/>

              3. Ăn uống và nghỉ ngơi.
              - Ăn đa dạng các loại thực phẩm hàng ngày.
              - Ăn chín uống sôi, ăn đầy đủ các chất, ăn nhiều rau xanh và hoa quả.
              - Uống 3 lít nước/ ngày để đảm bảo đủ sữa và tránh táo bón.
              - Cho trẻ bú sữa mẹ hoàn toàn trong 6 tháng đầu và bú đến 24 tháng tuổi hoặc lâu hơn.
              - Uống viên sắt và các loại vitamin cần thiết theo chỉ định của bác sĩ.
              - Vận động nhẹ nhàng, không cần bất động, không gen bụng sớm trước 1 tháng.
              - Đảm bảo thời gian ngủ 7 – 8 tiếng một ngày.
              <br/>
              <br/>

              4. Cần tái khám bác sĩ khi:
              - Sản dịch ra quá ít, đau bụng nhiều, sản dịch có mùi hôi.
              - Nếu sau 7 ngày đã hết sản dịch rồi đột ngột ra máu nhiều đỏ tươi.
              - Sốt >38 độ C, rét run, đái buốt.
              - Vết khâu tầng sinh môn hoặc vết mổ sưng tấy, chảy dịch, đau nhiều.
              - Vú căng đau tức.
              <br/>
              <br/>

              5. Thủ tục lấy giấy chứng sinh.
              - Sản phụ mổ đẻ sau khi thanh toán ra viện.
              - Sản phụ đẻ thường khi đi khám 4 ngày sau sinh cho con.
              - Khi đến lấy giấy chứng sinh cần phải mang theo sổ hộ khẩu có tên mẹ và có chứng minh nhân dân của mẹ.
              </p>


              <h1 className='font-bold text-red-500 mt-10  opacity-50'>CHĂM SÓC BÉ</h1>
              <p className='italic text-justify'>
          
                  <b>1. Vệ sinh, môi trường.</b>
                  <br/>
                  -Nhiệt độ phòng cho bé tốt nhất trong khoảng 26 – 27độ C . <br/>
                  - Tắm cho bé hàng ngày (nhiệt độ nước 37 độ C, thân bé ngập trong nước). <br/>
                  - Vệ sinh rốn cho bé bằng cồn 70 độ và gạc vô trùng. Rốn sẽ rụng sau sinh khoảng 7 – 12 ngày (cá biệt có bé lên đến 3 tuần). Với phương pháp cắt rốn thì 2 thì chỉ cần vệ sinh rốn bằng cồn mà không cần chờ đợi rốn rụng.
                  - Massage cho bé trước hoặc sau khi tắm giúp bé dễ chịu, ngủ ngon. <br/>
                  - Tắm nắng cho trẻ hàng ngày. <br/>
                  <br/> <br/>
                 <b> 2. Nuôi dưỡng.</b> <br/>
                  - Cho bé bú sữa mẹ hoàn toàn trong 6 tháng đầu. <br/>
                  - Bú theo nhu cầu của trẻ, trẻ trực tiếp mút vú mẹ là tốt nhất. <br/>
                  - Thường xuyên massage vú, vắt sữa để tránh tắc sữa và áp xe vú. <br/>
                  - Nếu bé nôn trớ nhiều, bỏ bú, vàng da tăng lên thì cho bé khám lại ngay. <br/>
                  - Bé đi ngoài 6- 8 lần 1 ngày, phân hoa cà hoa cải nếu bú mẹ hoàn toàn. <br/>
                  - Rửa vệ sinh cho bé bằng nước ấm khi bé đi ngoài hoặc 2 lần 1 ngày để tránh hăm tã. <br/>
                  - Đánh giá sự tăng trưởng của trẻ: Cân nặng tăng trung bình lên 500 – 600 gr/1 tháng trong 6 tháng đầu (150gr – 200gr/ tuần) hoặc theo dõi lượng nước tiểu của trẻ hàng ngày (6 – 8 lần/ ngày). <br/>
                  <br/> <br/>
                  <b>3. Tái khám và phòng bệnh</b>. <br/>
                  - Khám lại vào ngày thứ 4 sau sinh để phát hiện vàng da sơ sinh cần điều trị <br/>
                  - Đo thính lực cho bé phát hiện khiếm thính. <br/>
                  - Xét nghiệm sàng lọc sơ sinh để phát hiện 3 bệnh nguy hiểm mà lâm sàng khó phát hiện (Suy giáp bẩm sinh, Thiếu men G6PD, Tăng sản thượng thận bẩm sinh).Thời gian xét nghiệm: sớm nhất sau 72 giờ, muộn nhất sau 3 tuần tuổi. <br/>
                  - Cho bé uống vitamin D3 theo đơn của bác sỹ. <br/>
                  - Tiêm phòng lao (BCG) cho bé. <br/>
                  - Thực hiện tiêm chủng đầy đủ (theo lịch tiêm chủng). <br/>
              </p>

              </div>
            </div>
            


        <Footer/>
    </div>
  )
}
