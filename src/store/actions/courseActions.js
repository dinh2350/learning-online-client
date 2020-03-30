import * as constantsAct from "../constants/actionsTypes";
import api from "./../../services/api";
const groupCode = "GP01";
export const actGetCourseListAPI = courseName => {
  const data = { tenKhoaHoc: courseName };
  return dispatch => {
    api(`LayDanhSachKhoaHoc?MaNhom=${groupCode}`, "GET", data)
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
      `LayKhoaHocTheoDanhMuc?maDanhMuc=${catalogCode}&MaNhom=${groupCode}`,
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

export const actGetCourseListByPaginationAPI = (courseName, page, pageSize) => {
  const data = { tenKhoaHoc: courseName };
  return dispatch => {
    api(
      `LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${pageSize}&MaNhom=${groupCode}`,
      "GET",
      data
    )
      .then(result => {
        dispatch({
          type: constantsAct.GET_COURSE_LIST_BY_PAGINATION,
          courseListByPagination: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetCourseInformationAPI = (courseName, page, pageSize) => {
  const data = { tenKhoaHoc: courseName };
  return dispatch => {
    api(
      `LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${pageSize}&MaNhom=${groupCode}`,
      "GET",
      data
    )
      .then(result => {
        dispatch({
          type: constantsAct.GET_COURSE_LIST_BY_PAGINATION,
          courseListByPagination: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
