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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <SideNav />
        <Right />
      </div>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/Notification" element={<Notifications />} />
        <Route path="/Timeline" element={<Timeline />} />
        <Route path="/Groups" element={<Groups />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
