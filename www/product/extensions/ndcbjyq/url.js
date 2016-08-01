define([
], function () {
    return function (app) {

        var $ = app.core.$;
        var domain = 'http://192.168.1.18:7100/';  // 跨域配置：27344

        app.urlProvider || (app.urlProvider = {});

        $.extend(app.urlProvider, {
            core: {
                zone: {
                    nav: domain + 'Base/Nav/Zone',
                    parents: domain + 'Base/Nav/ZoneParents'
                }
            },
            ndcbjyq: {
                // 登记簿
                registrationBook: {
                    query: domain + 'CBD/Search/SearchRegister',
                    detail: domain + 'CBD/Common/GetRegisterWithLandAndPerson'
                },
                // 发包方
                contractIssuingParty: {
                    query: domain + 'CBD/Contractee/Get'
                },
                // 公共部分
                common: {
                    dic: domain + 'CBD/Common/GetAgreementDic',
                    personDic: domain + 'CBD/Common/GetPersonDic'
                },
                // 初始登记
                initialRegistration: {
                    defaults: domain + 'CBD/Init/GetDefaults'
                }
            }
        });
    }
});
