import React from "react";
import "./Upper-groups.scss";
import search from "../assets/search.png";
import dots from "../assets/dots.png";
import Avatar4 from "../assets/Avatar4.png";
import Avatar5 from "../assets/Avatar5.png";
import Avatar6 from "../assets/Avatar6.png";
import Mask from "../assets/Mask Group.png";
import Mask1 from "../assets/Mask Group1.png";

function Uppergroups() {
  return (
    <div className="groupsG">
      {/* left-group-photo */}
      <div className="nav-group">
        <div>
          <h4>Groups</h4>
        </div>
        <div className="btn2">
          <img src={search} alt="nopic" />
          <button>+ Create New Group</button>
        </div>
      </div>
      <div className="suggestion">
        <div className="text">
          <h4>Suggested for you</h4>
          <p>Groups you might be intrested in </p>
        </div>
        <div className="link">
          <a href="http://">see all</a>
        </div>
      </div>
      {/* right-nav */}
      <div className="PHOTOS">
        <div className="right-group-photo">
          <div className="photos">
            <div className="photos-nav">
              <div className="photos-left">
                <img src={Avatar4} alt="" srcset="" />

                <div className="upper-text">
                  <h4>Ui/Ux Designer</h4>
                  <p>Banding.7 posts a day </p>
                </div>
              </div>
            </div>
            <div>
              <img src={dots} />
            </div>
          </div>
          <div className="IMAGE">
            <img src={Mask} alt="" srcset="" />
          </div>
          <div className="groups-footer">
            <button>join Group</button>
            <div className="small-images">
              <img src={Avatar5} alt="" srcset="" />
              <img src={Avatar6} alt="nopic" srcset="" />
            </div>
          </div>
        </div>

        <div className="left-group-photo">
          <div className="photos">
            <div className="photos-nav">
              <div className="photos-left">
                <img src={Avatar4} alt="" srcset="" />

                <div className="upper-text">
                  <h4>User Interface</h4>
                  <p>Jakarta.7 posts a day </p>
                </div>
              </div>
            </div>
            <div className="dots">
              <img src={dots} />
            </div>
          </div>
          <div className="IMAGE">
            <img src={Mask1} alt="" srcset="" />
          </div>
          <div className="groups-footer">
            <button>join Group</button>
            <div className="small-images">
              <img src={Avatar5} alt="" srcset="" />
              <img src={Avatar6} alt="nopic" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uppergroups;
