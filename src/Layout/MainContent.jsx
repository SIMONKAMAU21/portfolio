import "./MainContent.scss";
import LeftNav from "../Components/LeftNav";
import Upper from "../Components/Upper-main";
import Right from "../Components/Right";
function MainContent() {
  return (
    <div className="main1">
      <div className="upper-stage">
        <Upper />
      </div>
      <div className="lower-stage">
        <LeftNav />
        <Right />
      </div>
    </div>
  );
}
export default MainContent;
