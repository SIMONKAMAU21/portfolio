import "./Upper-main.scss";
import photo from "../assets/photo.png";
import Avatar from "../assets/Avatar.png";

const Upper = () => {
  return (
    <>
      <div className="main">
        <div className="upper-main">
          <img src={photo} alt="nopic" />
          <div className="main-profile">
            <div className="left">
              <img src={Avatar} alt="nopic" />
              <div className="text">
                <p>Angela lee</p>
                <h4>@anglee</h4>
              </div>
            </div>
            <div className="likes">
              <div>
                <p>POSTS</p>
                <h6>683</h6>
              </div>
              <div>
                <p>FRIENDS</p>
                <h6>5.7k</h6>
              </div>
              <div>
                <p>PHOTOS</p>
                <h6>296</h6>
              </div>
              <div>
                <p>LIKES</p>
                <h6>10.7k</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upper;
