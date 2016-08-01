var gulp = require('gulp');
var pug = require('gulp-pug');
var rename = require("gulp-rename");
var wrap = require('gulp-wrap-amd');
var replace = require('gulp-replace');
var watch = require('gulp-watch');
var cache = require('gulp-cached');

var pugBaseUrl = 'www/assets/pugkit';
var tplFiles = 'www/**/*.tpl.pug';
var htmlFiles = 'www/**/*.html.pug';

gulp.task('pug:tpl', function () {

    gulp.src(tplFiles)
        .pipe(cache('pug'))
        .pipe(rename(function (path) {
            path.extname = ".js";
        }))
        .pipe(pug({
            basedir: pugBaseUrl,
            client: true,
            pretty: false,
            compileDebug: false,
            debug: false,
            cache: true,
            inlineRuntimeFunctions: false
        })).pipe(wrap({
            exports: 'template'
        }))
        .pipe(gulp.dest("www/"));

});

gulp.task('watch', function() {
    gulp.watch(tplFiles, ['pug:tpl']);
    gulp.watch(htmlFiles, ['pug:html']);
});

gulp.task('pug:html', function () {

    gulp.src(htmlFiles)
    .pipe(cache('pug'))
    .pipe(rename(function (path) {
        path.extname = "";
    }))
    .pipe(pug({
        basedir: pugBaseUrl,
        client: false,
        pretty: true,
        compileDebug: false,
        debug: false,
        cache: true
    }))
    .pipe(gulp.dest("www/"));

});

gulp.task('default', ['watch', 'pug:tpl', 'pug:html']);