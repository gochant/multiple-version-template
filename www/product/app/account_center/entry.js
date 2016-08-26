define([
    '../../modules/core/index',
    '../../modules/account/index'
], function () {
    var modules = Array.prototype.slice.call(arguments);
    return {
        config: {
            homePage: 'account_manage_user'
        },
        init: function (app) {
            app.use(modules);

        },
        launch: function (app) {
        }
    }
})