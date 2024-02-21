import React from "react";
import MenuCountriesListCard from "./MenuCountriesListCard";
import { MenuContentListPropTypes } from "./menuComponent.types";

function MenuContentList({ data, title }: MenuContentListPropTypes) {
  return (
    <div className="menu__countries">
      <h1 className="menu__countries__heading">{title}</h1>
      {data.map((item, index) => {
        return <MenuCountriesListCard key={index} text={item.country} />;
      })}
    </div>
  );
}

export default MenuContentList;
