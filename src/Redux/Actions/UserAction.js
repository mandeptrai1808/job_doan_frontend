import { UserService } from "../../Services/UserService";
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