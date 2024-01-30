import React from "react";
import "./Groups.scss";
import Avatar4 from "../assets/Avatar4.png";
import Avatar5 from "../assets/Avatar5.png";
import Avatar6 from "../assets/Avatar6.png";
function Groups() {
  const Groups = [
    {
      name: "Design Enthusiast",
      IMAGE: Avatar4,
    },
    {
      name: "ui official",
      IMAGE: Avatar5,
    },
    {
      name: "web Disigner",
      IMAGE: Avatar6,
    },
  ];
  return (
    <div className="groups">
      <div className="conc">
        <h4>GROUPS</h4>
        <a href="http://">see all</a>
      </div>{" "}
      {Groups &&
        Groups.map((item, index) => {
          return (
            <div className="Groups" key={index}>
              <div className="Groups-left">
                <img src={item.IMAGE} alt={item.name} />
                {item.name}
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Groups;
