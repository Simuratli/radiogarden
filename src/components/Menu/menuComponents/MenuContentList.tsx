import React from "react";
import MenuCountriesListCard from "./MenuCountriesListCard";
import { MenuContentListPropTypes } from "./menuComponent.types";

function MenuContentList({ data, title }: MenuContentListPropTypes) {
  return (
    <div className="menu__countries">
      <h1 className="menu__countries__heading">{title}</h1>
      {data.map((item) => {
        return <MenuCountriesListCard text={item.country} />;
      })}
    </div>
  );
}

export default MenuContentList;
