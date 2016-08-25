define([
], function () {
    return function (app) {

        var models = {
            account: {

            },
            ndcbjyq: {
                mainMenu: [{

                }],
                // 申请书
                registrationApplication: {
                    fields: {
                        PetitionType: {
                            displayName: '申请类型',
                            type: 'string',
                            uiHint: 'select'
                        },
                        PetitionName: {
                            displayName: '申请人',
                            type: 'string',
                            validation: {
                                required: true
                            }
                        },
                        PetitionDate: {
                            displayName: '申请日期',
                            type: 'date'
                        },
                        PetitionOptions: {
                            displayName: '申请事由',
                            type: 'string',
                            uiHint: 'textarea'
                        }
                    }
                },
                // 登记簿
                registrationBook: {
                    fields: {
                        OutsourcerNumber: {
                            displayName: '发包方',
                            type: 'string',
                            uiHint: 'select'
                        },
                        ContractWay: {
                            displayName: '承包方式',
                            type: 'string',
                            uiHint: 'select',
                            validation: {
                                required: true
                            }
                        },
                        RegisteDate: {
                            displayName: '登记日期',
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
                            displayName: '姓名',
                            type: 'string',
                            validation: {
                                required: true
                            }
                        },
                        CredType: {
                            displayName: '证件类型',
                            type: 'string',
                            uiHint: 'select',
                            validation: {
                                required: true
                            }
                        },
                        Number: {
                            displayName: '证件号码',
                            type: 'string'
                        },
                        Gender: {
                            displayName: '性别',
                            type: 'string',
                            uiHint: 'select',
                            validation: {
                                required: true
                            }
                        },
                        Birth: {
                            displayName: '出生日期',
                            type: 'date',
                            displayFormat: 'yyyy-MM-dd'
                        },
                        Rel: {
                            displayName: '与户主关系',
                            type: 'string',
                            uiHint: 'select'
                        },
                        IsShare: {
                            displayName: '是否共有人',
                            type: 'boolean',
                            uiHint: 'radiogroup',
                            validation: {
                                required: true
                            }
                        },
                        Comment: {
                            displayName: '备注',
                            type: 'string',
                            uiHint: 'combobox'
                        },
                        GenderDisplay: {
                            displayName: '性别',
                            calculate: function(context, app) {
                                return app.dataUtil.getSelectListDisplay(context.GenderList, this.Gender);
                            }
                        },
                        RelDisplay: {
                            displayName: '与户主关系',
                            calculate: function(context, app) {
                                return app.dataUtil.getSelectListDisplay(context.RelList, this.Rel);
                            }
                        }

                    },
                    views: {
                        list: ['Name', 'Number', 'GenderDisplay', 'Birth', 'RelDisplay']
                    }
                },
                // 承包方
                contractor: {
                    displayName: '承包方',
                    fields: {

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
