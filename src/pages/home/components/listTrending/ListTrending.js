import React, { useEffect } from "react";
import "./ListTrending.scss";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import CarouselTrending from "react-slick";
import CourseContainer from "./components/course/CourseContainer";
export default function ListTrending(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(
    function() {
      props.actGetCourseListByCatalogAPI();
    },
    [props]
  );

  function renderCourseList() {
    if (props.courseListByCatalog) {
      return props.courseListByCatalog.map((course, index) => {
        return <CourseContainer />;
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
          <a href="/"> see all </a>
        </div>
        <div className="list-trending__body">
          <CarouselTrending {...settings}>
            {/* <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}
            {renderCourseList()}
          </CarouselTrending>
        </div>
      </div>
    </section>
  );
}
