import React from "react";
import "./Course.scss";
import { Link } from "react-router-dom";
export default function Course(props) {
  const { course } = props;
  return (
    <section className="course">
      <div className="course__wrapper">
        <Link to={`/course/${course.maKhoaHoc}`} className="course__link">
          <div className="course__image">
            <img src={course.hinhAnh} alt="gai xinh" />
          </div>
          <h3 className="course__name">{course.tenKhoaHoc}</h3>
          <span className="course__view">{course.luotXem} viewers </span>
        </Link>
      </div>
    </section>
  );
}
