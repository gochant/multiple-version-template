define([
], function () {
    return function (app) {

        var models = {
            ndcbjyq: {
                // 申请书
                registrationApplication: {
                    fields: {
                        PetitionType: {
                            name: '申请类型',
                            type: 'string',
                            uiHint: 'select'
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
                    }
                },
                // 登记簿
                registrationBook: {
                    fields: {
                        OutsourcerNumber: {
                            name: '发包方',
                            type: 'string',
                            uiHint: 'select'
                        },
                        ContractWay: {
                            name: '承包方式',
                            type: 'string',
                            uiHint: 'select',
                            validation: {
                                required: true
                            }
                        },
                        RegisteDate: {
                            name: '登记日期',
                            type: 'date',
                            uiHint: 'date'
                        }
                    }

                },
                // 家庭成员
                familyMember: {
                    displayName: '家庭成员',
                    fields: {
                        Name: {
                            name: '姓名',
                            type: 'string',
                            validation: {
                                required: true
                            }
                        },
                        CredType: {
                            name: '证件类型',
                            type: 'string',
                            uiHint: 'dropdownlist',
                            validation: {
                                required: true
                            }
                        },
                        Number: {
                            name: '证件号码',
                            type: 'string'
                        },
                        Gender: {
                            name: '性别',
                            type: 'string',
                            uiHint: 'dropdownlist',
                            validation: {
                                required: true
                            }
                        },
                        Birth: {
                            name: '出生日期',
                            type: 'date',
                            uiHint: 'datepicker'
                        },
                        Rel: {
                            name: '与户主关系',
                            type: 'string',
                            uiHint: 'dropdownlist'
                        },
                        IsShare: {
                            name: '是否共有人',
                            type: 'boolean',
                            uiHint: 'radiogroup',
                            validation: {
                                required: true
                            }
                        },
                        Comment: {
                            name: '备注',
                            type: 'string',
                            uiHint: 'combobox'
                        },
                        GenderDisplay: {
                            name: '性别',
                            calculate: function(context, app) {
                                return app.dataHandler.pickEnumName(this.Gender, context.GenderList);
                            }
                        },
                        RelDisplay: {
                            name: '与户主关系',
                            calculate: function(context, app) {
                                return app.dataHandler.pickEnumName(this.Rel, context.RelList);
                            }
                        }

                    },
                    views: {
                        list: ['Name', 'Number', 'GenderDisplay', 'Birth', 'RelDisplay']
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
