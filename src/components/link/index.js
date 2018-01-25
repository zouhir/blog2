import { h, Component } from "preact";
import style from "./style.scss";
import { Link } from "preact-router";

const LinkTag = ({ href, value }) => {
  return (
    <Link className="button" href={href}>
      {value}
    </Link>
  );
};

export default LinkTag;
