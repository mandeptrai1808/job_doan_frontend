import { UserService } from "../../Services/UserService";
import { notification } from 'antd';


let listUser = localStorage.getItem("list_user");
listUser = listUser && JSON.parse(listUser);
if (!listUser) listUser = [];

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



export const LoginUser =  (_dataLogin) => {
    return async (dispatch) => {
      try {
        let {data} = await UserService.Login(_dataLogin);
        successNotification("Đăng nhập thành công", "Bạn đã đăng nhập thành công!!")
        localStorage.setItem('login_user', JSON.stringify(data));
        dispatch({type: "IS_LOGIN"})
        console.log(data);
      } catch (error) {
        errorNotification("Đăng nhập thất bại", "Kiểm tra lại mật khẩu hoặc tên đăng nhập!")
        console.log(error)
      }
    }
}

export const RegisterUser = (_dataRegister, _navigate) => {
  return async (dispatch) => {
    try {
      let {data} = await UserService.Register(_dataRegister)
      successNotification("Đăng kí thành công", "Bạn đã đăng kí tài khoảng thành công!!")
      _navigate()
      console.log(data)
    } catch (error) {
      errorNotification("Đăng kí thất bại", "Có thể email của bạn đã tổng tại, vui lòng nhập email khác!")
      
    }
  }
}

export const LoginUserLocal = (_dataLogin) => {
   return async (dispatch) => {
    const findUser = listUser.find(item => item.email === _dataLogin.email);
    if(findUser){
      if(findUser.password === _dataLogin.password){
        successNotification("Đăng nhập thành công", "Bạn đã đăng nhập thành công!!")
        localStorage.setItem('login_user', JSON.stringify(findUser));
        dispatch({type: "IS_LOGIN"})
        console.log(findUser);
      }
      else {
        errorNotification("Đăng nhập thất bại", "Kiểm tra lại mật khẩu hoặc tên đăng nhập!")
      }
    }
    else{
      errorNotification("Đăng nhập thất bại", "Kiểm tra lại mật khẩu hoặc tên đăng nhập!")

    }
   }
}

export const RegisterLocal = (_dataRegister, _navigate) => {
  let findUser = listUser.find(item => item.email === _dataRegister.email);
  if (!findUser){
    let data = {..._dataRegister, avatar: "https://i.pinimg.com/originals/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg"}
    listUser.push(data)
    let  updateList = listUser;
    localStorage.setItem('list_user', JSON.stringify(updateList));
    successNotification("Đăng kí thành công", "Bạn đã đăng kí tài khoảng thành công!!")
    _navigate()
  } else{
    errorNotification("Đăng kí thất bại", "Có thể email của bạn đã tổng tại, vui lòng nhập email khác!")
  }
}