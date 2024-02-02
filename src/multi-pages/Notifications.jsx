import "./Notifications.scss";
import close from "../assets/close.png";
import Today from "../Components/Today";
import Yesterday from "../Components/Yesterday";

function Notifications({ closeNotification }) {
  return (
    <>
      <div className="notification-Main">
        <div className="notification">
          <h6>Notifications</h6>
          <button onClick={closeNotification}>{close}</button>
        </div>

        <div className="btn">
          <button type="button">All notifications</button>
          <button type="button">Unread</button>
        </div>
        <div className="today">
          <Today />
        </div>
        <div className="yesterday">
          <Yesterday />
        </div>
      </div>
    </>
  );
}
export default Notifications;
