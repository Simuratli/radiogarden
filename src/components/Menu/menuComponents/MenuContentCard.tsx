import React from "react";
import Circle from "../../../assets/Circle";
import Settings from "../../../assets/Settings";
import Info from "../../../assets/Info";
import Map from "../../../assets/Map";

import {
  MenuContentCardType,
  MenuContentCardEnumType,
} from "./menuComponent.types";

function MenuContentCard({ type, active }: MenuContentCardType) {
  switch (type) {
    case MenuContentCardEnumType.about:
      return (
        <div className={`menu__content__card ${active && "active"}`}>
          <Info />
          <h2>About</h2>
        </div>
      );
    case MenuContentCardEnumType.countries:
      return (
        <div className={`menu__content__card ${active && "active"}`}>
          <Map />
          <h2>Countries</h2>
        </div>
      );
    case MenuContentCardEnumType.settings:
      return (
        <div className={`menu__content__card ${active && "active"}`}>
          <Settings />
          <h2>Settings</h2>
        </div>
      );
    case MenuContentCardEnumType.discover:
      return (
        <div className={`menu__content__card ${active && "active"}`}>
          <Circle />
          <h2>Discover</h2>
        </div>
      );
    default:
      return <></>;
  }
}

export default MenuContentCard;
