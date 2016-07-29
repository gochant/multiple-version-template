var gulp = require('gulp');
var pug = require('gulp-pug');
var rename = require("gulp-rename");
var wrap = require('gulp-wrap-amd');
var replace = require('gulp-replace');
var watch = require('gulp-watch');
var cache = require('gulp-cached');

gulp.task('pug', function() {
    gulp.src('www/**/*.jade')
        //.pipe(cache('linting'))
        .pipe(watch('www/**/*.jade'))
        .pipe(rename(function (path) {
            path.extname = ".tpl.js";
        }))
        .pipe(pug({
            client: true,
            pretty: false,
            compileDebug: false,
            debug: false,
            cache: false
        })).pipe(wrap({
            exports: 'template'
        }))
        //.pipe(replace(/pug_mixins\s?=\s?\{\}/g, 'pug_mixins = locals.mixin || {}'))
        //.pipe(replace(/pug_html\s?=\s?""/g, 'pug_html = locals.output.html || ""'))
        .pipe(gulp.dest("www/"));
});

gulp.task('watch', function () {
    gulp.watch('www/**/*.jade', ['pug']);
});

gulp.task('default', ['watch', 'pug']);