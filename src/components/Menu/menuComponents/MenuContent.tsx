import { MenuContentCardEnumType } from "./menuComponent.types";
import { MenuContentCard } from "./";

function MenuContent() {
  return (
    <div className="menu__content">
      <MenuContentCard type={MenuContentCardEnumType.countries} />
      <MenuContentCard type={MenuContentCardEnumType.discover} />
      <MenuContentCard type={MenuContentCardEnumType.about} />
      <MenuContentCard type={MenuContentCardEnumType.settings} />
    </div>
  );
}

export default MenuContent;
