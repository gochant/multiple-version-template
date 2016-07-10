
'use strict';

module.exports = function (grunt) {


    grunt.initConfig({
        veronica: {
            defaults: {
                options: {
                    appDir: './frontend/product',
                    baseUrl: '.',
                    dir: './release',
                    reqConfig: require('./frontend/product/require-conf.js')('../../__local__/vendor'),
                    clean: [],
                    notMerge: [],
                    optimize: false,
                    entryPack: [{
                        name: './home/main',
                        include: [
                            './require-conf',
                            'veronica', 'jquery', 'underscore',
                            'text', 'css', 'ver'
                        ]}],
                    jsPack: {
                        paths: [
                            {
                                name: 'module1',
                                origin: './module1',
                                target: './widgets',
                                unique: true
                            }
                        ]
                    },
                    cssPack: {},
                    remote: {
                        vendor: [{
                            name: 'vendor.zip',
                            path: 'http://localhost:8001/vendor/'
                        }],
                        copy: {
                            files: [{
                                expand: true,
                                cwd: '__local__/vendor/',
                                src: [
                                    'jquery/**',
                                    'tinyui/**'
                                ],
                                dest: 'release/vendor'
                            }]
                        }
                    }
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-veronica');

    grunt.registerTask('default', ['veronica']);

};
