var gulp = require('gulp');
var pugDoc = require('pug-doc');
var PugDocMarkdown = require('pug-doc-markdown');
var PugDocHTML = require('pug-doc-html');

var destJson = 'anything.json';
var destMarkdown = 'output.md';
var destHtml = 'output.html';

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

gulp.task('default', ['doc']);
