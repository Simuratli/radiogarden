import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

function MenuDropdown() {
  const [open, setOpen] = useState(false);
  return (
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
            <ReactCountryFlag countryCode="DE" svg /> Germany
          </h1>
          <p>View all stations</p>
        </div>
      </div>
      <div className={`menu__dropdown__content ${open && "open"}`}>
        Any of content goes here
      </div>
    </div>
  );
}

export default MenuDropdown;
