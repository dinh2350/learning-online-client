import React, { useEffect } from "react";
import ListTrendingContainer from "./components/listTrending/ListTrendingContainer";
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
      <ListTrendingContainer />
    </div>
  );
}
