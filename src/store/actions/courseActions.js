import * as constantsAct from "../constants/actionsTypes";
import api from "../../services/api";
const groupCode = "GP01";
export const actGetCatalogListAPI = (catalogName) => {
  const data = { tenDanhMuc: catalogName };
  return (dispatch) => {
    api("QuanLyKhoaHoc/LayDanhMucKhoaHoc", "GET", data)
      .then((result) => {
        dispatch({
          type: constantsAct.GET_CATALOG_LIST,
          catalogList: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetCourseListByCatalogAPI = (catalogCode) => {
  const data = { maDanhMuc: catalogCode };
  return (dispatch) => {
    api(
      `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${catalogCode}&MaNhom=${groupCode}`,
      "GET",
      data
    )
      .then((result) => {
        dispatch({
          type: constantsAct.GET_COURSE_LIST_BY_CATALOG,
          courseListByCatalog: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
