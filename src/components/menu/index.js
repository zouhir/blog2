import { h, Component } from "preact";
import style from "./style.scss";

import MenuIcon from "../icons/menu";

const Menu = ({ color = "blue" }) => {
  return (
    <button className={style.burger + " " + style[color]}>
      <MenuIcon />
    </button>
  );
};

export default Menu;
