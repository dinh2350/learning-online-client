import React, { useEffect, useState } from "react";
import ListTrendingContainer from "./listTrending/ListTrendingContainer";
import "./Home.scss";
import PillListModuleContainer from "./pillListModule/PillListModuleContainer";
import TileModuleContainer from "./tileModule/TileModuleContainer";
import CricleModuleContainer from "./cricleModule/CricleModuleContainer";
export default function Home(props) {
  // const [Coursecode, setCoursecode] = useState("");
  useEffect(function () {
    const { actGetCatalogListAPI } = props;
    actGetCatalogListAPI();
  }, []);
  const showList = () => {
    if (props.catalogList) {
      return (
        <>
          <ListTrendingContainer
            title="Trending Data Analysis Courses See all"
            catalogCode={"BackEnd"}
          />
        </>
      );
    }
  };

  return (
    <div className="home">
      {/* {getCatalogListCourse()} */}

      {showList()}
      <PillListModuleContainer />
      <TileModuleContainer />
      <CricleModuleContainer />
    </div>
  );
}
