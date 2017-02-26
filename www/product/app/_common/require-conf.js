/**
 * requirejs 配置文件
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(function () {
            return factory();
        });
    } else if (typeof exports === 'object') {
        // Node.js
        module.exports = factory();
    } else {
        // Browser globals
        root.RequireConf = factory();
    }
}(this, function () {

    return function (framePath, version) {
        version = version || '0.1.0';
        framePath || (framePath = '../bower_components');

        var config = {
            debug: true,
            urlArgs: 'v=' + version,
            shim: {
                'underscore': {'exports': '_'}
            }
        };

        config.urlArgs = 'v=' + version;
        // config.urlArgs = "v=" + (new Date()).getTime();
        if (config.debug === false) {
            framePath = './assets';
        }

        // 第三方库路径
        config.paths = {
            'ver': framePath + '/requirejs-ver/ver',
            'veronica': framePath + '/veronica/dist/veronica',
            'veronica-ui': framePath + '/veronica-ui/dist/js/veronica-ui',

            'underscore': framePath + '/lodash/dist/lodash',
            'jquery': framePath + '/jquery/dist/jquery',
            'text': framePath + '/requirejs-text/text',
            'css': framePath + '/require-css/css',
            'normalize': framePath + '/require-css/normalize',
            'css-builder': framePath + '/require-css/css-builder'
        };

        return config;
    }

}));
