define([
], function () {
    return function (app) {

        var models = {
            account: {
                appInfo: {
                    title: '账户中心'
                },
                user: {
                    fields: {
                        Name: {
                            displayName: '姓名',
                            type: 'string'
                        }
                    },
                    views: {
                        list: ['Name']
                    }

                }
            }
        };

        // browser
        if (app) {
            var $ = app.core.$;
            app.modelProvider || (app.modelProvider = {});
            $.extend(app.modelProvider, models);
        }

        return models;
    }
});
