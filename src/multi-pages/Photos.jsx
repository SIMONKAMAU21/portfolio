import React from "react";
import PhotosImages from '../Components/PhotosImages';
import './Photos.scss'

const Photos = () => {
  return (
    <div className="Photos-conTainer">
      <div className="photo-cont-header">
        <h3>Your Photos</h3>
        <p>. . . </p>
      </div>

      <div className="photo-selector">
        <div className="selector-list">
          <ul>
            <li>
              <a href="#">Photos About You</a>
            </li>
            <li>
              <a href="#">Your Photos</a>
            </li>
            <li>
              <a href="#">Album</a>
            </li>
          </ul>
        </div>
        <div className="num-photos">
          <h4>Total Photos</h4>
          <p> photos about you</p>
        </div>
      </div>
      <div className="photo-images12">
        <PhotosImages />
      </div>
    </div>
  );
};

export default Photos;
