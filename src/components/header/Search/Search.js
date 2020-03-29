import React from "react";
import "./Search.scss";
import search from "../../../assets/image/img-header/search.svg";
import download from "../../../assets/image/img-header/download.svg";
export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="text" placeholder="Search here" />
        <button>
          <img src={search} />
        </button>
      </form>
      <a href="#">
        <img src={download} />
      </a>
    </div>
  );
}
