import "./App.scss";
import MainContent from "./Layout/MainContent";
import Navbar from "./Layout/Navbar";
import SideNav from "./Layout/SideNav";
import Right from "./Layout/RightNav";
function App() {
  return (
    <>
      {/* {/*navbar*} */}
      <Navbar />
      <div className="container">
        <SideNav />
        <MainContent />
        <Right />
      </div>
    </>
  );
}

export default App;
