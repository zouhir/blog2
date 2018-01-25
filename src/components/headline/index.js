import { h, Component } from "preact";
import cx from "classnames";
import style from "./style.scss";

const Headline = ({ children, h1 = false, indent = false }) => {
  let classes = cx(h1 && style.h1, !h1 && style.h2, indent && style["indent"]);
  if (h1 === true) {
    return <h1 className={classes}>{children}</h1>;
  }
  return <h1 className={classes}>{children}</h1>;
};

export default Headline;
