import "./App.css";
import {
  Person,
  Notifications,
  Chat,
  FavoriteRounded,
  QuestionMark,
  Add,
} from "@mui/icons-material";
import MenuContainer from "./components/MenuContainer";
import Pin from "./components/Pin";
import { useEffect } from "react";
import Data from "./components/Data";

function App() {
  useEffect(() => {
    const allIcons = document.querySelectorAll(".iconContainer");

    function setMenuActive() {
      allIcons.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allIcons.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);

  return (
    <div className="App">
      <div className="menuContainer">
        <img className="logo" src="" alt="" />
        <div className="subMenu">
          <div>
            <MenuContainer icon={<Person />} />
            <MenuContainer icon={<Notifications />} />
            <MenuContainer icon={<Chat />} />
          </div>
          <div>
            <MenuContainer icon={<FavoriteRounded />} />
          </div>
          <div>
            <MenuContainer icon={<QuestionMark />} />
            <MenuContainer icon={<Add />} />
          </div>
        </div>
      </div>
      <main>
        <div className="searchBox">
          <input placeholder="Search..." type="text"></input>
        </div>
        <div className="mainContainer">
          {Data && Data.map((data) => 
          <Pin key={data.id} pinSize={data.size} image={data.imgSrc} name={data.name} link={data.link} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
