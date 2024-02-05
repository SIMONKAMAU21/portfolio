import React from "react";
import "./Contacts.scss";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import Avatar7 from "../assets/Avatar.png";
function Contacts() {
  const Contacts = [
    {
      name: "Wade Wrren",
      IMAGE: Avatar1,
      id:1,
    },
    {
      name: "Jane Cooper",
      IMAGE: Avatar7,
      id:2,
    },
    {
      name: "Esther Howard",
      IMAGE: Avatar2,
      id:3,
    },

    {
      name: "Cameron Williamson",
      IMAGE: Avatar3,
      id:4,
    },
    {
      name: "Brooklyn Simmons",
      IMAGE: Avatar7,
      id:5,
    },
  ];
  return (
    <div className="Contacts1">
      <div className="conc">
        <h4>CONTACTS</h4>
        <a href="http://">see all</a>
      </div>{" "}
      {Contacts &&
        Contacts.map((item, index) => {
          return (
            <div className="Contacts" key={index}>
              <div className="Contacts-left">
                <img src={item.IMAGE} alt={item.name} />
                {item.name}
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Contacts;
