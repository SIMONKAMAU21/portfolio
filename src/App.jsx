import "./App.scss";
import MainContent from "./Layout/MainContent";
import Navbar from "./Layout/Navbar";
import SideNav from "./Layout/SideNav";
import Right from "./Layout/RightNav";
import { BrowserRouter , Route,  } from "react-router-dom";
import Notifications from "./multi-pages/Notifications";
import Timeline from "./multi-pages/Timeline";
import { Routes } from "react-router-dom";
import Groups from "./multi-pages/Groups";
import Login from "./multi-pages/Login";
import Friends from "./multi-pages/Friends";
import Videos from "./multi-pages/Videos";
import Photos from "./multi-pages/Photos";
import Event from "./multi-pages/Events";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-container">
        <SideNav />
        <Right />
      </div>
      <Routes>
        <Route path="/Login"element={<Login/>}/>
        <Route path="/" element={<MainContent />} />
        <Route path="/Notification" element={<Notifications />} />
        <Route path="/Timeline" element={<Timeline />} />
        <Route path="/Groups" element={<Groups />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path = "/Photos"element ={<Photos/>}/>
        <Route path = "/Videos"element ={<Videos/>}/>
        <Route path="/Events" element = {<Event/>}/>
        
        </Routes>
    </BrowserRouter>
  );
}

export default App;
