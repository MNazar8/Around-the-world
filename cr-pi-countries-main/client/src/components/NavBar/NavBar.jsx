import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/form" className={style.add_activity}>Add your activity</Link>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
