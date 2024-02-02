import "./Navbar.scss";
import logo from "../assets/logo.png";
import Notification from "../assets/notification.png";
import Avatar from "../assets/Avatar.png";
import Chevron from "../assets/chevron-down.png";
import message from "../assets/message.png";
import search from "../assets/search.png";
import Notifications from "../multi-pages/Notifications";
import { useState } from "react";
// import { useEffect } from "react";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    console.log('hello world');
    setClick(!click);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="nopic" />
        <h2>Haiphonic</h2>
      </div>

      <div className="nav-body">
        <div className="input">
          <img src={search} alt="" srcset="" />
          <input type="text" placeholder="search..." />
        </div>

        <div className="nav-body-right">
          <img className="message" src={message} alt="nopic" srcset="" />
          <span onClick={handleClick}>

          <img src={Notification} alt="nopic" />
          {click && <Notifications closeNotification={handleClick}/>}
          </span>
          <div className="userAvator">
            <img src={Avatar} alt="nopic" />
            <div>
              <button type="button" >
                <img src={Chevron} alt="nopic" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
