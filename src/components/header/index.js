import { h, Component } from "preact";

import { Link } from 'preact-router';

import style from "./style.scss";

import Logo from "../logo";

class Footer extends Component {
  render({color}) {
    return (
      <header className={style.header}>
        <div className={style.logo}>
          <Link href="/">
            <Logo fill={color} stroke={color}/>
          </Link>
        </div>
      </header>
    );
  }
}

export default Footer;
