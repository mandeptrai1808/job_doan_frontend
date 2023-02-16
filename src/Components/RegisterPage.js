import React from 'react'
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons/lib/icons";
import RegisterForm from './RegisterForm';

export default function RegisterPage() {
    const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex">
    <div className="fixed md:top-5 bottom-5 z-20 left-5">
      <div
        className="text-white text-xl opacity-50 cursor-pointer hover:opacity-100 duration-100 flex items-center"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowLeftOutlined />
        <p className="pl-2">Back</p>
      </div>
    </div>
    <div
      className="md:w-2/3 w-full md:relative md:relative fixed top-0 left-0 md:block opacity-100 h-full"
      style={{
        backgroundImage: "url(https://wallpaperaccess.com/full/3433.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
    <div className="md:w-1/3 w-full relative z-20 md:mt-0 mt-10  h-full py-0 md:px-20 px-10 ">
      <div className="bg-white md:p-0 md:shadow-none px-10 pt-5 pb-10 rounded shadow-md">
        <h1 className="text-3xl text-red-500 font-bold border-b text-center my-5 pb-5 opacity-90">
          REGISTER
        </h1>
        <div className="md:w-full">
          <RegisterForm />
        </div>
      </div>
    </div>
  </div>
  )
}
