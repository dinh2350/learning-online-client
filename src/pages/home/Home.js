import React, { useEffect } from "react";
import ListTrendingContainer from "./listTrending/ListTrendingContainer";
import "./Home.scss";
export default function Home(props) {
  useEffect(
    function() {
      const { actGetCatalogListAPI, actGetCourseListAPI } = props;
      actGetCatalogListAPI();
      actGetCourseListAPI();
    },
    [props]
  );

  return (
    <div className="home">
      <ListTrendingContainer
        title="Trending Data Analysis Courses See all"
        catalogCode="BackEnd"
      />
    </div>
  );
}
