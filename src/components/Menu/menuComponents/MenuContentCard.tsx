import React from "react";
import Circle from "../../../assets/Circle";
import Navigate from "../../../assets/Navigate";
import Info from "../../../assets/Info";
import Map from "../../../assets/Map";

import {
  MenuContentCardType,
  MenuContentCardEnumType,
} from "./menuComponent.types";
import { useMapGl } from "../../../hooks/useMapGl";
import { useStore } from "../../../store";

function MenuContentCard({ type, active }: MenuContentCardType) {
  const { selectedStation } = useStore();
  const { map } = useMapGl();

  const handleClickNavigate = () => {
    map.current.flyTo({
      center: selectedStation?.geo,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      duration: 1200,
    });
  };

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
        <div
          onClick={handleClickNavigate}
          className={`menu__content__card ${active && "active"}`}
        >
          <Navigate />
          <h2>Navigate</h2>
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
