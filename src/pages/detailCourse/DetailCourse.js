import React, { useEffect } from "react";
import "./DetailCourse.scss";
import BrowseMapContainer from "./browseMap/BrowseMapContainer";
import EnterpriseNavContainer from "./enterpriseNav/EnterpriseNavContainer";
import MainContainer from "./main/MainContainer";
import { useParams } from "react-router-dom";

export default function DetailCourse(props) {
  let { coursecode } = useParams();
  useEffect(
    function () {
      let { actGetInforCourse } = props;
      actGetInforCourse(coursecode);
    },
    [coursecode]
  );
  const callCourseCatatlog = () => {
    if (props.inforCourseCode) {
      return (
        <MainContainer
          catalogCode={props.inforCourseCode.danhMucKhoaHoc.maDanhMucKhoahoc}
          courseCode={props.inforCourseCode.maKhoaHoc}
        />
      );
    }
  };
  return (
    <div className="detail-course">
      <EnterpriseNavContainer />
      {callCourseCatatlog()}
      <div className="price-disclaimer">
        Price may change based on profile and billing country information
        entered during Sign In or Registration
      </div>
      <BrowseMapContainer />
    </div>
  );
}
