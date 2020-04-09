import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ListCourse.scss";
export default function ListCourse(props) {
  let { Course } = props;
  useEffect(
    function () {
      const { actGetCourseListByCatalogAPI } = props;
      actGetCourseListByCatalogAPI(props.Coursecode);
    },
    [props.Coursecode]
  );

  const showDetailCourse = () => {
    if (props.courseListByCatalog) {
      return (
        props.Coursecode &&
        props.courseListByCatalog.map((item, index) => {
          return (
            <li>
              {" "}
              <Link to={`/course/${item.maKhoaHoc}`}>
                {" "}
                {item.maKhoaHoc}
              </Link>{" "}
            </li>
          );
        })
      );
    }
    return;
  };
  console.log(props.courseListByCatalog);
  return (
    <div className="listCourse">
      {Course} <ul>{showDetailCourse()}</ul>
    </div>
  );
}
