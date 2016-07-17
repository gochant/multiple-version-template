
'use strict';

module.exports = function (grunt) {

    var path = require('path');
    var srcDir = 'demo/';

    grunt.initConfig({
        pug: {
            options: {
                pretty: true
            },
            compile: {
                files: [{
                    expand: true,
                    cwd: srcDir,
                    src: ['**/*.jade', '**/*.pug'],
                    dest: srcDir,
                    ext: '.html',
                }]
            }
        },
        watch: {
            pug: {
                files: ['demo/**/*.jade', 'demo/**/*.pug'],
                tasks: 'pug',
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

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-pug');

    grunt.registerTask('default', ['watch']);

};
