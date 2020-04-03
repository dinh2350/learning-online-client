import React from "react";
import "./DetailCourse.scss";
import EnterpriseNavContainer from "./enterpriseNav/EnterpriseNavContainer";
import MainContainer from "./main/MainContainer";
export default function DetailCourse() {
  return (
    <div className="DetailCourse">
      <EnterpriseNavContainer />
      <MainContainer />
    </div>
  );
}
