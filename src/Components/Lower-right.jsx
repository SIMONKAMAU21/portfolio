import "./Lower-right.scss";
import Avatar from "../assets/Avatar.png";
import img1 from "../assets/img1.png";
import img from "../assets/img.png";
import heart from "../assets/heart.png";
import message from "../assets/message.png";
import share from "../assets/share.png";
import icon  from '../assets/icon.png'
const Lowerapp = () => {
  return (
    <div className="demo">
      <div className="left">
        <div className="image">
          <img src={Avatar} />
        </div>
        <div className="text">
          <h5>Angela Lee</h5>
          <p>56 min ago</p>
        </div>
      </div>
      <div className="para">
        <p>
          Here are some photography works that i made on weekend with <br />
          some of my friends,happy to that!
        </p>
      </div>
      <div className="bottom">
        <div>
          <img src={img} />
        </div>
        <div>
          <img src={img1} />
        </div>
      </div>
      <div className="most-bottom">
        <div className="div1">
          <img src={heart} alt="nopic" srcset="" />
          <span>2.6k</span>
        </div>
        <div className="div1">
          <img src={message} alt="nopic" srcset="" />
          <span>297 comments</span>
        </div>
        <div className="div1">
          <img src={share} alt="nopic" />
          <span>201 share</span>
        </div>
      </div>
      <div className="best-bottom">
        <div>
          <input type="text" placeholder="write your message..." />
        </div>
        <div>
          <img src={icon}  />
          {/* <img src={mood}  /> */}
        </div>
      </div>
    </div>
  );
};
export default Lowerapp;
