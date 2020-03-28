import * as constantsAct from "../constants/actionsTypes";
import api from "./../../services/api";
export const actGetCourseListAPI = courseName => {
  const data = { tenKhoaHoc: courseName };
  return dispatch => {
    api("LayDanhSachKhoaHoc?MaNhom=GP01", "GET", data)
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
  const data = { tenDanhMuc: catalogName };
  return dispatch => {
    api("LayDanhMucKhoaHoc", "GET", data)
      .then(result => {
        dispatch({
          type: constantsAct.GET_CATALOG_LIST,
          catalogList: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetCourseListByCatalogAPI = catalogCode => {
  const data = { maDanhMuc: catalogCode };
  return dispatch => {
    api(
      `LayKhoaHocTheoDanhMuc?maDanhMuc=${catalogCode}&MaNhom=GP01`,
      "GET",
      data
    )
      .then(result => {
        dispatch({
          type: constantsAct.GET_COURSE_LIST_BY_CATALOG,
          courseListByCatalog: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
