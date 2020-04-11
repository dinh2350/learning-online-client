import React from "react";
import "./RelatedCourses.scss";
export default function RelatedCourses(props) {
  const showRelatedCourse = () => {
    let { img, nameCourse, Teacher, Like } = props;
    return (
      <>
        {" "}
        <div className="related-courses__wrap">
          <div className="related-courses__img">
            <img src={img} />
          </div>
          <div className="related-courses__infor">
            <h2>{nameCourse}</h2>
            <p>{`By:${Teacher}`}</p>
            <p>{`${Like} viewer`}</p>
          </div>
        </div>
      </>
    );
  };

  return <div className="related-courses">{showRelatedCourse()}</div>;
}
