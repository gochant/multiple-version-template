
require(['../require-conf'], function (config) {

    var devPath = 'http://localhost:8001/vendor';  // ����ʱ·��
    var releasePath = './vendor';  // ����ʱ·��
    require.config(config(devPath, releasePath));  // ���� requirejs ����

    require([
        'veronica'
    ], function (veronica) {

        // ����Ӧ�ó���
        var app = veronica.createApp({
            global: true,
            extensions: ['veronica-ui'],
            modules: [{
                name: 'module1',
                parentPath: '../',
                widgetPath: '',
                multilevel: true,
                hasEntry: false
            }],
            homePage: 'geo',
            autoParseWidgetName: false,
            autoBuildPage: true
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

        app.launch().done(function () {
            app.page.start(true);
        });
    });
});