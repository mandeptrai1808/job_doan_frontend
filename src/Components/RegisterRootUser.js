import { Input } from 'antd'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { RegisterRootUserAction } from '../Redux/Actions/ManagerAction';

export default function RegisterRootUser() {

    const dispatch = useDispatch();

    const [dataRegister, setDataRegister] = useState({
        rootname: "",
        password: "",
        repassword: ""
    })

    const changeData = (e) => {
      const {value, name} = e.target;
      setDataRegister({
        ...dataRegister,
        [name]: value
      })
    }

    const submitButton = () => {
      if(dataRegister.password == dataRegister.repassword){
        dispatch(RegisterRootUserAction({
            rootname: dataRegister.rootname,
            password: dataRegister.password
        }))
      }
      else{
        alert("Mật khẩu xác nhận không đúng!")
      }
    }


  return (
    <div>
        <Input value={dataRegister.rootname} className='my-2' onChange={(e) => {
          changeData(e)
        }} name='rootname' placeholder='Nhập rootname'/>
        <Input value={dataRegister.password} className='my-2' onChange={(e) => {
          changeData(e)
        }} name='password' placeholder='Nhập Mật khẩu'/>
        <Input value={dataRegister.repassword} className='my-2' onChange={(e) => {
          changeData(e)
        }} name='repassword' placeholder='Xác nhận lại mật khẩu'/>

        <div className='flex justify-center'>
        <button onClick={() => {
          submitButton()
        }} className='w-20 rounded-md my-5 py-2 bg-red-500 text-white'>REGISTER</button>
        </div>
    </div>
  )
}
