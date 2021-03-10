const gulp = require('gulp')

const serve = require('./gulp/tasks/serve')
const styles = require('./gulp/tasks/styles')

const dev = gulp.parallel(styles)

const build = gulp.series(dev)

function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}

module.exports.start = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build)
