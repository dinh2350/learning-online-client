import React, { useEffect } from "react";
import "./Header.scss";
export default function Header(props) {
  useEffect(function() {
    props.actGetCourseListByPaginationAPI();
    props.actGetCourseInformationAPI();
    props.actGetStudentInformationOfCourseAPI();
  }, []);
  return <div className="header">component Header</div>;
}
