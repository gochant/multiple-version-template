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

        // utility
        var _ = app.core._;
        var getParameterNames = app.core.util.getParameterNames;
        app.module.setup = function (func, args) {
            var names = getParameterNames(func);
            var config = {};

            _.each(names, function (name, i) {
                config[name] = args[i];
            });

            _.each(config, function (conf, name) {
                if (name === 'extension') {
                    app.use(conf);
                }
                if (name === 'backendApi') {
                    app.backendApi.add(conf);
                }
                if (name === 'meta') {
                    app.module.add(conf.name, conf);
                }
                if (name === 'model') {
                    app.modelProvider || (app.modelProvider = {});
                    _.extend(app.modelProvider, conf);
                }
                if (name === 'page') {
                    app.page.add(conf);
                }
                if (name === 'url') {
                    app.urlProvider || (app.urlProvider = {});
                    _.extend(app.urlProvider, conf);
                }
            })
        }


        app.use(veronicaui);
        app.uiKit.setDefault('keboacy');
        app.viewEngine.setDefault('kendo');
        app.formValidation.setDefault('jqv');
        app.windowProvider.setDefault('bs-modal');

        entry.init && entry.init(app);

        app.launch().done(function () {
            app.page.start(false);
            entry.launch && entry.launch(app);
        });
    });
});