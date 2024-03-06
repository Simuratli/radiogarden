import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { MenuContentList, MenuAboutCard } from "./";
import { MenuDropdownPropType } from "./menuComponent.types";
import { useStore } from "../../../store";
import { MenuEnum } from "../../../store/menu";

function MenuDropdown({ country, city, flag }: MenuDropdownPropType) {
  const { stations, open, setOpen, current } = useStore();

  const showSpesificTab = () => {
    switch (current) {
      case MenuEnum.ABOUT:
        return <MenuAboutCard key={Math.random()} />;
      case MenuEnum.COUNTRIES:
        return (
          <MenuContentList
            key={Math.random()}
            title={"List of countries"}
            data={stations}
          />
        );
      case MenuEnum.DISCOVER:
        return (
          <MenuContentList
            key={Math.random()}
            title={"List of Radios"}
            data={stations}
          />
        );
      default:
        return (
          <MenuContentList
            key={Math.random()}
            title={"List of countries"}
            data={stations}
          />
        );
    }
  };

  return (
    <div className="menu__dropdown">
      <div
        className="menu__dropdown__header"
        onClick={() => {
          setOpen(!open);
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
        {showSpesificTab()}
      </div>
    </div>
  );
}

export default MenuDropdown;
