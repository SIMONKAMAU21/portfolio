import "./Today.scss";
import User1 from "../assets/User1.png";
import User2 from "../assets/User2.png";
import User3 from "../assets/User3.png";
import User4 from "../assets/User4.png";
import User5 from "../assets/User5.png";

const Today = () => {
  const today = [
    {
      name: "Bassie Cooper",
      image: User1,
      p: "Started following you ",
    },
    {
      name: "Marvin mc Kinney",
      image: User2,
      p: "joined the Ui official group",
    },
    {
      name: "Courtney Henry",
      image: User3,
      p: "joined the Ui official group",
    },
    {
      name: "Darrell Steward",
      image: User4,
      p: "joined the Ui official group",
    },
    {
      name: "Esther Howard",
      image: User5,
      p: "joined the Ui official group",
    },
  ];
  return (
    <>
      <div className="today">
        <div className="top">
        <h5>TODAY</h5>

        </div>
        {today &&
          today.map((item, index) => {
            return (
              <div className="today-left" key={index}>
                <div className="card">
                  <img src={item.image} alt="" srcset="" />
                  <div className="today-text">
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
export default Today;
