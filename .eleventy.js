const sass = require("eleventy-sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(sass, {
    sass: {
      loadPaths: ["./node_modules/bootstrap/scss", "./src/_includes"]
    }
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};

