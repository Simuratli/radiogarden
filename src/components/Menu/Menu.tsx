import React, { useState } from "react";
import "../../styles/components/menu.scss";
import ReactCountryFlag from "react-country-flag";
import Circle from "../../assets/Circle";
import Settings from "../../assets/Settings";
import Info from "../../assets/Info";
import Map from "../../assets/Map";


function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="menu">
      <div className="menu__dropdown">
        <div
          className="menu__dropdown__header"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <div className="menu__dropdown__header__icon">
            <span></span>
          </div>
          <div className="menu__dropdown__header__text">
            <h1>
              <ReactCountryFlag countryCode="US" svg /> Germany
            </h1>
            <p>View all stations</p>
          </div>
        </div>
        <div className={`menu__dropdown__content ${open && "open"}`}>
          Any of content goes here
        </div>
      </div>
      <div className="menu__content">
          <div className="menu__content__card">
            <Map/>
            <h2>Countries</h2>
          </div>
          <div className="menu__content__card">
            <Circle/>
            <h2>Discover</h2>
          </div>
          <div className="menu__content__card">
            <Info/>
            <h2>About</h2>
          </div>
          <div className="menu__content__card">
            <Settings/>
            <h2>Settings</h2>
          </div>
      </div>
    </nav>
  );
}

export default Menu;
