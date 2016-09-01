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

    return function (devPath, releasePath, version) {
        version = version || '0.1.0';
        var framePath = '../bower_components';  // 开发时路径
        var path2 = '../vendor';
        var path3 = './vendor';
        releasePath = releasePath || 'vendor';  // 发布时路径

        var config = {
            debug: true,
            urlArgs: 'v=' + version,
            shim: {
                'underscore': { 'exports': '_' },
                'kendo-ui-pro': { 'deps': ['jquery'], 'exports': 'kendo' },
                'kendo-ui-pro-culture': { 'deps': ['kendo-ui-pro'] },
                'kendo-ui-pro-messages': { 'deps': ['kendo-ui-pro'] },
                'bootstrap': { 'deps': ['jquery'] },
                'tiny': { 'deps': ['jquery'] },
                'jquery-scrollbar': { 'deps': ['jquery'] },
                'echarts': { 'exports': 'echarts' },
                'bootstrap-datetimepicker': { deps: ['jquery'] }
            }
        };

        //var framePath = releasePath;
        //config.urlArgs = 'v=' + version;

        //if (config.debug === true) {
        //    framePath = devPath;
        //   // config.urlArgs = "v=" + (new Date()).getTime();
        //}

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
            'css-builder': framePath + '/require-css/css-builder',


            //'jquery-scrollbar': framePath + '/jquery.scrollbar/0.2.9/jquery.scrollbar',
            //'select2': framePath + '/select2/3.5.4/js/select2',
            //'summernote': framePath + '/summernote/0.8.1/summernote',
            //'summernote-lang': framePath + '/summernote/0.8.1/lang/summernote-zh-CN',
            //'echarts': framePath + '/echarts/3.2.1/echarts',
            //'store': framePath + '/store/1.3.20/store',

            //'pug': 'assets/runtime',
            'esri': framePath + '/esri',
            'dojo': framePath + '/dojo',
            'dgrid': framePath + '/dgrid',
            'dijit': framePath + '/dijit',
            'dojox': framePath + '/dojox',
            //'domReady': framePath + 'assets/arcgis/4.0/domReady',
            'dstore': framePath + '/dstore',
            //'has': framePath + 'assets/arcgis/4.0/has',
            //'i18n': framePath + 'assets/arcgis/4.0/i18n',
            'moment': framePath + '/moment',
            'util': framePath + '/util'
        }

        return config;
    }

}));
