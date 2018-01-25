import { h, Component } from "preact";
import style from "./style.scss";

import Twitter from "../icons/twitter";
import Github from "../icons/github";

const SocialLinks = () => {
  return (
    <nav className={style.socialLinksNav}>
      <ul>
        <li>
          <a href="https://developers.google.com/experts/people/zouhir-chahoud" target="_blank" rel="noopener" className={style.gde} target="_blank" rel="noopener"  />
        </li>
        <li>
          <a href="https://github.com/zouhir" className={style.github} target="_blank" rel="noopener" />
        </li>
        <li>
          <a href="https://twitter.com/_zouhir" className={style.twitter} target="_blank" rel="noopener" />
        </li>
      </ul>
    </nav>
  );
};

export default SocialLinks;
