import { h, Component } from "preact";

import style from "./style.scss";

const Hero = ({img}) => {
  return <div className={style.hero} style={{backgroundImage: `url(${img})`}} />;
};

export default Hero;
