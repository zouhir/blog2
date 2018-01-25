const dirTree = require("directory-tree");
const path = require("path");

function Gatspre(options) {
  // Setup the plugin instance with options...
}

let routes = [];
function traverseObject(obj, arrKey = "children", dirRoot) {
  let index = 0;
  if (obj.type === "directory" && obj[arrKey].length) {
    obj[arrKey].forEach((item, idx) => {
      if (dirRoot === "/") index = idx;
      if (item.type === "file") {
        dirRoot === "/"
          ? routes.push(item.name)
          : routes.push(`${dirRoot}/${item.name}`);
      }
      if (item.type === "directory") {
        return traverseObject(
          item,
          "children",
          dirRoot === "/" ? item.name : `${dirRoot}/${item.name}`
        );
      }
    });
  }
  if (dirRoot === "/" && index === obj[arrKey].length - 1) {
    console.log("retiurn");
    return routes;
  }
}

Gatspre.prototype.apply = function(compiler) {
  const contentPath = path.join(__dirname + "/src/content");
  const filteredTree = dirTree(contentPath, {
    extensions: /\.html/
  });
  const CONTENT_ROUTES = traverseObject(filteredTree, "children", "/");

  const definePlugin = compiler.options.plugins.filter(
    plugin => plugin.constructor.name === "DefinePlugin"
  )[0];

  if (definePlugin) {
    definePlugin["definitions"]["CONTENT_ROUTES"] = JSON.stringify(
      CONTENT_ROUTES
    );
  }

  compiler.plugin("done", function() {
    console.log("Hello World!");
  });
};

module.exports = Gatspre;
