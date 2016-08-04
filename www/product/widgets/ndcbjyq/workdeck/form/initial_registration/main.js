define([
    'text!./index.html',
    'ver!ndcbjyq-workdeck-form-family_member'
], function (tpl, FamilyMember) {
    return {
        template: tpl,
        defaults: {
            autoAction: true,
            bindBlock: true,
            modelName: 'registrationBook',
            url: {
                defaults: 'g:[this].initialRegistration.defaults',
                contractIssuingParty: 'g:[this].contractIssuingParty.query',
                dic: 'g:[this].common.dic'
            },
            read: function (app) {
                return [
                    {
                        url: 'dic',
                        map: [{
                            from: 'data.ContractWays',
                            to: 'ContractWayList',
                            parse: app.parseProvider.kvToSelectList
                        }, {
                            from: 'data.ContractPurposes',
                            to: 'ContractPurposeList',
                            parse: app.parseProvider.kvToSelectList
                        }, {
                            from: 'data.contractorTypeKv',
                            to: 'ContractorTypeList',
                            parse: app.parseProvider.kvToSelectList
                        }, {
                            from: 'data.contractorCredKv',
                            to: 'ContractorCredList',
                            parse: app.parseProvider.kvToSelectList
                        }]
                    }, {
                        url: 'contractIssuingParty',
                        params: {
                            zoneCode: this.attr('zoneKey'),
                            withAll: true
                        },
                        map: {
                            from: 'data',
                            to: 'OutsourcerNumberList',
                            parse: app.parseProvider.toSelectList('Number', 'Name')
                        }
                    }, {
                        url: 'defaults',
                        params: {
                            zoneCode: this.attr('zoneKey'),
                            zoneName: this.attr('zoneLongText')
                        },
                        map: {
                            from: 'data',
                            to: 'data',
                            parse: function (data) {
                                data.Persons = [];
                                return data;
                            }
                        }
                    }
                ];
            }

        },
        mixins: function (app) {
            return [app.viewHelper.form];
        },
        staticModel: function (app) {
            return {
                tabIndex: 0,
                prevStatus: function (a, aa, aaa) {
                    return this.get('tabIndex') === 0;
                },
                nextStatus: function (a, aa, aaa) {
                    return this.get('tabIndex') === 5;
                }
            }
        },
        initAttr: function () {
            this.defineAttr({
                name: 'zoneKey',
                source: 'global',
                setup: 'init'
            });
            this.defineAttr({
                name: 'zoneLongText',
                source: 'global',
                setup: 'init'
            });
            this.model({
                data: {},
                OutsourcerNumberList: [],
                OutsourcersList: [],
                ContractWayList: [],
                ContractPurposeList: [],
                ContractorTypeList: [],
                ContractorCredList: []
            }, false);
        },
        listen: function (app) {
            this.listenTo('add-member', 'saved', function (data) {
                var persons = this.model('data.Persons');
                app.dataSourceHandler.add(persons, data);
            });
        },
        rendered: function (app) {
            var me = this;
            app.ext.dynamicTab(this.$el);
            this.$('[data-dynamic=main] [data-toggle="tab"]').on('shown.bs.tab', function (e) {
                var idx = $(e.target).closest('.nav-item').index();
                me.model().set('tabIndex', idx);
            });
        },
        prevHandler: function () {
            this.$('[data-dynamic=main]').find('.active').prev().find('[data-toggle=tab]').tab('show');
        },
        nextHandler: function () {
            this.$('[data-dynamic=main]').find('.active').next().find('[data-toggle=tab]').tab('show');
        },
        addMemberHandler: function (e, app) {
            this.viewWindow('add-member', FamilyMember, null, app.configProvider.normalModal());
        },
        saveHandler: function (e, app, _, $) {
            this.validate().done(function () {
                this.save();
            });
        }
    };
});
