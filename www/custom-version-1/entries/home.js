requirejs.config({
    baseUrl: '../../'
});

requirejs([
    'product/configs/require-conf',
    'product/configs/home/extension',
    'custom-version-1/configs/home/page',
    'custom-version-1/configs/home/module'
], function (req, extension, page, module) {

    var devPath = 'http://192.168.1.18:8097/cdn/vendor';  // 开发时路径
    // var devPath = 'http://localhost:8001/vendor';  // 开发时路径
    var releasePath = 'vendor';  // 发布时路径
    var releaseWidgetPath = 'widgets';

    require.config(req(devPath, releasePath));  // 进行 requirejs 配置

    require([
        'veronica'
    ], function (veronica) {

        // 创建应用程序
        var app = veronica.createApp({
            global: true,
            extensions: ['veronica-ui'],
            modules: module,
            homePage: 'geo2',
            autoParseWidgetName: false,
            autoBuildPage: true,
            releaseWidgetPath: releaseWidgetPath
        });

        var _ = app.core._;

        if (!_.any) {
            _.any = _.some;
        }

        extension(app);
        page(app);

        app.launch().done(function () {
            app.page.start(true);
        });
    });
});