import { h, Component } from "preact";
import style from "./style.scss";

import LinkTag from "../link";

const PostItem = ({ title, link, date }) => {
  return (
    <div className="post-li" href="#">
      <p className="mini-title mb-10">{date}</p>
      <a href={link} className={style.limitWidth}>
        <h2 className="mb-15">{title}</h2>
      </a>
      <LinkTag value="Read More" href={link} />
    </div>
  );
};

export default PostItem;
