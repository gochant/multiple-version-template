'use strict';

module.exports = function (grunt) {

    var options = require('./www/product/build/pack-conf.js');

    grunt.initConfig({
        veronica: options,
        replace: {
            options: {
                patterns: [
                    {
                        match: /\.\.\/bower_components/g,
                        replacement: 'assets'
                    }
                ]
            },
            test: {
                files: [
                    {
                        expand: true,
                        src: ['www-built/**/*.css', '!**/assets/**/*.css'],
                        dest: ''
                    }
                ],

            }
        }
    });

    grunt.loadNpmTasks('grunt-veronica');
    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('default', function () {
        grunt.task.run(['veronica']);
        // TODO: 这里连续执行会报一个  config missing 的错误，难道是因为久了没更新 grunt 版本？ node version: v7.8.0
        // grunt.task.run(['replace']);
    });
};
