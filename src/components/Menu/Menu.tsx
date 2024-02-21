import "../../styles/components/menu.scss";
import { MenuDropdown, MenuContent } from "./menuComponents";
import { MenuPropTypes } from "./Menu.types";

function Menu({ station }: MenuPropTypes) {
  return (
    <nav className="menu">
      <MenuDropdown
        flag={station?.flag}
        city={station?.title}
        country={station?.country}
      />
      <MenuContent />
    </nav>
  );
}

export default Menu;
