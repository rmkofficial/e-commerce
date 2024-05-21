import { useState } from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaCloudMoon } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    const root = document.getElementById("root");

    if (theme) {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    } else {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    }
    setTheme(!theme);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row">
        <img className="logo" src="./src/images/logo.png" alt="logo" />
        <p className="logo-text">RMK</p>
      </div>
      <div className="flex-row">
        <input
          className="search-input"
          type="text"
          placeholder="Bir seyler ara"
        />
        <div>
          {theme ? (
            <CiLight className="icon" onClick={changeTheme} />
          ) : (
            <FaCloudMoon className="icon" onClick={changeTheme} />
          )}

          <CiShoppingBasket className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
