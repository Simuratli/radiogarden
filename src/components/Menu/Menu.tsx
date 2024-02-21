import "../../styles/components/menu.scss";
import { MenuDropdown, MenuContent } from "./menuComponents";

function Menu() {
  return (
    <nav className="menu">
      <MenuDropdown />
      <MenuContent />
    </nav>
  );
}

export default Menu;
