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
                        },
                        Password: {
                            displayName: '密码',
                            type: 'string',
                            uihint: 'password'
                        },
                        NewPassword: {
                            displayName: '新密码',
                            type: 'string',
                            uihint: 'password'
                        },
                        PasswordConfirm: {
                            displayName: '密码确认',
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
