// 基路径设置到前端根目录, 这里以页面路径为准
requirejs.config({
    baseUrl: '../../../'
});

requirejs([
    'product/app/_common/require-conf'
], function (req) {

    require.config(req());  // 进行 requirejs 配置

    require([
        'veronica',
        'veronica-ui',
        'product/app/' + window.__appName + '/entry'
    ], function (veronica, veronicaui, entry) {
        var $ = veronica.$;
        var _ = veronica._;

        // 创建应用程序
        var app = veronica.createApp($.extend({
            name: window.__appName,        
            autoParseWidgetName: false,
            autoBuildPage: true,
            autoParseSource: true,
            releaseWidgetPath: 'widgets',
            // 默认的 widget 查找模式支持三级目录，这里更改以支持最大5级目录
            widgetNamePattern: /(\w*)-?(\w*)-?(\w*)-?(\w*)-?(\w*)/
        }, entry.config));

        app.use(veronicaui);
        app.uiKit.setDefault('keboacy');
        app.viewEngine.setDefault('kendo');
        app.windowProvider.setDefault('bs-modal');

        entry.init && entry.init(app);

        app.launch().done(function () {
            app.page.start(false);
            entry.launch && entry.launch(app);
        });
    });
});