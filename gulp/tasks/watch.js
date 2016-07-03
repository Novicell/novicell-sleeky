var gulp = require('gulp');
var config = require('../config.js');
var plugins = require('gulp-load-plugins')();

gulp.task('watch', function () {
    gulp.watch(config.watchScripts, ["scripts:watch"]);
    gulp.watch(config.watchStyles, ["styles"]);
    gulp.watch(config.watchHtml, ["copy"]);

    return;
});