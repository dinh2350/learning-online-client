import React, { useEffect } from "react";
import "./Home.scss";
import PillListModuleContainer from "./pillListModule/PillListModuleContainer";
export default function Home(props) {
  useEffect(
    function() {
      const { actGetCatalogListAPI, actGetCourseListAPI } = props;
      actGetCatalogListAPI("Angular");
      actGetCourseListAPI("Lập trình Backend");
    },
    [props]
  );
  return (
    <div className="home">
      Page Home
      <PillListModuleContainer />
    </div>
  );
}
