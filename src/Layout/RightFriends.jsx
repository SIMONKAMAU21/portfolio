import React from "react";
import "./LeftFriends.scss";
import Avatar from "../assets/Avatar.png";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar3.png";
import User4 from "../assets/User4.png";
import Avatar3 from "../assets/Avatar3.png";
import dots from "../assets/dots.png";

const Right = () => {
  const Lfriends = [
    {
      image: Avatar,
      name: "Jane cooper",
      Email: "@anglee",
      icon: dots,
      id: 1,
    },
    {
      image: Avatar1,
      name: "Esther Howard",
      Email: "@anglee",
      icon: dots,
      id: 1,
    },
    {
      image: Avatar2,
      name: "Jenny Wilson",
      Email: "@anglee",
      icon: dots,
      id: 1,
    },
    {
      image: Avatar3,
      name: "Robert Fox",
      Email: "@anglee",
      icon: dots,
      id: 1,
    },
    {
      image: User4,
      name: "Bassio cooper",
      Email: "@anglee",
      icon: dots,
      id: 1,
    },
    {
      image: Avatar,
      name: "Christin Waston",
      Email: "@anglee",
      icon: dots,
      id: 1,
    },
  ];
  return (
    <>
      <div className="friend-photo">
        {Lfriends &&
          Lfriends.map((item, index) => {
            return (
              <div className="photo4">
                <div className="friends-profile">
                  <div className="profile">
                    <img src={item.image} alt="" srcset="" />

                    <div className="friends-text">
                      <div className="name"> {item.name}</div>
                      <div className="text">{item.Email}</div>
                    </div>
                  </div>
                  <div className="dots">
                    <img src={item.icon} alt="" srcset="" />
                  </div>
                </div>

                <div className="button">
                  <button type="button">message</button>
                </div>
              </div>
            );
          })}
      </div>
      
    </>
  );
};

export default Right;
