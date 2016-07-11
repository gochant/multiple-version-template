
'use strict';

module.exports = function (grunt) {

    var reqPath = './www/product/config/require-conf.js';

    grunt.initConfig({
        veronica: {
            product: {
                options: {
                    appDir: './www',
                    baseUrl: '.',
                    dir: './www-built',
                    reqConfig: require(reqPath)('../__local__/vendor'),
                    clean: [],
                    notMerge: [],
                    optimize: false,
                   // removeCombined: false,
                    entryPack: [{
                        name: './product/entry/home',
                        include: [
                            
                            'veronica', 'jquery', 'underscore',
                            'text', 'css', 'ver'
                        ],
                       // exclude: ['./product/js/config/require-conf']
                    }],
                    jsPack: {
                        paths: [
                            {
                                name: 'module1',
                                origin: './product/widget/module1',
                                target: './widgets',
                                unique: true
                            }
                        ]
                    },
                    cssPack: {},
                    remote: {
                        vendor: [{
                            name: 'vendor.zip',
                            path: 'http://192.168.1.18:8097/cdn/vendor/'
                        }],
                        copy: {
                            files: [{
                                expand: true,
                                cwd: '__local__/vendor/',
                                src: [
                                    'jquery/**',
                                    'tinyui/**',
                                    'veronica-ui/**',
                                    'echarts/**'
                                ],
                                dest: 'www-built/vendor'
                            }]
                        }
                    },
                  //  remote: false
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-veronica');

    grunt.registerTask('default', ['veronica']);

};
