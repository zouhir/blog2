// import Gatspre from "./plugin";

const RemoveServiceWorkerPlugin = require("webpack-remove-serviceworker-plugin");

export default function(config, env, helpers) {
  /** you can change config here **/
  //config.plugins.push(new Gatspre());
  let styleLoader = helpers.getLoadersByName(config, "style-loader")[0];
  styleLoader.rule.loader.forEach(element => {
    if (element["loader"].indexOf("css-loader") === 0) {
      element.options.localIdentName = "[local]";
    }
  });
  config.plugins.push(new RemoveServiceWorkerPlugin());
}
