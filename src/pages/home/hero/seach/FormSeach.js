import React from "react";
import "./FormSeach.scss";
export default function FormSeach() {
  return (
    <section className="FormSeach">
      <div className="FormSeach__menu">
        <ul>
          <li>
            <button>Jobs</button>
          </li>
          <li>
            <button type="button">People</button>
          </li>
        </ul>
      </div>
      <div className="FormSeach__input"></div>
    </section>
  );
}
