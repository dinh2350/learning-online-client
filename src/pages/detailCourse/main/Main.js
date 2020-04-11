import React, { useEffect } from "react";
import "./Main.scss";
import ListCourseContainer from "./listCourse/ListCourseContainer";
import CoreRailContainer from "./coreRail/CoreRailContainer";
export default function Main(props) {
  useEffect(
    function () {
      let { actGetCourseListByCatalogAPI } = props;
      actGetCourseListByCatalogAPI(props.catalogCode);
    },
    [props.courseCode]
  );
  return (
    <div className="main">
      <div className="main__core-rail">
        <CoreRailContainer />
      </div>
      <div className="main__list-course">
        <ListCourseContainer />
      </div>
    </div>
  );
}
