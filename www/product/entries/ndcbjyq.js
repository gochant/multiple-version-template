requirejs.config({
    baseUrl: '../../'
});

requirejs([
    'product/configs/require-conf'
], function (req) {

    var devPath = 'http://192.168.1.18:8097/cdn/vendor';  // 开发时路径
     //var devPath = 'http://localhost:8001/vendor';  // 开发时路径
    var releasePath = 'vendor';  // 发布时路径
    var releaseWidgetPath = 'widgets';

    require.config(req(devPath, releasePath));  // 进行 requirejs 配置

    require([
        'veronica',
        'product/configs/home/extension',
        'product/configs/home/page',
        'product/configs/home/module',
        'bootstrap'
    ], function (veronica, extension, page, module) {

        // 创建应用程序
        var app = veronica.createApp({
            homePage: 'ndcbjyq_workdeck_handle',
            //extensions: ['veronica-ui-pro'],
            modules: module,
            autoParseWidgetName: false,
            autoBuildPage: true,
            releaseWidgetPath: releaseWidgetPath,
            widgetNamePattern: /(\w*)-?(\w*)-?(\w*)-?(\w*)-?(\w*)/
        });

        var _ = app.core._;

        if (!_.any) {
            _.any = _.some;
        }

        extension(app);
        page(app);

        app.launch().done(function () {
            app.page.start(false);
        });
    });
});