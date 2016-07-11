requirejs.config({
    baseUrl: '../../'
});

requirejs([
    'product/config/require-conf',
    'product/config/home/extension',
    'product/config/home/page'
], function (req, extension, page) {


    var devPath = 'http://192.168.1.18:8097/cdn/vendor';  // 开发时路径
    var devPath = 'http://localhost:8001/vendor';  // 开发时路径

    var releasePath = 'vendor';  // 发布时路径
    require.config(req(devPath, releasePath));  // 进行 requirejs 配置

    require([
        'veronica'
    ], function (veronica) {

        // 创建应用程序
        var app = veronica.createApp({
            global: true,
            extensions: ['veronica-ui'],
            modules: [{
                name: 'module1',
                parentPath: './product/widget',
                widgetPath: '',
                multilevel: true,
                hasEntry: false
            }],
            homePage: 'geo',
            autoParseWidgetName: false,
            autoBuildPage: true,
            releaseWidgetPath: 'widgets'
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

        extension(app);
        page(app);

        app.launch().done(function () {
            app.page.start(true);
        });
    });
});