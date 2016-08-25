define([
    './extension',
    './module',
    './page'
], function (extension, module, page) {
    return {
        config: {
            homePage: 'ndcbjyq_workdeck_handle'
        },
        init: function (app) {

            extension(app);
            module(app);
            page(app);

            app.uiKit.setDefault('keboacy');
            app.viewEngine.setDefault('kendo');

            app.data.set('zoneKey', '5117021040020001');
            app.data.set('zoneLongText', '四川省达州市通川区复兴镇凤舞社区1组');

        },
        launch: function () {
            app.page.start(false);
        }
    }
})