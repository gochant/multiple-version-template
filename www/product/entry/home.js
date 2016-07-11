requirejs.config({
    baseUrl: '../../'
});

requirejs([
    'product/config/require-conf',
    'product/config/home/extension',
    'product/config/home/page'
], function (req, extension, page) {


    var devPath = 'http://192.168.1.18:8097/cdn/vendor';  // ����ʱ·��
    var devPath = 'http://localhost:8001/vendor';  // ����ʱ·��

    var releasePath = 'vendor';  // ����ʱ·��
    require.config(req(devPath, releasePath));  // ���� requirejs ����

    require([
        'veronica'
    ], function (veronica) {

        // ����Ӧ�ó���
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
                name: '����λ',
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