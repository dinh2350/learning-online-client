import React, { useEffect } from "react";
import "./ListTrending.scss";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import CarouselTrending from "react-slick";
import CourseContainer from "./components/course/CourseContainer";
export default function ListTrending(props) {
  const settings = {
    infinite: false,
    speed: 500,
    items: 4,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  useEffect(
    function() {
      props.actGetCourseListByCatalogAPI("BackEnd");
    },
    [props]
  );

  function renderCourseList() {
    if (props.courseListByCatalog) {
      return props.courseListByCatalog.map((course, index) => {
        return <CourseContainer course={course} key={index} />;
      });
    }
  }

  return (
    <section className="list-trending">
      <div className="list-trending__wrapper">
        <div className="list-trending__header">
          <h2 className="list-trending__title">
            Trending Data Analysis Courses See all
          </h2>
          <a href="/" className="list-trending__see-all">
            See all
          </a>
        </div>
        <div className="list-trending__body">
          <CarouselTrending {...settings}>
            {renderCourseList()}
          </CarouselTrending>
        </div>
      </div>
    </section>
  );
}
