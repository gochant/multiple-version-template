var gulp = require('gulp');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var wrap = require('gulp-wrap-amd');
var watch = require('gulp-watch');
var cache = require('gulp-cached');
var data = require('gulp-data');
var fm = require('front-matter');

// config variables

var pugBaseUrl = 'www/product/_toolkit/templateKit';
var tplFiles = 'www/**/*.tpl.pug';
var htmlFiles = ['www/**/*.html.pug', '!www/assets/**/*.html.pug'];

// helper

function getContextName(path) {
    var r = /.*[\/|\\]modules[\/|\\](\w+)[\/|\\].*/g.exec(path);
    if (r && r.length >= 2) {
        return r[1];
    }
    return null;
}


var modelFilePath = './www/product/_toolkit/templateKit/modelFinder.js';
var templateHelper = require('./www/product/_toolkit/templateKit/helper.js');
var modelFinder = require(modelFilePath);
var path = require('path');

gulp.task('pug:html', function () {
    modelFinder([
        './www/**/modules/**/model.js',
        '!./www/assets/**/*'
    ], function (modelProvider) {

        gulp.src(htmlFiles)
            .pipe(cache('pug'))
            .pipe(rename(function (path) {
                 path.extname = '';
             }))
            .pipe(data(function (file) {
                var content = fm(String(file.contents));
                file.contents = new Buffer(content.body);
                var source = getContextName(file.path);
                var contextModel = modelProvider[content.attributes.context || source];
                var result = {
                    globalModel: modelProvider,
                    contextModel: contextModel,
                    model: contextModel && contextModel[content.attributes.model],
                    helper: templateHelper
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
            .pipe(gulp.dest('www/'));
    });
});

gulp.task('pug:tpl', function () {

    gulp.src(tplFiles)
        .pipe(cache('pug'))  // run only changed files
        .pipe(rename(function (path) {
            path.extname = '.js';
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
        .pipe(gulp.dest('www/'));

});


gulp.task('watch', function () {
    gulp.watch(tplFiles, ['pug:tpl']);
    gulp.watch(htmlFiles, ['pug:html']);
});

gulp.task('default', ['watch', 'pug:tpl', 'pug:html']);
