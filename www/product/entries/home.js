requirejs.config({
    baseUrl: '../../'
});

requirejs([
    'product/configs/require-conf',
    'product/configs/home/extension',
    'product/configs/home/page',
    'product/configs/home/module'
], function (req, extension, page, module) {

    var devPath = 'http://192.168.1.18:8097/cdn/vendor';  // ����ʱ·��
    // var devPath = 'http://localhost:8001/vendor';  // ����ʱ·��
    var releasePath = 'vendor';  // ����ʱ·��
    var releaseWidgetPath = 'widgets';

    require.config(req(devPath, releasePath));  // ���� requirejs ����

    require([
        'veronica',
        'kendo-ui-pro'
    ], function (veronica) {

        // ����Ӧ�ó���
        var app = veronica.createApp({
            homePage: 'geo',
            //extensions: ['veronica-ui-pro'],
            modules: module,
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