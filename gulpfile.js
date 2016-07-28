var pug = require('gulp-pug');
var rename = require("gulp-rename");
var gulp = require('gulp');

gulp.task('views', function buildHTML() {
    return gulp.src('www/product/extensions/templates/*.pug')
        .pipe(rename(function (path) {
            path.extname = "xx.js";
        }))

        .pipe(pug({
            client: true,
            pretty: true,
            cache: false
        })).pipe(gulp.dest("www/product/extensions/templates/"));
});