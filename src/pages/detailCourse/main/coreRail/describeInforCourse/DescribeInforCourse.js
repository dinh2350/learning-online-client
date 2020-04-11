import React, { useState } from "react";
import "./DescribeInforCourse.scss";
import DescribeInforDetailTrascriptContainer from "./describeInforDetailTrascript/DescribeInforDetailTrascriptContainer";
import DescribeInforDetailOverviewContainer from "./describeInforDetailOverview/DescribeInforDetailOverviewContainer";
export default function DescribeInforCourse() {
  let [listInfor, setlistInfor] = useState([
    "Overview",
    "Transcrips",
    "Exserise Files",
    "View Offline",
  ]);
  let [isChooseContentTab, setisChooseContentTab] = useState("Overview");
  const handleClickShowInfor = (item) => {
    setisChooseContentTab(item);
  };
  const showListInfor = () => {
    return listInfor.map((item, key) => {
      return (
        <button
          className={`describe-infor-course__btn ${
            item === isChooseContentTab
              ? "describe-infor-course__btn-choose"
              : ""
          }`}
          onClick={() => handleClickShowInfor(item)}
          key={key}
        >
          {item}
        </button>
      );
    });
  };
  const showListInforItem = () => {
    if (isChooseContentTab == "Overview") {
      return <DescribeInforDetailOverviewContainer />;
    } else if (isChooseContentTab == "Transcrips") {
      return <DescribeInforDetailTrascriptContainer />;
    } else {
      return <div>Không có dử liệu</div>;
    }
  };
  return (
    <div className="describe-infor-course">
      <div className="describe-infor-course__wrap">
        <div className="describe-infor-course__btn-group">
          {showListInfor()}
        </div>
        <div>{showListInforItem()}</div>
      </div>
    </div>
  );
}
