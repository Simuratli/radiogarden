import { MenuContentCardEnumType } from "./menuComponent.types";
import { MenuContentCard } from "./";
import { MenuEnum } from "../../../store/menu";
import { useStore } from "../../../store";
import { useMapGl } from "../../../hooks/useMapGl";
function MenuContent() {
  const { current, setCurrent, selectedStation } = useStore();
  const { map } = useMapGl();

  const handleClickNavigate = () => {
    map.current.flyTo({
      center: selectedStation?.geo,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      duration: 1200,
    });
  };

  return (
    <div className="menu__content">
      <MenuContentCard
        onClick={() => {
          setCurrent(MenuEnum.COUNTRIES);
        }}
        active={current === MenuEnum.COUNTRIES}
        type={MenuContentCardEnumType.countries}
      />
      <MenuContentCard
        onClick={() => {
          setCurrent(MenuEnum.DISCOVER);
        }}
        active={current === MenuEnum.DISCOVER}
        type={MenuContentCardEnumType.discover}
      />
      <MenuContentCard
        onClick={() => {
          setCurrent(MenuEnum.ABOUT);
        }}
        active={current === MenuEnum.ABOUT}
        type={MenuContentCardEnumType.about}
      />
      <MenuContentCard
        onClick={handleClickNavigate}
        active={false}
        type={MenuContentCardEnumType.settings}
      />
    </div>
  );
}

export default MenuContent;
