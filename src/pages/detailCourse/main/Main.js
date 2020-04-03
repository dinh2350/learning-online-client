import React from "react";
import "./Main.scss";
import ListCourseContainer from "./listCourse/ListCourseContainer";
export default function Main() {
  return (
    <div className="Main">
      <div>a</div>
      <div className="Main__listCourse">
        <ListCourseContainer />
      </div>
    </div>
  );
}
