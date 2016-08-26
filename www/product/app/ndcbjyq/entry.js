define([
    '../../modules/core/index',
    '../../modules/ndcbjyq/index'
], function () {
    var modules = Array.prototype.slice.call(arguments);
    return {
        config: {
            homePage: 'ndcbjyq_workdeck_handle'
        },
        init: function (app) {
            app.use(modules);

            app.data.set('zoneKey', '5117021040020001');
            app.data.set('zoneLongText', '四川省达州市通川区复兴镇凤舞社区1组');

        },
        launch: function (app) {
           // app.page.start(false);
        }
    }
})