import React, { useEffect } from "react";
import "./ListTrending.scss";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import CarouselTrending from "react-slick";
import CourseContainer from "./course/CourseContainer";

export default function ListTrending(props) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(function () {
    props.actGetCourseListByCatalogAPI(props.catalogCode);
  }, []);

  const { title, courseListByCatalog } = props;

  function renderCourseList() {
    if (courseListByCatalog) {
      return courseListByCatalog.map((course, index) => {
        return <CourseContainer course={course} key={index} />;
      });
    }
  }

  return (
    <section className="list-trending">
      <div className="list-trending__wrapper">
        <div className="list-trending__header">
          <h2 className="list-trending__title">{title}</h2>
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
