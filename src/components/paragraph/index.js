import { h, Component } from "preact";
import cx from "classnames";

import style from "./style.scss";

const Paragraph = ({
  children,
  align = "left",
  indent = false,
  small = false,
  uppercase = false,
  opacity = 1,
  noMargin = false
}) => {
  let classes = cx(
    style.p,
    small && style["small"],
    uppercase && style["uppercase"],
    indent && style["indent"]
  );
  return (
    <p
      className={classes}
      style={{
        opacity
      }}
    >
      {children}
    </p>
  );
};

export default Paragraph;
