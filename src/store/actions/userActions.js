import * as constantsAct from "../constants/actionsTypes";
import api from "./../../services/api";
const groupCode = "GP01";
export const actGetUserTypeListAPI = () => {
  return dispatch => {
    api(`QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`, "GET")
      .then(result => {
        dispatch({
          type: constantsAct.GET_USER_TYPE_LIST,
          userTypeList: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
