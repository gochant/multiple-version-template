var gulp = require('gulp');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var wrap = require('gulp-wrap-amd');
var watch = require('gulp-watch');
var cache = require('gulp-cached');
var data = require('gulp-data');
var fm = require('front-matter');
var path = require('path');

// config variables

var pugBaseUrl = 'www/product/build/templateKit';
var tplFiles = 'www/**/*.tpl.pug';
var htmlFiles = ['www/**/*.html.pug', '!www/assets/**/*.html.pug'];
var modelFilePath = './www/product/build/templateKit/modelFinder.js';
var templateHelper = require('./www/product/build/templateKit/helper.js');

var modelFinder = require(modelFilePath);

// helper

function getContextName(path) {
    var r = /.*[\/|\\]modules[\/|\\](\w+)[\/|\\].*/g.exec(path);
    if (r && r.length >= 2) {
        return r[1];
    }
    return null;
}


var globalModelProvider = null;
gulp.task('modelfinder', function (cb) {
    if (globalModelProvider != null) {
        cb();
        return;
    }
    modelFinder([
      './www/**/modules/**/model.js',
      '!./www/assets/**/*'
    ], function (modelProvider) {

        globalModelProvider = modelProvider;
        cb();
    });
});

gulp.task('pug:html', ['modelfinder'], function () {

    gulp.src(htmlFiles)
        .pipe(cache('pug'))
        .pipe(rename(function (path) {
            path.extname = '';
        }))
        .pipe(data(function (file) {
            var modelProvider = globalModelProvider;
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
            compileDebug: true,
            debug: false,
            cache: true
        }))
        .pipe(gulp.dest('www/'));
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


gulp.task('watch', [], function () {
    gulp.watch(tplFiles, ['pug:tpl']);
    gulp.watch(htmlFiles, ['pug:html']);
});

gulp.task('default', ['watch', 'pug:html']);
