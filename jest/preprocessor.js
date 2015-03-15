var babel = require("babel-core");

/**
 * "babel-jest": "^4.0.0" does not support
 * experimental syntax yet (or other options as well)
 */
module.exports = {
  process: function (src, filename) {
    // Ignore all files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    if (filename.indexOf("node_modules") === -1 && babel.canCompile(filename)) {
      return babel.transform(src, { filename: filename, experimental: true }).code;
    }
    return src;
  }
};
