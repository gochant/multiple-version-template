var gulp = require('gulp');
var pug = require('gulp-pug');
var rename = require("gulp-rename");
var wrap = require('gulp-wrap-amd');
var watch = require('gulp-watch');
var cache = require('gulp-cached');
var data = require('gulp-data');
var fm = require('front-matter');

var pugBaseUrl = 'www/assets/pugkit';
var tplFiles = 'www/**/*.tpl.pug';
var htmlFiles = 'www/**/*.html.pug';
var modelProvider = require('./www/product/tools/modelProvider.js');

// helper

function getSource(path) {
    var r = /.*[\/|\\]widgets[\/|\\](\w+)[\/|\\].*/g.exec(path);
    if (r && r.length >= 2) {
        return r[1];
    }
    return null;
}

gulp.task('pug:tpl', function () {

    gulp.src(tplFiles)
        .pipe(cache('pug'))
        .pipe(rename(function (path) {
            path.extname = ".js";
        }))
        .pipe(data(function (file) {
            var content = fm(String(file.contents));
            file.contents = new Buffer(content.body);
            return content.attributes;
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

gulp.task('pug:html', function () {

    gulp.src(htmlFiles)
    .pipe(cache('pug'))
    .pipe(rename(function (path) {
        path.extname = "";
    }))
    .pipe(data(function (file) {
        var content = fm(String(file.contents));
        file.contents = new Buffer(content.body);
        var source = getSource(file.path);
        var contextModel = modelProvider[content.attributes.context || source];
        var result = {
            globalModel: modelProvider,
            contextModel: contextModel,
            model: contextModel && contextModel[content.attributes.model]
        };
        return result;
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

gulp.task('watch', function () {
    gulp.watch(tplFiles, ['pug:tpl']);
    gulp.watch(htmlFiles, ['pug:html']);
});

gulp.task('default', [ 'pug:tpl', 'pug:html']);
