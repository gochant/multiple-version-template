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
        devPath = devPath || 'http://192.168.1.18:8097/cdn/vendor';  // 开发时路径
        releasePath = releasePath || 'vendor';  // 发布时路径

        var config = {
            debug: true,
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

        var framePath = releasePath;
        config.urlArgs = 'v=' + version;

        if (config.debug === true) {
            framePath = devPath;
           // config.urlArgs = "v=" + (new Date()).getTime();
        }

        // 第三方库路径
        config.paths = {
            'underscore': framePath + '/lodash/4.13.1/lodash',
            'jquery': framePath + '/jquery/1.11.3/jquery',
            'text': framePath + '/requirejs-text/2.0.14/text',
            //'ver': framePath + '/requirejs-ver/0.2.0/ver',
            'ver': 'assets/ver',
            'css': framePath + '/require-css/0.1.8/css',
            'normalize': framePath + '/require-css/0.1.8/normalize',
            'css-builder': framePath + '/require-css/0.1.8/css-builder',
            'veronica': 'assets/veronica/dist/veronica',
            'veronica-ui': 'assets/veronica-ui/dist/js/veronica-ui',

            'jquery-scrollbar': framePath + '/jquery.scrollbar/0.2.9/jquery.scrollbar',
            'select2': framePath + '/select2/3.5.4/js/select2',
            'summernote': framePath + '/summernote/0.8.1/summernote',
            'summernote-lang': framePath + '/summernote/0.8.1/lang/summernote-zh-CN',
            'echarts': framePath + '/echarts/3.2.1/echarts',
            'store': framePath + '/store/1.3.20/store',

            'pug': 'assets/runtime',
            'esri': 'assets/arcgis/4.0/esri',
            'dojo': 'assets/arcgis/4.0/dojo',
            'dgrid': 'assets/arcgis/4.0/dgrid',
            'dijit': 'assets/arcgis/4.0/dijit',
            'dojox': 'assets/arcgis/4.0/dojox',
            'domReady': 'assets/arcgis/4.0/domReady',
            'dstore': 'assets/arcgis/4.0/dstore',
            'has': 'assets/arcgis/4.0/has',
            'i18n': 'assets/arcgis/4.0/i18n',
            'moment': 'assets/arcgis/4.0/moment',
            'util': 'assets/arcgis/4.0/util'
        }

        return config;
    }

}));
