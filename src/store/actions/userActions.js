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
export const actLogInAPI = user => {
  return dispatch => {
    api(`QuanLyNguoiDung/DangNhap`, "POST", user)
      .then(result => {
        dispatch({
          type: constantsAct.LOG_IN,
          user: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const actRegisterUserAPI = user => {
  return dispatch => {
    api(`QuanLyNguoiDung/DangKy`, "POST", user)
      .then(result => {
        dispatch({
          type: constantsAct.REGISTER_USER,
          registerUser: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetUserListAPI = keyWork => {
  return dispatch => {
    api(
      `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupCode}&tuKhoa=${keyWork}`,
      "GET"
    )
      .then(result => {
        dispatch({
          type: constantsAct.GET_USER_LIST,
          getUserList: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetUserListByPaginationAPI = (keyWork, page, pageSize) => {
  return dispatch => {
    api(
      `QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${groupCode}&${
        keyWork ? `tuKhoa=${keyWork}` : ""
      }&page=${page}&pageSize=${pageSize}`,
      "GET"
    )
      .then(result => {
        dispatch({
          type: constantsAct.GET_USER_LIST_BY_PAGINATION,
          userListByPagination: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetSearchUserAPI = keyWork => {
  return dispatch => {
    api(
      `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${groupCode}&${
        keyWork ? `tuKhoa=${keyWork}` : ""
      }`,
      "GET"
    )
      .then(result => {
        dispatch({
          type: constantsAct.GET_SEARCH_USER,
          searchUser: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actAccountInformationAPI = user => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(`QuanLyNguoiDung/ThongTinTaiKhoan`, "POST", user, headers)
      .then(result => {
        dispatch({
          type: constantsAct.ACCOUNT_INFORMATION,
          accountInformation: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actAddUserAPI = user => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(`QuanLyNguoiDung/ThemNguoiDung`, "POST", user, headers)
      .then(result => {
        dispatch({
          type: constantsAct.ADD_USER,
          addUser: result.data
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const actUpdateUserAPI = user => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, "PUT", user, headers)
      .then(result => {
        dispatch({
          type: constantsAct.UPDATE_USER,
          updateUser: result.data
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const actDeleteUserAPI = account => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(
      `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`,
      "DELETE",
      null,
      headers
    )
      .then(result => {
        dispatch({
          type: constantsAct.DELETE_USER,
          deleteUser: result.data
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const actGetUnRegisterCourseListAPI = account => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(
      `QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${account}`,
      "POST",
      null,
      headers
    )
      .then(result => {
        dispatch({
          type: constantsAct.GET_UNREGISTER_COURSE_LIST,
          unRegisterCourseList: result.data
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const actGetCourseListPendingReviewAPI = account => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(
      `QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
      "POST",
      { taiKhoan: account },
      headers
    )
      .then(result => {
        dispatch({
          type: constantsAct.GET_COURSE_LIST_PENDING_REVIEW,
          courseListPendingReview: result.data
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const actGetCourseListApprovedAPI = account => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(
      `QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      "POST",
      { taiKhoan: account },
      headers
    )
      .then(result => {
        dispatch({
          type: constantsAct.GET_COURSE_LIST_APPROVED,
          courseListApproved: result.data
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const actGetUserListUnRegisterAPI = courseCode => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(
      `QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh`,
      "POST",
      { maKhoaHoc: courseCode },
      headers
    )
      .then(result => {
        dispatch({
          type: constantsAct.GET_USER_LIST_UNREGISTER,
          userListUnRegister: result.data
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const actGetUserListPendingReviewAPI = courseCode => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(
      `QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`,
      "POST",
      { maKhoaHoc: courseCode },
      headers
    )
      .then(result => {
        dispatch({
          type: constantsAct.GET_USER_LIST_PENDING_REVIEW,
          userListPendingReview: result.data
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

export const actGetUserListOfCourseAPI = courseCode => {
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE1ODU1NzU5MjcsImV4cCI6MTU4NTU3OTUyN30.bSoyDCeLKS8wtrk7Uhm3OfhajaC3M2liA_X1mM0UAyQ`
  };
  return dispatch => {
    api(
      `QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`,
      "POST",
      { maKhoaHoc: courseCode },
      headers
    )
      .then(result => {
        dispatch({
          type: constantsAct.GET_USER_LIST_OF_COURSE,
          userListOfCourse: result.data
        });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};
