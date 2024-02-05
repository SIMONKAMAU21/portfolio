import React from "react";
import "./LeftFriends.scss";
import User from "../assets/User.png";
import User1 from "../assets/User1.png";
import User2 from "../assets/User3.png";
import User4 from "../assets/User4.png";
import User3 from "../assets/User3.png";
import dots from "../assets/dots.png";

const Left = () => {
  const Lfriends = [
    {
      image: User,
      name: "Jane cooper",
      Email: "@anglee",
      icon: dots,
      id: 1,
    },
    {
      image: User1,
      name: "Angela lee",
      Email: "@anglee",
      icon: dots,
      id: 1,
    },
    {
      image: User2,
      name: "Jenny Wilson",
      Email: "@anglee",
      icon: dots,
      id: 1,
    },
    {
      image: User3,
      name: "Cody Fisher",
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
      image: User,
      name: "Brooklyn Simmons",
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

export default Left;
