import Axios from "axios";
import * as constantsAct from "../constants/actionsTypes";
export const actGetCourseListAPI = courseName => {
  return dispatch => {
    Axios({
      method: "GET",
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      data: { tenKhoaHoc: courseName }
    })
      .then(result => {
        dispatch({
          type: constantsAct.GET_COURSE_LIST,
          courseList: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetCatalogListAPI = catalogName => {
  return dispatch => {
    fetch(
      "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
      {
        method: "GET",
        data: { tenDanhMuc: catalogName }
      }
    )
      .then(response => response.json())
      .then(result => {
        dispatch({
          type: constantsAct.GET_CATALOG_LIST,
          catalogList: result
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
