define([
], function () {
    return function (app) {

        var $ = app.core.$;
        var domain = 'http://192.168.1.18:7100/';  // øÁ”Ú≈‰÷√£∫27344

        app.urlProvider || (app.urlProvider = {});

        $.extend(app.urlProvider, {
            core: {
                zone: {
                    nav: domain + 'Base/Nav/Zone',
                    parents: domain + 'Base/Nav/ZoneParents'
                }
            },
            ndcbjyq: {
                registrationBook: {
                    query: domain + 'CBD/Search/SearchRegister',
                    detail: domain + 'CBD/Common/GetRegisterWithLandAndPerson'
                }
            }
        });
    }
});
