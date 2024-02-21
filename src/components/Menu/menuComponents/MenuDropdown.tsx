import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { MenuAboutCard, MenuContentList } from "./";
import { MenuDropdownPropType } from "./menuComponent.types";

function MenuDropdown({ country, city, flag }: MenuDropdownPropType) {
  const countries = [
    {
      country: "Angola",
    },
    {
      country: "Brazil",
    },
    {
      country: "Japan",
    },
  ];

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
            <ReactCountryFlag countryCode={flag ? flag : "JP"} svg />{" "}
            {city ? city : "Select Radio Station"}
          </h1>
          <p>{country ? country : "View all stations"}</p>
        </div>
      </div>
      <div className={`menu__dropdown__content ${open && "open"}`}>
        {/* <MenuAboutCard/> */}
        <MenuContentList title={"List of countries"} data={countries} />
      </div>
    </div>
  );
}

export default MenuDropdown;
