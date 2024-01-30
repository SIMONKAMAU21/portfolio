import './Lower.scss';
import image from '../assets/image.png';
import image2 from '../assets/image2.png';


function Lower() {


   return (
      <div className="main1">
         <div className="nav1">
            <p>photos</p>
            <a href="http://">see all</a>
         </div>
         <div className="photos">
            <img src={image} alt="" />
            <img src={image2} alt="" />
         </div>
      </div>
   );
}
export default Lower