import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { LoginUser, LoginUserLocal } from "../Redux/Actions/UserAction";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onFinish = (value) => {
    // dispatch(LoginUser(value));
    dispatch(LoginUserLocal(value))
    // console.log(value)
  };

  const MoveToRegister = () => {
    navigate('/register')
  }

  return (
    <div className="relative z-20">
      <Form
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="font-bold flex items-center">
          <UserOutlined />
          <p className="ml-2">Email:</p>
        </div>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input placeholder="Ex user@gmail.com!" />
        </Form.Item>

        <div className="font-bold flex items-center">
          <LockOutlined />
          <p className="ml-2">Password:</p>
        </div>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Please type your password!" />
        </Form.Item>

        <Form.Item label="" className="text-center">
          <Button htmlType="submit" className="w-1/2 mt-5">
            Login
          </Button>
        </Form.Item>
        <div className="text-center">
        <p >Bạn chưa có tài khoản?</p>
        <p className="text-blue-600 hover:text-blue-300 cursor-pointer"
          onClick={MoveToRegister}
        >Đăng kí ngay</p>
        </div>
      </Form>
    </div>
  );
}


