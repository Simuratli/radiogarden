import { MenuContentCardEnumType } from "./menuComponent.types";
import { MenuContentCard } from "./";

function MenuContent() {
  return (
    <div className="menu__content">
      <MenuContentCard active={true} type={MenuContentCardEnumType.countries} />
      <MenuContentCard active={false} type={MenuContentCardEnumType.discover} />
      <MenuContentCard active={false} type={MenuContentCardEnumType.about} />
      <MenuContentCard active={false} type={MenuContentCardEnumType.settings} />
    </div>
  );
}

export default MenuContent;
