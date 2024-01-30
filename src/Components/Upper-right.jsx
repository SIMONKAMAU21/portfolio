import  "./Upper-right.scss";
import Avatar from '../assets/Avatar.png'
import VIDEOS from '../assets/VIDEOS.png'
import GROUPS from "../assets/GROUPS.png";
import PHOTOS from "../assets/PHOTOS.png";


 const Upperapp= ()=>{
   return(
      <div className="main-container2">
         <div className="container">

            <div className="upper-div">
               <div>
                  <img src={Avatar} />
               </div>
               <div>
                  <input type="text" placeholder="what's on your mind ?" />
               </div>
            </div>

            <div className="lower-div">
               <div className="images1">
                  <img src={VIDEOS} alt="" srcset="" />
                  <p>Live Video</p>
               <div className="images1">
                  <img src={PHOTOS} alt="" srcset="" />
                  <p>Image/Video</p>
               </div>
               <div className="images1">
                  <img src={GROUPS} alt="" srcset="" />
                  <p>Activity</p>
               </div>
            </div>
         </div>
      </div>
      </div>
   )
 }
 export default Upperapp;