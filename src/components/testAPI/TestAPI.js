import React, { useEffect } from "react";
import "./TestAPI.scss";
export default function Header(props) {
  useEffect(function() {
    props.actGetCourseListByPaginationAPI();
    props.actGetCourseInformationAPI();
    props.actGetStudentInformationOfCourseAPI();
    props.actGetUserTypeListAPI();
    props.actLogInAPI({
      taiKhoan: "string",
      matKhau: "string"
    });
    props.actRegisterUserAPI({
      taiKhoan: "string2",
      matKhau: "string",
      hoTen: "string",
      soDT: "string",
      maNhom: "GP01",
      email: "string@slon.com.vn"
    });
    props.actGetUserListAPI("string");
    props.actGetUserListByPaginationAPI();
    props.actGetSearchUserAPI("cao");
    props.actAccountInformationAPI({
      taiKhoan: "string",
      matKhau: "string"
    });
    // props.actAddUserAPI({
    //   taiKhoan: "string11",
    //   matKhau: "string",
    //   hoTen: "string",
    //   soDT: "string",
    //   maLoaiNguoiDung: "GV",
    //   maNhom: "GP01",
    //   email: "string11@lol.com"
    // });
    props.actUpdateUserAPI({
      taiKhoan: "string11",
      matKhau: "string",
      hoTen: "string hao",
      soDT: "string",
      maLoaiNguoiDung: "GV",
      maNhom: "GP01",
      email: "string11@lol.com"
    });
    props.actDeleteUserAPI("string11");
    props.actGetUnRegisterCourseListAPI("khai");
    props.actGetCourseListPendingReviewAPI("khai");
    props.actGetCourseListApprovedAPI("khai");
    props.actGetUserListUnRegisterAPI("1920");
    props.actGetUserListPendingReviewAPI("8957893753");
    props.actGetUserListOfCourseAPI("8957893753");
  }, []);

  function handleClick() {
    props.actCreateCourseAPI({
      maKhoaHoc: "hao",
      biDanh: "hao",
      tenKhoaHoc: "hao",
      moTa: "hao hao hao",
      luotXem: 10,
      danhGia: 5,
      hinhAnh:
        "https://i.pinimg.com/originals/7a/2a/14/7a2a14ef4a76315f98cbe4aadd6554b6.jpg",
      maNhom: "GP01",
      ngayTao: "22-2-2020",
      maDanhMucKhoaHoc: "BackEnd",
      taiKhoanNguoiTao: "abc123"
    });
  }

  return (
    <div className="header">
      component Header
      <button onClick={handleClick}>Create Course</button>
    </div>
  );
}
