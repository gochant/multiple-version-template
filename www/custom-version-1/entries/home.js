requirejs.config({
    baseUrl: '../../'
});

requirejs([
    'product/configs/require-conf',
    'product/configs/home/extension',
    'custom-version-1/configs/home/page',
    'custom-version-1/configs/home/module'
], function (req, extension, page, module) {

    var devPath = 'http://192.168.1.18:8097/cdn/vendor';  // ����ʱ·��
    // var devPath = 'http://localhost:8001/vendor';  // ����ʱ·��
    var releasePath = 'vendor';  // ����ʱ·��
    var releaseWidgetPath = 'widgets';

    require.config(req(devPath, releasePath));  // ���� requirejs ����

    require([
        'veronica'
    ], function (veronica) {

        // ����Ӧ�ó���
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