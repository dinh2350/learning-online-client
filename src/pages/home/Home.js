import React, { useEffect, useState } from "react";
import "./Home.scss";
import PillListModuleContainer from "./pillListModule/PillListModuleContainer";
import TileModuleContainer from "./tileModule/TileModuleContainer";
import CricleModuleContainer from "./cricleModule/CricleModuleContainer";
import ListCourseContainer from "./listCourse/LisCourseContainer";
export default function Home(props) {
  const [Coursecode, setCoursecode] = useState("BackEnd");
  useEffect(function () {
    const { actGetCatalogListAPI } = props;
    actGetCatalogListAPI();
  }, []);
  const handleClick = (maDanhMuc) => {
    setCoursecode(maDanhMuc);
    console.log(maDanhMuc);
  };
  const getCatalogListCourse = () => {
    let { catalogList } = props;
    if (catalogList) {
      return catalogList.map((item, index) => {
        return (
          <>
            {item.maDanhMuc == Coursecode ? (
              <>
                <ListCourseContainer
                  Coursecode={Coursecode}
                  Course={item.tenDanhMuc}
                  key={index}
                />
                <button onClick={() => handleClick(item.maDanhMuc)}>
                  {" "}
                  click
                </button>
              </>
            ) : (
              <>
                <ListCourseContainer Course={item.tenDanhMuc} key={index} />
                <button onClick={() => handleClick(item.maDanhMuc)}>
                  {" "}
                  click
                </button>
              </>
            )}
          </>
        );
      });
    }
  };
  // let { catalogList } = props;
  // console.log(catalogList);
  return (
    <div className="home">
      Page Home
      {getCatalogListCourse()}
      <PillListModuleContainer />
      <TileModuleContainer />
      <CricleModuleContainer />
    </div>
  );
}
