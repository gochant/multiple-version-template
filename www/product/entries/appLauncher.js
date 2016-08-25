// 基路径设置到前端根目录, 这里以页面路径为准
requirejs.config({
    baseUrl: '../../'
});

requirejs([
    'product/configs/require-conf'
], function (req) {

    require.config(req());  // 进行 requirejs 配置

    require([
        'veronica',
        'product/entries/' + window.__appName + '/main'
    ], function (veronica, starter) {
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
        }, starter.config));

        // 修复 lodash 或 underscore 没有的方法
        if (!_.any) {
            _.any = _.some;
        }

        starter.init(app);

        extension(app);
        page(app);

        app.launch().done(function () {
            app.page.start(false);
            starter.launch(app);
        });
    });
});