import React from "react";
import "./CoreRail.scss";
import DescribeInforCourseContainer from "./describeInforCourse/DescribeInforCourseContainer";
export default function CoreRail(props) {
  return (
    <div className="core-rail">
      <div className="core-rail__wrap">
        <div className="core-rail__img">
          <img src={props.inforCourseCode && props.inforCourseCode.hinhAnh} />{" "}
        </div>
        <div className="core-rail__infor">
          <h1 className="core-rail__infor__header">
            {props.inforCourseCode && props.inforCourseCode.tenKhoaHoc}
          </h1>
          <div className="core-rail__infor__content">
            <p>
              {`Teacher : ${
                props.inforCourseCode && props.inforCourseCode.nguoiTao.hoTen
              } `}
            </p>

            <div className="core-rail__infor__view">
              <span>
                {`Released on : ${
                  props.inforCourseCode && props.inforCourseCode.ngayTao
                }`}
              </span>
              <span>
                {`${
                  props.inforCourseCode && props.inforCourseCode.luotXem
                } View`}
              </span>
            </div>
            <div className="core-rail__group-btn">
              <button className="core-rail__group-btn__free">
                Start my 1-month free trial
              </button>
              <button className="core-rail__group-btn__buy">
                Buy this course ($29.99*)
              </button>
            </div>
          </div>
        </div>
      </div>
      <DescribeInforCourseContainer />
    </div>
  );
}
