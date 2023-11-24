import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="d-flex">
      <SideBar />
    <div className="d-block w-100">
    <NavBar />
      <Footer />
    </div>
    </div>
  );
}

export default App;
