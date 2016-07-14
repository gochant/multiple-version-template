
'use strict';

module.exports = function (grunt) {

    var options = require('./www/product/tools/build.js');

    grunt.initConfig({
        veronica: options,
        pug: {
            options: {
                pretty: true
            },
            compile: {
                files: [{
                    expand: true,
                    cwd: 'www/',
                    src: ['**/*.jade', '**/*.pug'],
                    dest: 'www/',
                    ext: '.html',
                }]
            }
        },
        watch: {
            scripts: {
                files: ['www/**/*.jade', 'www/**/*.pug'],
                tasks: 'pug',
            },
        }
    });

    grunt.loadNpmTasks('grunt-veronica');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-pug');

    grunt.registerTask('default', ['pug', 'watch']);
    grunt.registerTask('build', ['veronica']);

};
