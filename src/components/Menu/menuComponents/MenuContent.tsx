import { MenuContentCardEnumType } from "./menuComponent.types";
import { MenuContentCard } from "./";
import { MenuEnum } from "../../../store/menu";
import { useStore } from "../../../store";
function MenuContent() {
  const { current, setCurrent, setOpen } = useStore();

  return (
    <div className="menu__content">
      <MenuContentCard
        onClick={() => {
          setOpen(true);
          setCurrent(MenuEnum.COUNTRIES);
        }}
        active={current === MenuEnum.COUNTRIES}
        type={MenuContentCardEnumType.countries}
      />
      <MenuContentCard
        onClick={() => {
          setOpen(true);
          setCurrent(MenuEnum.DISCOVER);
        }}
        active={current === MenuEnum.DISCOVER}
        type={MenuContentCardEnumType.discover}
      />
      <MenuContentCard
        onClick={() => {
          setCurrent(MenuEnum.ABOUT);
          setOpen(true);
        }}
        active={current === MenuEnum.ABOUT}
        type={MenuContentCardEnumType.about}
      />
      <MenuContentCard
        onClick={() => {
          setOpen(true);
          setCurrent(MenuEnum.SETTINGS);
        }}
        active={current === MenuEnum.SETTINGS}
        type={MenuContentCardEnumType.settings}
      />
    </div>
  );
}

export default MenuContent;
