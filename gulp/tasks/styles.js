var gulp = require('gulp');
var config = require('../config.js');
var mergeStream = require('merge-stream');
var plugins = require('gulp-load-plugins')();

gulp.task('styles', function () {
    var streams = config.bundles.filter(function (b) {
        return b.styles != null;
    }).map(function (b) {
        var ignores = b.ignorePlugins != null ? b.ignorePlugins : [];

        var useAutoprefixer = ignores.indexOf("autoprefixer") == -1;

        return gulp.src(b.styles)
            .pipe(plugins.plumber(config.errorHandler("styles")))
            .pipe(plugins.less())
            .pipe(plugins.concat(b.name + ".min.css"))
            .pipe(plugins.if(useAutoprefixer, plugins.autoprefixer(config.stylesVendorPrefixes)))
            .pipe(plugins.cssnano({
                discardComments: {removeAll: true},
                mergeLonghand: true,
                colormin: false,
                zindex: false
            }))
            .pipe(gulp.dest(config.stylesDist));
    });

    return mergeStream(streams);
});
