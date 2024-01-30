import "./Intro.scss";
import dots from "../assets/dots.png";
import map from "../assets/map-pin.png";
import ink from "../assets/ink.png";
import calendar from "../assets/calendar.png";
import briefcase from "../assets/briefcase.png";

const Intro = () => {
  return (
    <>
      <div className="upper">
        <div className="nav">
          <div>
            <p>intro</p>
          </div>
          <div>
            <img src={dots} alt="nopic" />
          </div>
        </div>
        <div className="text">
          <p>
            i am a expirienced joiner with
            <br /> well developed skills
          </p>
        </div>
        <div className="maps">
          <div className="map1">
            <img src={map} alt="" />
            <p>2972 west heimer rd</p>
          </div>
          <div className="map1">
            <img src={briefcase} alt="" />
            <p>Binford ltd.</p>
          </div>
          <div className="map1">
            <img src={calendar} alt="" />
            <p>september 24,2017</p>
          </div>
          <div className="map1">
            <img src={ink} alt="" />
            <p>dribble.com/Angela</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Intro;
