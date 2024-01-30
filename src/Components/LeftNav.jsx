import "./LeftNav.scss";
import Complete from "./Complete";
import Intro from "./Intro";
import Lower from "../Components/Lower";

const LeftNav = () => {
  return (
    <>
    <div className="left1">

<div className="compelete">
<Complete />
</div>   
<div className="intro">
<Intro />
</div>     
<div className="lower">
<Lower />
</div>
    </div>
    </>
  );
};
export default LeftNav
