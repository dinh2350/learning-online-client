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

export const actGetCourseInformationAPI = courseCode => {
  return dispatch => {
    api(`LayThongTinKhoaHoc?maKhoaHoc=${courseCode}`, "GET")
      .then(result => {
        dispatch({
          type: constantsAct.GET_COURSE_INFORMATION,
          courseInformation: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetStudentInformationOfCourseAPI = courseCode => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(
      `LayThongTinHocVienKhoaHoc?maKhoaHoc=${courseCode}`,
      "GET",
      null,
      headers
    )
      .then(result => {
        dispatch({
          type: constantsAct.GET_STUDENT_INFORMATION_OF_COURSE,
          studentInformationOfCourse: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actCreateCourseAPI = course => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(`ThemKhoaHoc`, "POST", course, headers)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const actUpdateCourseAPI = course => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(`CapNhatKhoaHoc`, "PUT", course, headers)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const actDeleteCourseAPI = courseCode => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(`XoaKhoaHoc`, "DELETE", { MaKhoaHoc: courseCode }, headers)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const actEnrollCourseAPI = data => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(`GhiDanhKhoaHoc`, "POST", data, headers)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const actRegisterCourseAPI = data => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(`DangKyKhoaHoc`, "POST", data, headers)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const actUploadImageCourseAPI = data => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(`HuyGhiDanh`, "POST", data, headers)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};
