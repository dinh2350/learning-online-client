import React from "react";
import "./DescribeInforDetailOverview.scss";
import { useParams, Link } from "react-router-dom";
import RelatedCoursesContainer from "./relatedCourses/RelatedCoursesContainer";
import imgG from "../../../../../../assets/image/img-header/g.jpg";
export default function DescribeInforDetailOverview(props) {
  let { coursecode } = useParams();
  const showRelated = () => {
    if (props.courseListByCatalog) {
      return (
        <div className="describe-info-detail-overview__related">
          <h2>Related courses</h2>{" "}
          {props.courseListByCatalog.map((item, key) => {
            return item.maKhoaHoc == coursecode ? (
              ""
            ) : (
              <Link to={item.maKhoaHoc}>
                {" "}
                <RelatedCoursesContainer
                  img={item.hinhAnh}
                  nameCourse={item.tenKhoaHoc}
                  Teacher={item.nguoiTao.hoTen}
                  Like={item.luotXem}
                />
              </Link>
            );
          })}
        </div>
      );
    }
  };

  const showOverview = () => {
    if (props.inforCourseCode) {
      return (
        <div className="describe-info-detail-overview__decriber">
          <h2>Course Detail</h2>
          <p>{props.inforCourseCode.moTa}</p>
        </div>
      );
    }
  };

  const intructorTeacher = () => {
    if (props.inforCourseCode) {
      return (
        <div className="describe-info-detail-overview__intructor">
          <h2>Intructor</h2>
          <div className="describe-info-detail-overview__avatar">
            <img src={imgG} /> <p>{props.inforCourseCode.nguoiTao.hoTen}</p>
          </div>
          <div className="describe-info-detail-overview__content">
            <p>
              Caroline Wong is the vice president of Cobalt.io, a cybersecurity
              services firm.
            </p>
            <br />
            <p>
              She is a strategic leader with strong communications skills,
              cybersecurity knowledge, and experience delivering global
              programs. Her close and practical information security knowledge
              stems from broad experience as a Cigital consultant, a Symantec
              product manager, and day-to-day leadership roles at eBay and
              Zynga. Caroline has been featured as an Influencer in the Women in
              IT Security issue of SC Magazine, named as one of the Top 10 Women
              in Cloud by CloudNOW, and received a Women of Influence Award in
              the One to Watch category from the Executive Women's Forum. She
              authored the popular textbook Security Metrics, A Beginner's
              Guide.
            </p>
          </div>
        </div>
      );
    }
  };
  const skillOfCourse = () => {
    return (
      <div className="describe-info-detail-overview__skill-course">
        <h2>Skills covered in this course</h2>
        <button>Cybersecurity</button>
        <button>Security Awareness</button>
      </div>
    );
  };
  return (
    <div className="describe-info-detail-overview">
      {showOverview()}
      {intructorTeacher()}
      {skillOfCourse()}
      {showRelated()}
    </div>
  );
}
