import React from "react";
import Footer from "./Footer";
import MenuHeader from "./MenuHeader";
import { useState } from "react";
import { Button, Input } from "antd";
import Map from "./Map"
import { HomeOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
const { TextArea } = Input;

export default function LienhePage() {
    
    const [feedbackData, setFeedbackData] = useState({
        name: '',
        mail: '',
        purpose: '',
        content: ''
    })

    const submitButton = () => {
      console.log(feedbackData)
    }

  return (
    <div>
      <div className="w-full overflow-hidden">
        <MenuHeader />
        </div>
       


      <div className="md:px-40 px-5 mt-10 pb-20">
      <h1 className='text-xl font-bold border-b-4 mb-2 w-fit pr-10 border-red-500'>LIÊN HỆ</h1>
     <iframe className="mb-10 w-full shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8611727335915!2d105.7688664140655!3d10.028312975299414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a088235075bbf1%3A0xb8beaca85e679d48!2zMTMyIMSQLiAzLzIsIFh1w6JuIEtow6FuaCwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1678988623150!5m2!1sen!2s" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

    <div className="md:flex">
   <div className="md:w-2/3">
        <p className="font-bold text-red-400 text-xl mb-5">THÔNG TIN LIÊN LẠC</p>
        <div className="mb-5">
        <p className="font-bold">Họ và tên</p>
        <Input 
        className="md:w-56" 
        value={feedbackData.name} 
        placeholder="Vui lòng nhập họ tên"
        onChange={(e) => {
          setFeedbackData({
            ...feedbackData,
            name: e.target.value
          })
        }}></Input>
        </div>

        <div className="mb-5">
        <p className="font-bold">Email</p>
        <Input 
        className="md:w-56" 
        value={feedbackData.mail} 
        placeholder="Vui lòng nhập email"
        onChange={(e) => {
          setFeedbackData({
            ...feedbackData,
            mail: e.target.value
          })
        }}></Input>
        </div>

        <div className="mb-5">
        <p className="font-bold">Mục đích</p>
        <Input 
        className="md:w-56" 
        value={feedbackData.purpose} 
        placeholder="Vui lòng nhập mục đích"
        onChange={(e) => {
          setFeedbackData({
            ...feedbackData,
            purpose: e.target.value
          })
        }}></Input>
        </div>

        <div className="mb-5">
        <p className="font-bold">Nội dung</p>
        <TextArea 
        className="w-full"
        rows={5} 
        value={feedbackData.content} 
        placeholder="Vui lòng nhập nội dung"
        onChange={(e) => {
          setFeedbackData({
            ...feedbackData,
            content: e.target.value
          })
        }}></TextArea>
        </div>

        <div>
            <button  onClick={submitButton} className="px-5 py-2 rounded-lg text-white shadow-md hover:bg-red-200 bg-red-400">Send</button>
        </div>

        
    </div>
    <div className="md:w-1/3 md:mt-0 mt-10">
    <p className="font-bold text-red-400 text-xl mb-5">THÔNG TIN LIÊN HỆ</p>
    <div className="flex items-center">
    <HomeOutlined className="mr-5 p-2 rounded-full bg-red-300 text-white"/> Số 132, Đường 3/2, Hưng Lợi, Ninh Kiều, Cần Thơ
    </div>
    <div className="flex items-center my-5">
    <PhoneOutlined className="mr-5 p-2 rounded-full bg-red-300 text-white"/>  +84 944 151 930
    </div>
    <div className="flex items-center">
    <MailOutlined className="mr-5 p-2 rounded-full bg-red-300 text-white"/> dinhduongmevabe.com
    </div>
    </div>
   </div>
    </div>    






      <Footer />
    </div>
  );
}
