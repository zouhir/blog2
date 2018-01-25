import { h, Component } from "preact";
import style from "./style";
import cx from "classnames";

import Markup from "preact-markup";

import Header from "../../components/header";
import Headline from "../../components/headline";
import Paragraph from "../../components/paragraph";
import SocialLinks from "../../components/social-links";
import PostItem from "../../components/post-item";
import Hr from "../../components/Hr";
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
          <Paragraph small uppercase>
            {meta.date}
          </Paragraph>
          <Headline h1 margin="0 0 75px 0">
            {meta.title}
          </Headline>
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
