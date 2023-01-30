import Style from "./Navbar.module.css";

import IconSharce from "../../assets/icons8-search.svg";
import IconLogo from "../../assets/iconLogo.svg";

const Navbar = () => {
  return (
    <nav className={Style.navbar}>
      <img className={Style.imageIcon} src={IconLogo} alt="Icon Imozi" />
      <img className={Style.imageIcon} src={IconSharce} alt="Icon Imozi" />
      <p className={Style.title}>er.....</p>
    </nav>
  );
};

export default Navbar;
