import { h, Component } from "preact";

import style from "./style.scss";

import SocialLinks from "../social-links";
import Menu from "../menu";

class Footer extends Component {
  state = {
    showSocialLinks: true
  };
  onScroll = e => {
    if (window.scrollY > 50 && this.state.showSocialLinks) {
      this.setState({ showSocialLinks: false });
    }
    if (window.scrollY < 50 && !this.state.showSocialLinks) {
      this.setState({ showSocialLinks: true });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  render({}, { showSocialLinks }) {
    return (
      <footer className={style.footer}>
        <div className={style.container}>
          {showSocialLinks && <SocialLinks />}
          <Menu />
        </div>
      </footer>
    );
  }
}

export default Footer;
