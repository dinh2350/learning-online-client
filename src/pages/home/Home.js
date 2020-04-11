import React, { useEffect, useState } from "react";
import ListTrendingContainer from "./listTrending/ListTrendingContainer";
import "./Home.scss";
import PillListModuleContainer from "./pillListModule/PillListModuleContainer";
import TileModuleContainer from "./tileModule/TileModuleContainer";
import CricleModuleContainer from "./cricleModule/CricleModuleContainer";
import HeroContainer from "./hero/HeroContainer";
import DirectoryContainer from "./directory/DirectoryContainer";
import FooterContainer from "./footer/FooterContainer";
import BottomCtaContainer from "./bottomCta/BottomCtaContainer";
export default function Home(props) {
  useEffect(function () {
    const { actGetCatalogListAPI } = props;
    actGetCatalogListAPI();
  }, []);

  const {
    courseListByBackEnd,
    courseListByDesign,
    courseListByDiDong,
    courseListByFrontEnd,
    courseListByFullStack,
    courseListByTuDuy,
  } = props;

  return (
    <section className="home">
      <div className="home__primary">
        <div className="home__item">
          <HeroContainer />
        </div>
        <div className="home__item">
          <ListTrendingContainer
            courseListByCatalog={courseListByBackEnd}
            title="backend"
            catalogCode="BackEnd"
          />
        </div>
        <div className="home__item">
          <PillListModuleContainer />
        </div>
        <div className="home__item">
          <ListTrendingContainer
            courseListByCatalog={courseListByDesign}
            title="design"
            catalogCode="Design"
          />
        </div>
        <div className="home__item">
          <ListTrendingContainer
            courseListByCatalog={courseListByDiDong}
            title="design"
            catalogCode="DiDong"
          />
        </div>
        <div className="home__item">
          <TileModuleContainer />
        </div>
        <div className="home__item">
          <ListTrendingContainer
            courseListByCatalog={courseListByFrontEnd}
            title="Front End"
            catalogCode="FrontEnd"
          />
        </div>
        <div className="home__item">
          <ListTrendingContainer
            courseListByCatalog={courseListByFullStack}
            title="Full Stack"
            catalogCode="FullStack"
          />
        </div>
        <div className="home__item">
          <ListTrendingContainer
            courseListByCatalog={courseListByTuDuy}
            title="Tu Duy"
            catalogCode="TuDuy"
          />
        </div>
        <div className="home__item">
          <CricleModuleContainer />
        </div>
        <BottomCtaContainer />
        <div className="home__item">
          <DirectoryContainer />
        </div>
      </div>
      <FooterContainer />
    </section>
  );
}
