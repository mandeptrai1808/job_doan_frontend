import { ManagerService } from "../../Services/ManagerService"
import { notification } from 'antd';

const successNotification = (_tittle, _content) => {
  notification["success"]({
    message: _tittle,
    description: _content,
  });
};

const errorNotification = (_tittle, _content) => {
  notification["error"]({
    message: _tittle,
    description: _content,
  });
};


export const GetMenuList = (_type) => {
  return async (dispatch) => {
    try {
        let {data} = await ManagerService.GetMenuList(_type);
        dispatch({
            type: 'GET_MENU_LIST',
            content: data
        })
    } catch (error) {
        console.log(error)
    }
  }
}

export const AddNewMenu = (_data, _dataImg) => {
  return async (dispatch) => {
    try {
      let {data} = await ManagerService.AddNewMenu(_data);
      let dataImage = await ManagerService.UploadImageServer(data.id, _dataImg, "MenuImage")
      console.log(dataImage)
      dispatch({type:'CLOSE_MODAL'})
      dispatch(GetMenuList(data.type))
    } catch (error) {
      console.log(error)
    }
  }
}

export const DeleteMenu = (_menuId, _type) => {
  return async (dispatch) => {
    try {
      await ManagerService.DeleteMenu(_menuId)
      dispatch(GetMenuList(_type))
      successNotification("Xóa thành công", "Bạn đã xóa 1 món ăn thành công!!")

    } catch (error) {
      console.log(error)
      errorNotification("Xóa thất bại", "Vui lòng kiểm tra lại đường truyền!")

    }
  }
}

export const UpdateMenu = (_dataMenu, _menuId, _dataImg) => {
  return async (dispatch) => {
    try {
      let {data} = await ManagerService.UpdateMenu(_dataMenu, _menuId);
      if(_dataImg){
        let dataImage = await ManagerService.UploadImageServer(data.id, _dataImg, "MenuImage")
      }
      dispatch(GetMenuList(data.type))
      dispatch({type:'CLOSE_MODAL'})

      successNotification("Cập nhật thành công", "Bạn đã cập nhật 1 món ăn thành công!!")

    } catch (error) {
      errorNotification("Cập nhật thất bại", "Vui lòng kiểm tra lại đường truyền!")
      
    }
  }
}