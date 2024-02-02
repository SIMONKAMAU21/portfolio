import React from "react";
import "./Lower-groups.scss";
import pen from "../assets/pen.png";
import phone from "../assets/phone.png";
import Avatar5 from "../assets/Avatar5.png";

function Lowergroups() {
  return (
    <div className="lower-group">
      <div className="lower-nav">
        <div>
          <img src={Avatar5} alt="" srcset="" />
        </div>
        <div className="lower-text">
          <h4>Design Enthusist</h4>
          <p>Angela lee .56 min ago</p>
        </div>
      </div>
      <div className="paragraph">
        <p>
          Conduct desighn process practices across projects such as gathering
          insights ,validating problem & <br />
          solution,delivering multiple fidelity levels of design ,ensure the
          final design is implement properly.
        </p>
      </div>
      <div className="Images8">
        <div>
          <img src={pen} alt="" srcset="" />
        </div>
          <div> <img src={phone} alt="" srcset="" />
          </div>
      </div>
    </div>
  );
}

export default Lowergroups;
