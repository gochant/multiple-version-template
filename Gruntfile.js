
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
                client: true,
                debug: true,
                namespace: false,
                cache: false,
                compileDebug: true,
                amd: true
            },
            compile: {
                files: [{
                    expand: true,
                    cwd: srcDir,
                    src: ['**/*.jade', '**/*.pug'],
                    dest: 'www/',
                    ext: '.tpl.js'
                }]
            }
        },
        replace: {
            compile: {
                overwrite: true,
                src: ['www/**/*.tpl.js'],

                replacements: [{
                    from: 'pug_mixins = {}',
                    to: 'pug_mixins = locals.mixin || {}'
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
            replace: {
                files: ['www/**/*.tpl.js'],
                tasks: 'replace',
                options: {
                    overwrite: true
                }
            },
            //less: {
            //    files: ['www/**/*.less'],
            //    tasks: 'less',
            //    options: {
            //        spawn: false,
            //    }
            //}
        }
    });

    grunt.event.on('watch', function (action, filepath, target) {
        var task = target;
        var config = grunt.config(task);
        if (config.compile.files) {
            config.compile.files[0].src = path.relative(srcDir, filepath);
        } else {
            config.compile.src = path.relative(srcDir, filepath);
        }
        grunt.config(task, config);
    });

    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-veronica');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['veronica']);

};
