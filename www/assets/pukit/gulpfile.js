var gulp = require('gulp');
var pugDoc = require('pug-doc');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var data = require('gulp-data');
var fm = require('front-matter');

var PugDocMarkdown = require('pug-doc-markdown');
var PugDocHTML = require('pug-doc-html');

var docDestJson = 'doc/anything.json';
var docDestMarkdown = 'doc/output.md';
var docDestHtml = 'doc/output.html';
var modelFilePath = './demo/model.js';
var pugBaseUrl = './src';
var srcFiles = './demo/**/*.html.pug';

function getContextName(path) {
    var r = /.*[\/|\\]([\w|-]*)[\/|\\][^\/]*$/g.exec(path);
    if (r && r.length >= 2) {
        return r[1];
    }
    return null;
}
gulp.task('demo', function () {
    var modelProvider = require(modelFilePath);

    gulp.src(srcFiles)
    //.pipe(cache('pug'))
    .pipe(rename(function (path) {
        path.extname = '';
    }))
    .pipe(data(function (file) {
        var content = fm(String(file.contents));
        file.contents = new Buffer(content.body);
        var context = getContextName(file.path);
        var contextModel = modelProvider[content.attributes.context || context];
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
    .pipe(gulp.dest('demo/'));

});

gulp.task('doc', function (cb) {
    pugDoc({
        input: './src/**/*.pug',
        output: destJson,
        complete: function () {
            var stream = new PugDocHTML({
                output: destHtml,
                input: '../../' + destJson
            });

            stream.on('complete', function () {
                console.log('complete');
            });
            //var stream = new PugDocMarkdown({
            //    output: destMarkdown,
            //    input: '../../' + destJson
            //});

            //stream.on('complete', function () {
            //    console.log('complete');
            //});
        },
        globals: {
            myGlobal: 'foo'
        }
    });
});



gulp.task('default', ['demo']);
