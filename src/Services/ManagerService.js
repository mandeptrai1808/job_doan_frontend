import axios from "axios";
import { BASE_URL } from "./configAPI";

export const ManagerService = {
    GetMenuList: (_type) => {
      return axios({
        url: `${BASE_URL}/menus/getmenulist/${_type}`,
        method:'get'
      })
    },

    AddNewMenu: (_data) => {
      return axios({
        url: `${BASE_URL}/menus/addnewmenu`,
        method: 'post',
        data: _data
      })
    },

     UploadImageServer: (_menuId,_dataImg, _nameForm) => {
      let formData = new FormData();
      formData.append(_nameForm, _dataImg);
      return axios({
        url: `${BASE_URL}/menus/uploadimg/${_menuId}`,
        data: formData,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    },

    DeleteMenu: (_menuId) => {
      return axios({
        url: `${BASE_URL}/menus/deletemenu/${_menuId}`,
        method: 'DELETE'
      })
    },

    UpdateMenu: (_dataMenu, _menuId) => {
      return axios({
        url: `${BASE_URL}/menus/updatemenu/${_menuId}`,
        method: 'PUT',
        data: _dataMenu
      })
    }


}