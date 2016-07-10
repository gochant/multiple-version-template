
require(['../require-conf'], function (config) {

    var devPath = 'http://localhost:8001/vendor';  // 开发时路径
    var releasePath = './vendor';  // 发布时路径
    require.config(config(devPath, releasePath));  // 进行 requirejs 配置

    require([
        'veronica'
    ], function (veronica) {

        // 创建应用程序
        var app = veronica.createApp({
            global: true,
            extensions: ['veronica-ui'],
            modules: [{
                name: 'module1',
                parentPath: '../',
                widgetPath: '',
                multilevel: true,
                hasEntry: false
            }],
            homePage: 'geo',
            autoParseWidgetName: false,
            autoBuildPage: true
        });

        var _ = app.core._;

        if (!_.any) {
            _.any = _.some;
        }

        app.page.add([{
            'geo': {
                name: '地理定位',
                widgets: [
                    'module1-geo@.v-render-body@module1'
                ]
            }
        }]);

        app.launch().done(function () {
            app.page.start(true);
        });
    });
});