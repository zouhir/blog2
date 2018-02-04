import { h, Component } from "preact";
import { Router } from "preact-router";

import Home from "../routes/home";
import HelloWorld from "../routes/post/hello-world";
import TeachingRefugees from "../routes/post/teaching-refugees";

export default class App extends Component {
  componentDidMount() {}
  handleRoute = e => {
    if (typeof document !== "undefined") {
      document.documentElement.scrollTop = 0;
    }
  };

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <HelloWorld path="/blog/hello-world/" />
          <TeachingRefugees path="/blog/teaching-arabic-speaking-refugees-javascript-programming/" />
        </Router>
      </div>
    );
  }
}
