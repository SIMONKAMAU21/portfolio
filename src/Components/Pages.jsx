import "./Pages.scss";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";

const Pages = () => {
  const Pages = [
    {
      name: "Website Design",
      IMAGE: first,
    },
    {
      name: "Mobile Design",
      IMAGE: third,
    },
    {
      name: "Product Design",
      IMAGE: second,
    },
  ];
  return (
    <div className="Pages">
      <div className="Conc">
        <div>
          <h4>Your pages</h4>
        </div>
        <a href="http://">see all</a>
      </div>
      {Pages &&
        Pages.map((item, index) => {
          return (
            <div className="Pages" key={index}>
              <div className="Pages-left">
                <img src={item.IMAGE} alt={item.name} />
                {item.name}
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Pages;
