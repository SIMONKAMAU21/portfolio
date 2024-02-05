import React from "react";
import boxes from "../assets/unsplash__C5zsV_p-YI.png";
import persons from "../assets/unsplash__KaMTEmJnxY.png";
import star from "../assets/unsplash_TLD6iCOlyb0.png";
import playbtn from "../assets/unsplash_vbAEHCrvXZ0.png";
import gallary from "../assets/unsplash_vbAEHCrvXZ0.png";
import toolbox from "../assets/unsplash_QRKJwE6yfJo.png";
import "./PhotosImages.scss";

const PhotosImages = () => {
  const menuitems = [
 
    {
      icon: persons,
    },

    {
      icon: playbtn,
    },
    {
      icon: gallary,
    },
    {
      icon: toolbox,
    },
    {
      icon: boxes,
    },
    {
      icon: persons,
    },
    {
      icon: star,
    },
    {
      icon: playbtn,
    },
    {
      icon: gallary,
    },
    {
      icon: toolbox,
    },
 
    {
      icon: persons,
    },
    {
      icon: star,
    },
    {
      icon: playbtn,
    },
    {
      icon: gallary,
    },
 
  
  
  ];
  return (
    <div className="Eventcontainer">
      {menuitems.map((item, index) => (
        <div className="image-card" key={index}>
          <img src={item.icon} alt={`Event icon ${index}`} />
          {/* <img src={item.icon} alt={`Event icon ${index}`} /> */}
          {/* <img src={item.icon} alt={`Event icon ${index}`} /> */}
          {/* <img src={item.icon} alt={`Event icon ${index}`} /> */}
        </div>
      ))}
    </div>
  );
};

export default PhotosImages;
