import React, { useState } from "react";
import "./ListCourse.scss";
import imgDownarrow from "../../../../assets/image/img-header/down-arrow.svg";
export default function ListCourse() {
  const [listCourse, setlisCourse] = useState([
    { title: "Introduction", isShowList: false },
    { title: "1. Office Security", isShowList: false },
    { title: "2. Computer Security", isShowList: false },
    { title: "3. Mobile Security", isShowList: false },
    { title: "4. Email Security", isShowList: false },
    { title: "5. Wireless Security", isShowList: false },
    { title: "6. Account Security", isShowList: false },
    { title: "7. Data Security", isShowList: false },
    { title: "Conclusion", isShowList: false },
  ]);
  const handleClickShow = (key, item) => {
    let listCourses = listCourse;
    setlisCourse([
      ...listCourses.slice(0, key),
      { ...item, isShowList: !item.isShowList },
      ...listCourses.slice(key + 1),
    ]);
  };
  const showListCourse = () => {
    return listCourse.map((item, key) => {
      return (
        <li className="ListCourse__item">
          <div
            onClick={() => handleClickShow(key, item)}
            key={key}
            className="ListCourse__item__content"
          >
            <span>{item.title}</span>
            <img src={imgDownarrow} />
          </div>
          {item.isShowList && (
            <div className="text">
              <ul>
                <li>Nguyen Quang Phuoc</li>
                <li>Nguyen Quang Phuoc</li>
                <li>Nguyen Quang Phuoc</li>
                <li>Nguyen Quang Phuoc</li>
                <li>Nguyen Quang Phuoc</li>
                <li>Nguyen Quang Phuoc</li>
              </ul>
            </div>
          )}
        </li>
      );
    });
  };

  return (
    <div className="ListCourse">
      <div className="ListCourse__wrap">
        <h1 className="ListCourse__title">Contents</h1>
        <ul className="ListCourse__list">{showListCourse()}</ul>
      </div>
    </div>
  );
}
