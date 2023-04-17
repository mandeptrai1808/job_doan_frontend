import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { DeleteCamnang, DeleteMenu, GetAllCamnang, GetMenuList } from '../Redux/Actions/ManagerAction';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import AddNewMenuForm from '../Components/AddNewMenuForm';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import EditMenuForm from '../Components/EditMenuForm';
import AddNewCamnangForm from '../Components/AddNewCamNangForm';
import EditCamnangForm from '../Components/EditCamnang';


export default function QuanlyCamnang() {

    const dispatch = useDispatch();
    const {camnangList} = useSelector(state => state.ManagerReducer);
    console.log(camnangList)

    const editCamnangButton = (_item) => {
      dispatch({
        type: "SET_INIT_CONTENT",
        content: _item
      })
      dispatch({
        type: "SHOW_MODAL_WITH_CONTENT",
        title: "CHỈNH SỬA CẨM NANG",
        content: <EditCamnangForm/>
      })
    }

    const deleteCamnangButton = (_id) => {
      dispatch(DeleteCamnang(_id))
    }

    const addNewCamnangButton = () => {
        dispatch({
          type: "SHOW_MODAL_WITH_CONTENT",
          content: <AddNewCamnangForm/>,
          title: "THÊM CẨM NANG MỚI"
        })
      }

    const CamnangContent = camnangList.map((item, index) => {
        return  <div key={index} className='flex bg-slate-50 shadow-md rounded-sm py-5 px-2 relative mb-5'>
        <div className='w-40 rounded-md overflow-hidden md:h-40 h-24 mr-10'
        style={{
            backgroundImage: `url(${item.image?.replaceAll(
                "\\",
                "/"
              )})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        >
        </div>
        <div className='w-96'>
          <p className='font-bold border-b'>{item.title}</p>
          <p style={{whiteSpace: 'pre-line'}}>{item.content}</p>
        </div>
  
        <div className='absolute bottom-2 flex right-2'>
          <button 
          className='bg-blue-500 hover:bg-blue-400 flex items-center rounded-md md:py-2 md:px-3 p-1 mr-2 text-white'
          onClick={() => {
            editCamnangButton(item)
          }}
          >
            <EditOutlined/>
          </button>
          <button 
          className='bg-red-500 hover:bg-red-400 flex items-center rounded-md md:py-2 md:px-3 p-1 text-white'
          onClick={() => {
            deleteCamnangButton(item.id)
          }}
          >
            <DeleteOutlined/>
          </button>
        </div>
      </div> 
  })

    useEffect(() => {
        dispatch(GetAllCamnang())
    }, [])
  return (
    <div>
          <h1 className='text-2xl border-b font-bold'>QUẢN LÝ CẨM NANG</h1> 
          {CamnangContent}
          <Button onClick={addNewCamnangButton}  className='w-full my-5'>Thêm cẩm nang mới + </Button>

    </div>
  )
}
