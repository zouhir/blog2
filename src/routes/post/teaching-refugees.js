import { h, Component } from "preact";
import style from "./style";
import cx from "classnames";

import Markup from "preact-markup";

import Header from "../../components/header";

import SocialLinks from "../../components/social-links";
import PostItem from "../../components/post-item";

import Hero from "../../components/hero";

import content from "../../content/teaching-arabic-speaking-refugees-javascript-programming.md";

import parser from "../../lib/parse";

let { meta, body } = parser(content);

export default class Profile extends Component {
  // gets called when this route is navigated to
  componentDidMount() {}

  // gets called just before navigating away from the route
  componentWillUnmount() {}

  // Note: `user` comes from the URL, courtesy of our router
  render() {
    return (
      <div class={cx(style.post, style.sky, "pinkflood", "post")}>
        <Header color={"#ac7987"} />
        <Hero img={meta.hero} />
        <article>
          <p className="mini-title mb-10">{meta.date}</p>
          <h1>{meta.title}</h1>
          <Markup markup={body} allow-scripts trim={false} type="html" />
        </article>
      </div>
    );
  }
}
