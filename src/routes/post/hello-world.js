import { h, Component } from "preact";
import style from "./style";
import cx from "classnames";

import Header from "../../components/header";
import Headline from "../../components/headline";
import Paragraph from "../../components/paragraph";
import SocialLinks from "../../components/social-links";
import PostItem from "../../components/post-item";
import Hr from "../../components/Hr";
import Hero from "../../components/hero";

import Markup from "preact-markup";

import content from "../../content/hello-world.md";
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
      <div class={cx(style.post, "skyscan", "post")}>
        <Header color="rgb(179, 218, 255)" />
        <Hero img={meta.hero} />
        <article>
          <p className="mini-title">{meta.date}</p>
          <h1>{meta.title}</h1>
          <Markup
            markup={body}
            allow-scripts
            trim={false}
            components={{ Paragraph, Headline, Hr }}
            type="html"
          />
        </article>
      </div>
    );
  }
}
