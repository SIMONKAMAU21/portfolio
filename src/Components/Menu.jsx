import "./Menu.scss";
import { NavLink } from "react-router-dom";
import EVENTS from "../assets/EVENTS.png";
import FRIENDS from "../assets/FRIENDS.png";
import GROUPS from "../assets/GROUPS.png";
import PHOTOS from "../assets/PHOTOS.png";
import TIMELINE from "../assets/TIMELINE.png";
import VIDEOS from "../assets/VIDEOS.png";
function Menu() {
  const Menu = [
    // {
    //   title: "Notification",
    //   icon: TIMELINE,
    //   path: "/Notification",
    //   id:1,
    // },
    {
      title: "Timeline",
      icon: TIMELINE,
      path: "/Timeline",
      id:2,
    },
    {
      title: "Friends",
      icon: FRIENDS,
      path: "/Friends",
      id:3,
    },
    {
      title: "Groups",
      icon: GROUPS,
      path: "/Groups",
      id:4,
    },

    {
      title: "Videos",
      icon: VIDEOS,
      path: "/Videos",
      id:5,
    },
    {
      title: "Photos",
      icon: PHOTOS,
      path: "/Photos",
      id:6,
    },
    {
      title: "Events",
      icon: EVENTS,
      value: 10,
      path: "/Events",
      id:7,
    },
  ];
  return (
    <div className="Menu">
      <h4>MENU</h4>
      {Menu &&
        Menu.map((item, index) => {
          return (
            <div className="menu">
              <NavLink
                key={index}
                to={item.path}
                className="menu-icons"
                activeClassName="active"
                style={{ textDecoration: "none", fontWeight: "700" }}
              >
                <div className="menu-left">
                  <img src={item.icon} />
                  {item.title}
                  <span
                    style={{
                      color: "white",
                      background: "red",
                      borderRadius: "50%",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              </NavLink>
            </div>
          );
        })}
    </div>
  );
}
export default Menu;
