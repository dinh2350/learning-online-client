import React from "react";
import "./TileModule.scss";
import imgTitleModule from "../../../assets/image/img-header/anh_title_module.svg";
import imgTitleModule2 from "../../../assets/image/img-header/anh_title_module_2.svg";
export default function TileModule() {
  return (
    <div className="TileModule">
      <div className="TileModule__item">
        <img src={imgTitleModule} />
        <div className="TileModule__item__info">
          <h2 className="TileModule__item__heading">Prove your skills</h2>
          <p className="TileModule__item__subheanding">
            Earn certificates to add to your LinkedIn profile.
          </p>
        </div>
      </div>
      <div className="TileModule__item">
        <img src={imgTitleModule2} />
        <div className="TileModule__item__info">
          <h2 className="TileModule__item__heading">Learn on your time</h2>
          <p className="TileModule__item__subheanding">
            Watch bite-sized videos or in-depth courses.
          </p>
        </div>
      </div>
    </div>
  );
}
