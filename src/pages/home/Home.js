import React, { useEffect, useState } from "react";
import ListTrendingContainer from "./listTrending/ListTrendingContainer";
import "./Home.scss";
import PillListModuleContainer from "./pillListModule/PillListModuleContainer";
import TileModuleContainer from "./tileModule/TileModuleContainer";
import CricleModuleContainer from "./cricleModule/CricleModuleContainer";
export default function Home(props) {
  useEffect(function () {
    const { actGetCatalogListAPI } = props;
    actGetCatalogListAPI();
  }, []);

  const { courseListByBackEnd, courseListByDesign, courseListByDiDong } = props;

  return (
    <div className="home">
      <ListTrendingContainer
        courseListByCatalog={courseListByBackEnd}
        title="backend"
        catalogCode="BackEnd"
      />
      <ListTrendingContainer
        courseListByCatalog={courseListByDesign}
        title="design"
        catalogCode="Design"
      />
      <ListTrendingContainer
        courseListByCatalog={courseListByDiDong}
        title="design"
        catalogCode="DiDong"
      />
      <PillListModuleContainer />
      <TileModuleContainer />
      <CricleModuleContainer />
    </div>
  );
}
