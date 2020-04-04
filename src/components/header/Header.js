import React, { useEffect } from "react";
import "./Header.scss";
export default function Header(props) {
  useEffect(function() {
    props.actGetCourseListByPaginationAPI();
    props.actGetCourseInformationAPI();
    props.actGetStudentInformationOfCourseAPI();
  }, []);

  return (
    <section className="header">
      <div className="header__wrapper">
        <h1>Keep learning in the moments that matter</h1>
        <h3>
          Courses for every step of your career. Instruction with real-world
          experience
        </h3>
        <button>
          <h3>Start my free month</h3>
        </button>
        <button>
          <h3>Buy for my team</h3>
        </button>
      </div>
    </section>
  );
}
