const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.dist
      ],
      routes: {
        '/bower_components': 'bower_components'
      }
    },
    open: false
  };
};
