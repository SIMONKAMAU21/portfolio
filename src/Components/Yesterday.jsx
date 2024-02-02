import "./Yesterday.scss";
import User1 from "../assets/User1.png";
import User2 from "../assets/User2.png";

const Yesterday = () => {
  const Yesterday = [
    {
      name: "Esther Howard",
      image: User1,
      p: "Started following you ",
    },
    {
      name: "Kathyryn Murphy",
      image: User2,
      p: "joined the Ui official group",
    },
  ];
  return (
    <>
      <div className="yesterday">
        <div className="top">
          <h5>YESTERDAY</h5>
        </div>
        {Yesterday &&
          Yesterday.map((item, index) => {
            return (
              <div className="yesterday-left" key={index}>
                <div className="card">
                  <img src={item.image} alt="" srcset="" />
                  <div className="yesterday-text">
                    <div className="name"> {item.name}</div>
                    <div className="p">{item.p}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Yesterday;
