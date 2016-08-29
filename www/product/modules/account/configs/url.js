define([
], function () {
    return function (app) {

        var $ = app.core.$;
        var domain = 'http://192.168.1.18:7100/';  // 跨域配置 27344

        app.urlProvider || (app.urlProvider = {});

        $.extend(app.urlProvider, {
            account: {
                user: {
                    query: domain + 'user/pageUser',
                    add: domain + 'user/saveUser',
                    modify: domain + 'user/updateUser',
                    remove: domain + 'user/deleteUser',
                    resetPassword: domain + 'user/resetPassword',
                }
            }
        });
    }
});
