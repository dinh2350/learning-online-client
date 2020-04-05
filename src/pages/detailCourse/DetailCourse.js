import React from "react";
import "./DetailCourse.scss";
import EnterpriseNavContainer from "./enterpriseNav/EnterpriseNavContainer";
import MainContainer from "./main/MainContainer";
import { useParams } from "react-router-dom";
export default function DetailCourse() {
  let { courseCode } = useParams();
  console.log(useParams());
  return (
    <div className="DetailCourse">
      <EnterpriseNavContainer />
      <MainContainer />
    </div>
  );
}
