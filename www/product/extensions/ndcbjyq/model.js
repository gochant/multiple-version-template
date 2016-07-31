define([
], function () {
    return function (app) {

        var $ = app.core.$;

        app.modelProvider || (app.modelProvider = {});

        //app.modelProvider.ndcbjyq = {

        //}
        $.extend(app.modelProvider, {
            ndcbjyq: {
                // 申请书
                registrationApplication: {
                    PetitionType: {
                        name: '申请类型',
                        type: 'string',
                        uiHint: 'dropdownlist'
                    },
                    PetitionName: {
                        name: '申请人',
                        type: 'string',
                        validation: {
                            required: true
                        }
                    },
                    PetitionDate: {
                        name: '申请日期',
                        type: 'date'
                    },
                    PetitionOptions: {
                        name: '申请事由',
                        type: 'string',
                        uiHint: 'textarea'
                    }
                },
                registrationBook: {
                    OutsourcerNumber: {
                        name: '发包方',
                        type: 'string',
                        uiHint: 'dropdownlist'
                    },
                    ContractWay: {
                        name: '承包方式',
                        type: 'string',
                        uiHint: 'dropdownlist',
                        validation: {
                            required: true
                        }
                    },
                    RegisteDate: {
                        name: '登记日期',
                        type: 'date'
                    }
                }
            }
        });
    }
});
