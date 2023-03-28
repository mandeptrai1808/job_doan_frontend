import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { DeleteMenu, GetMenuList } from '../Redux/Actions/ManagerAction';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import AddNewMenuForm from '../Components/AddNewMenuForm';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import EditMenuForm from '../Components/EditMenuForm';


export default function QuanLyMenu() {

    const dispatch = useDispatch();
    const type = useSelector(state => state.ManagerReducer).typeId;

    const deleteMenuBtn = (_menuId, _type) => {
      dispatch(DeleteMenu(_menuId, _type));
    }

    const editMenuBtn = (_item) => {
      dispatch({
        type: "SET_INIT_CONTENT",
        content: _item
      })
      dispatch({
        type: "SHOW_MODAL_WITH_CONTENT",
        title: "CHỈNH SỬA MÓN ĂN",
        content: <EditMenuForm/>
      })
    }
    // DUME WEB LON GÌ NHIỀU CHỨC NĂNG VÃI LỒN CỨU TÔI

    const {menuListCurrent} = useSelector(state => state.ManagerReducer)

    const ThucDonContent = menuListCurrent.map((item, index) => {
      return  <div key={index} className='flex bg-slate-50 shadow-md rounded-sm py-5 px-2 relative mb-5'>
      <div className='w-40 rounded-md overflow-hidden md:h-40 h-24 mr-10'
      style={{
        backgroundImage: `url(${item.img?.replaceAll(
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
          editMenuBtn(item)
        }}
        >
          <EditOutlined/>
        </button>
        <button 
        className='bg-red-500 hover:bg-red-400 flex items-center rounded-md md:py-2 md:px-3 p-1 text-white'
        onClick={() => {
          deleteMenuBtn(item.id, item.type)
        }}
        >
          <DeleteOutlined/>
        </button>
      </div>
    </div> 
})


    const title = [
      'BA THÁNG ĐẦU THAI KÌ',
      'BA THÁNG GIỮA THAI KÌ',
      '3 THÁNG CUỐI ĐẾN SINH',
      'TRẺ ĐẾN TUỔI ĂN DẶM'
    ]

    const addNewMenuButton = () => {
      dispatch({
        type: "SHOW_MODAL_WITH_CONTENT",
        content: <AddNewMenuForm/>,
        title: "THÊM MÓN ĂN MỚI"
      })
    }

    useEffect(() => {
        dispatch(GetMenuList(type))
    }, [type])
    

  return (
    <div>
        <h1 className="text-red-400 text-xl font-bold border-b-4 w-64 border-red-400 mb-5">
          {title[type]}
        </h1>

        <div>
          {ThucDonContent}
          <Button onClick={addNewMenuButton} className='w-full my-5'>Thêm món ăn mới + </Button>
        </div>

    </div>
  )
}
