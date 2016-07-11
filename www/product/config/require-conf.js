// requirejs
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

    return function (devPath, releasePath) {

        var config = {
            debug: true,
            shim: {
                'underscore': { 'exports': '_' },
                'kendo-ui-pro': { 'deps': ['jquery'], 'exports': 'kendo' },
                'kendo-ui-pro-culture': { 'deps': ['kendo-ui-pro'] },
                'kendo-ui-pro-messages': { 'deps': ['kendo-ui-pro'] },
                'tiny': { 'deps': ['jquery'] },
                'jquery-scrollbar': { 'deps': ['jquery'] },
                'echarts': { 'exports': 'echarts' }
            }
        };

        var framePath = config.debug === true ? devPath : releasePath;

        // 第三方库路径
        config.paths = {
            'underscore': framePath + '/lodash/4.13.1/lodash',
          //  'underscore': framePath + '',
            'jquery': framePath + '/jquery/1.11.3/jquery',
            'text': framePath + '/requirejs-text/2.0.14/text',
            'ver': framePath + '/requirejs-ver/ver',
            'css': framePath + '/require-css/0.1.8/css',
            'normalize': framePath + '/require-css/0.1.8/normalize',
            'css-builder': framePath + '/require-css/0.1.8/css-builder',
            'veronica': framePath + '/veronica/1.1.0/veronica',
            //'veronica': './assets/veronica',
            'veronica-ui': framePath + '/veronica-ui/0.1.3/veronica-ui',
            'veronica-ui-pro': framePath + '/veronica-ui/0.1.3/veronica-ui-pro',
            'kendo-ui-pro': framePath + '/kendo-ui-pro/js/kendo.web.min',
            'kendo-ui-pro-culture': framePath + '/kendo-ui-pro/js/cultures/kendo.culture.zh-CN.min',
            'kendo-ui-pro-messages': framePath + '/kendo-ui-pro/js/messages/kendo.messages.zh-CN.min',
            'tiny': framePath + '/tinyui/1.0.0/js/tiny',
            'jquery-scrollbar': framePath + '/jquery.scrollbar/0.2.9/jquery.scrollbar',
            'select2': framePath + '/select2/3.5.4/js/select2',
            'summernote': framePath + '/summernote/0.8.1/summernote',
            'summernote-lang': framePath + '/summernote/0.8.1/lang/summernote-zh-CN',
            'echarts': framePath + '/echarts/3.2.1/echarts',
            'store': framePath + '/store/1.3.20/store'
        }

        return config;
    }

}));
