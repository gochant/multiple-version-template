define([
], function () {
    return function (app) {

        var $ = app.core.$;
        var domain = 'http://192.168.1.18:7900/';

        app.urlProvider || (app.urlProvider = {});

        $.extend(app.urlProvider, {
            ndcbjyq: {
                registrationBook: {
                    query: domain + 'CBD/Search/SearchRegister'
                }
            }
        });
    }
});
