import { h } from "preact";
import cx from "classnames";

import style from "./style.scss";

const Section = ({ children, dir = "column", color = "aqua" }) => {
  let classes = cx(style.fullHeight, style[dir], style[color]);
  return <div className={classes}>{children}</div>;
};

export default Section;
