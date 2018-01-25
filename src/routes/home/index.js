import { h, Component } from "preact";
import style from "./style.scss";
import cx from "classnames";

import Section from "../../components/section";
import Headline from "../../components/headline";
import Paragraph from "../../components/paragraph";
import SocialLinks from "../../components/social-links";
import PostItem from "../../components/post-item";
import Hr from "../../components/Hr";

export default class Home extends Component {
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <div class={style.home + " deepocean"}>
        <section>
          <article>
            <h1>
              I am Zouhir, JavaScript Developer and <br /> Web Technologies GDE
            </h1>
            <div className={style.limitWidth + " dash-padded"}>
              <h2 className="mb-15">
                I focus on web applications performance, Web APIs and aim to
                make the mobile web as fast as possible.
              </h2>
              <p light indent={130} opacity={0.5}>
                In my spare time, I experiment with PWAs, work on open source
                projects and help Arabic-speaking refugees get a better life by
                teaching them how to code.
              </p>
            </div>
          </article>
          <SocialLinks />
        </section>
        <section>
          <article>
            <div className={style.extraMargin}>
              <h1>Latest From The Blog</h1>
              <div className={style.limitWidth + " dash-padded"}>
                <h2 className="mb-15">News and recent learnings</h2>
              </div>
            </div>
            <PostItem
              title="How I Decided to Teach Arabic-speaking Refugees an Essential Skill: JavaScript Programming"
              link="/blog/teaching-arabic-speaking-refugees-javascript-programming"
              date="May 25, 2016"
            />
            <PostItem
              title="Hello, World!"
              link="/blog/hello-world"
              date="Apr 24, 2016"
            />
          </article>
        </section>
      </div>
    );
  }
}
