import React, { useEffect } from "react";
import "./DetailCourse.scss";
import BrowseMapContainer from "./browseMap/BrowseMapContainer";
import EnterpriseNavContainer from "./enterpriseNav/EnterpriseNavContainer";
import MainContainer from "./main/MainContainer";
import { useParams } from "react-router-dom";

export default function DetailCourse(props) {
  let { coursecode, coursecatalog } = useParams();
  useEffect(function () {
    let { actGetInforCourse, actGetCourseListByCatalogAPI } = props;
    actGetInforCourse(coursecode);
    actGetCourseListByCatalogAPI(coursecatalog);
  }, []);
  return (
    <div className="detail-course">
      <EnterpriseNavContainer />
      <MainContainer />
      <div className="price-disclaimer">
        Price may change based on profile and billing country information
        entered during Sign In or Registration
      </div>
      <BrowseMapContainer />
    </div>
  );
}
