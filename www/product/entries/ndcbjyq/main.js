// 基路径设置到前端根目录
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
        'product/entries/ndcbjyq/extension',
        'product/entries/ndcbjyq/page',
        'product/entries/ndcbjyq/module'
    ], function (veronica, extension, page, module) {

        // 创建应用程序
        var app = veronica.createApp({
            homePage: 'ndcbjyq_workdeck_handle',
            //extensions: ['veronica-ui-pro'],
            modules: module,
            autoParseWidgetName: false,
            autoBuildPage: true,
            autoParseSource: true,
            releaseWidgetPath: releaseWidgetPath,
            // 默认的 widget 查找模式支持三级目录，这里更改以支持最大5级目录
            widgetNamePattern: /(\w*)-?(\w*)-?(\w*)-?(\w*)-?(\w*)/
        });
        app.uiKit.setDefault('keboacy');
        app.viewEngine.setDefault('kendo');

        var _ = app.core._;

        // 修复 lodash 或 underscore 没有的方法
        if (!_.any) {
            _.any = _.some;
        }

        extension(app);
        page(app);

        app.data.set('zoneKey', '5117021040020001');
        app.data.set('zoneLongText', '四川省达州市通川区复兴镇凤舞社区1组');

        app.launch().done(function () {
            app.page.start(false);
        });
    });
});