import yaml from "yaml";
import fetch from "unfetch";

const FRONT_MATTER_REG = /^\s*\-\-\-\n\s*([\s\S]*?)\s*\n\-\-\-\n/i;

const parser = content => {
  let [, frontMatter] = content.match(FRONT_MATTER_REG) || [];
  let meta =
    (frontMatter &&
      yaml.eval("---\n" + frontMatter.replace(/^/gm, "  ") + "\n")) ||
    {};
  let body = content.replace(FRONT_MATTER_REG, "");
  meta = Object.assign({}, ...meta);
  return {
    meta,
    body
  };
};

export default parser;
