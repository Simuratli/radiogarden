import React, { useState } from "react";
import "../../styles/components/menu.scss";
import ReactCountryFlag from "react-country-flag";

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
          content datatatat
        </div>
      </div>
      <div className="menu__content">icons goes here</div>
    </nav>
  );
}

export default Menu;
