
require(['../require-conf'], function (config) {

    var devPath = 'http://192.168.1.18:8097/cdn/vendor';  // ����ʱ·��
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
                name: 'basic',
                parentPath: '../widgets',
                widgetPath: '',
                multilevel: true,
                hasEntry: false
            }, {
                name: 'project',
                parentPath: './modules',
                widgetPath: '',
                multilevel: true,
                hasEntry: false
            }],
            homePage: 'project/projects/follows',
            autoParseWidgetName: false,
            autoBuildPage: true
        });



        app.launch().done(function () {

            // ���ش洢���������������
            require(['store'], function (store) {
                app.store = store;
            });

            require(['extension'], function (extension) {
                app.use(extension);
                app.ui.initSidebar();
                app.page.start();

                if ($('.menu-item').find('.fa-legal').length > 0) {
                    app.request.getJSON('Works/List').done(function (resp) {
                        if (resp && resp.success) {
                            var total = resp.total;
                            if (total) {
                                $('li .fn-sp').html(total);
                                //app.store.set('workCount', total);
                            }
                        }
                    });
                }
            });

        });
    });
});