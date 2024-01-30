import "./RightNav.scss";
import Pages from "../Components/Pages";
import Contacts from "../Components/Contacts";
import Groups from "../Components/Groups";
const Right = () => {
  return (
    <div className="container1">

      <div className="pages">
        <Pages/>
      </div>
      <div className="contacts-page">
        <Contacts/>
      </div>
      <div className="groups-page">
        <Groups />
      </div>
    </div>
    
  );
};
export default Right;
