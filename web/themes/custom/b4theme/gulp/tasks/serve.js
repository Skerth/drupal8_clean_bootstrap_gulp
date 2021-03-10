const gulp = require('gulp')

const styles = require('./styles')

const server = require('browser-sync').create()

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
  server.init({
    proxy: {
      target: "http://autoexpres.local/",
      ws: true
    },
    notify: false,
    open: true,
    cors: true
  })

  gulp.watch('scss/**/*.scss', gulp.series(styles, cb => gulp.src('css').pipe(server.stream()).on('end', cb)))

  return cb()
}
