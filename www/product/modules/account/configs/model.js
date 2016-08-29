define([
], function () {
    return function (app) {

        var models = {
            account: {
                appInfo: {
                    title: '账户中心'
                },
                user: {
                    id: 'id',
                    fields: {
                        id: {
                            displayName: '标识',
                            type: 'string',
                            validation: {
                                required: true
                            }
                        },
                        userId: {
                            displayName: '标识',
                            type: 'string',
                            validation: {
                                required: true
                            }
                        },
                        username: {
                            displayName: '账户名',
                            type: 'string',
                            validation: {
                                required: true
                            }
                        },
                        password: {
                            displayName: '密码',
                            type: 'string',
                            uihint: 'password',
                            validation: {
                                pattern: /.{6,}/
                            }
                        },
                        confirmPassword: {
                            displayName: '密码确认',
                            type: 'string',
                            uihint: 'password',
                            validation: {
                                pattern: /.{6,}/
                            }
                        },
                        realName: {
                            displayName: '姓名',
                            type: 'string'
                        },
                        email: {
                            displayName: '邮箱',
                            type: 'string',
                            uihint: 'email'
                        },
                        emailConfirmed: {
                            displayName: '确认邮箱',
                            type: 'string',
                            uihint: 'email'
                        },
                        lockoutEnabled: {
                            displayName: '是否被锁定',
                            type: 'boolean'
                        },
                        lockoutEndDateUtc: {
                            displayName: '锁定结束时间',
                            type: 'date'
                        },
                        accessFailedCount: {
                            displayName: '失败次数',
                            type: 'number'
                        },
                        disabled: {
                            displayName: '是否被禁用',
                            type: 'boolean'
                        },
                        twoFactorEnabled: {
                            displayName: '启用两步验证',
                            type: 'boolean'
                        },
                        securityStamp: {
                            displayName: '安全戳',
                            type: 'string'
                        },
                        building: {
                            displayName: '是否系统內建用户',
                            type: 'boolean'
                        }
                      
                    },
                    views: {
                        list: ['username', 'realName', 'email', 'disabled'],
                        resetPassword: ['userId', 'password', 'confirmPassword'],
                        add: ['username', 'password', 'realName', 'email'],
                        modify: ['id', 'realName', 'email', 'telephone']
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
