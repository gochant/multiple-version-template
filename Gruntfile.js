
'use strict';

module.exports = function (grunt) {

    var options = require('./www/product/tools/build.js');
    var path = require('path');
    var srcDir = 'www/';

    grunt.initConfig({
        veronica: options,
        pug: {
            options: {
                pretty: true,
                client: false,
                compileDebug: false,
                amd: false
            },
            compile: {
                files: [{
                    expand: true,
                    cwd: srcDir,
                    src: ['**/*.jade', '**/*.pug'],
                    dest: 'www/',
                    ext: '.html',
                }]
            }
        },
        less: {
            compile: {
                files: [{
                    expand: true,
                    cwd: srcDir,
                    src: ['**/*.less'],
                    dest: 'www/',
                    ext: '.css',
                }]
            }
        },
        watch: {
            pug: {
                files: ['www/**/*.jade', 'www/**/*.pug'],
                tasks: 'pug',
                options: {
                    spawn: false,
                    event: 'all'
                }
            },
            less: {
                files: ['www/**/*.less'],
                tasks: 'less',
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.event.on('watch', function (action, filepath, target) {
        var task = target;
        var config = grunt.config(task);
        config.compile.files[0].src = path.relative(srcDir, filepath);
        grunt.config(task, config);
    });

    grunt.loadNpmTasks('grunt-veronica');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['watch:pug']);
    grunt.registerTask('build', ['veronica']);

};
