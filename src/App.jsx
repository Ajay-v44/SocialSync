import { useState } from "react";
import "./App.css";
import CreatePost from "./Components/CreatePOst/CreatePost";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import PostLists from "./Components/POstLists/PostLists";

import SideBar from "./Components/SideBar/SideBar";

function App() {
  const [selected, setSelected] = useState("createpost");
  return (
    <div className="d-flex">
      <SideBar selected={selected}/>
      <div className="d-block w-100">
        <NavBar />
        {selected === "home" ? <PostLists /> : <CreatePost />}

        <Footer />
      </div>
    </div>
  );
}

export default App;
