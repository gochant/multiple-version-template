var reqPath = '../configs/require-conf.js';
var reqConfig = require(reqPath)('../__local__/vendor');
var dir = './www-built';

module.exports = {
    product: {
        options: {
            appDir: './www',
            baseUrl: '.',
            dir: dir,
            reqConfig: reqConfig,
            clean: {
                custom: [
                    dir + '/*',
                    '!' + dir + '/assets',
                    '!' + dir + '/product',
                    '!' + dir + '/styles',
                    '!' + dir + '/vendor',
                    '!' + dir + '/widgets',
                    dir + '/*/**/configs',
                    dir + '/*/**/widgets',
                    dir + '/*/**/extensions',
                    dir + '/*/**/modules',
                    dir + '/*/**/pages'
                ]
            },
            notMerge: [],
            optimize: false,
            removeCombined: false,
            entryPack: [{
                name: './product/entries/home',
                include: [
                    'veronica', 'jquery', 'underscore',
                    'text', 'css', 'ver'
                ]
            }],
            jsPack: {
                defaults: {
                    target: './widgets',
                    unique: true
                },
                paths: [
                    {
                        name: 'module1',
                        origin: './product/widgets/module1'
                    }
                ]
            },
            cssPack: {},
            remote: {
                vendor: [{
                    name: 'vendor.zip',
                    //   path: 'http://localhost:8001/vendor/'
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
            }
        }
    }
}