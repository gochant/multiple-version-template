var reqPath = '../app/_common/require-conf.js';
var reqConfig = require(reqPath)('../bower_components');
var dir = './www-built';  // ����ʱĿ¼

reqConfig.fileExclusionRegExp = /^\.|/;

module.exports = {
    product: {
        options: {
            appDir: {
                origin: [{
                    cwd: './www/',
                    src: ['product/**']
                }]
            },
            baseUrl: '.',
            dir: dir,
            reqConfig: reqConfig,
            clean: {
                custom: [
                    dir + '/**/build',
                    dir + '/**/modules',
                    dir + '/**/*.less',
                    dir + '/**/*.pug',
                    dir + '/widgets/**/*.html',
                ]
            },
            copy: {
                cwd: './bower_components',
                src: ['**', '!**/src/*'],
                dest: dir + '/assets',
                expand: true
            },
            notMerge: [],
            optimize: {
                paths: []
            },
            entryPack: [{
                name: './product/app/sample/entry',
                // include: [
                //     'veronica', 'veronica-ui', 'jquery', 'underscore',
                //     'text', 'css', 'ver'
                // ]
            }],
            jsPack: {
                defaults: {
                    target: './widgets',
                    unique: true
                },
                paths: [{
                    name: 'base',
                    origin: './product/modules/base/widgets'
                }, {
                    name: 'sample',
                    origin: './product/modules/sample/widgets'
                }]
            },
            cssPack: {}
        }
    }
}