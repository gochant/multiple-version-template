define([
    //'text!./index.html'
    './index.tpl'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
            autoAction: true,
            bindBlock: true,
            url: {
                defaults: 'g:[this].initialRegistration.defaults',
                contractIssuingParty: 'g:[this].contractIssuingParty.query',
                dic: 'g:[this].common.dic'

            }
          
        },
        staticModel: function (app) {
            var me = this;
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
        requestData: function (app) {
            var _ = app.core._;
            var me = this;
            app.request.getBundle(
                app.request.getJSONCross(this.url('defaults'), {
                    zoneCode: this.attr('zoneKey'),
                    zoneName: this.attr('zoneLongText')
                }),
                app.request.getJSONCross(this.url('dic')),
                app.request.getJSONCross(this.url('contractIssuingParty'), {
                    zoneCode: this.attr('zoneKey'),
                    withAll: true
                })
            ).done(function (resp1, resp2, resp3) {
                var model = {
                    data: resp1.data
                }

                model.OutsourcerNumberList = _.map(resp3.data, function (item) {
                    return {
                        name: item.Name,
                        value: item.Number
                    };
                });

                model.ContractWayList = _.map(resp2.data.ContractWays, function(item) {
                    return {
                        name: item.Value,
                        value: item.Key
                    }
                });

                model.ContractPurposeList = _.map(resp2.data.ContractPurposes, function (item) {
                    return {
                        name: item.Value,
                        value: item.Key
                    }
                });
                model.ContractorTypeList = _.map(resp2.data.contractorTypeKv, function (item) {
                    return {
                        name: item.Value,
                        value: item.Key
                    }
                });
                model.ContractorCredList = _.map(resp2.data.contractorCredKv, function (item) {
                    return {
                        name: item.Value,
                        value: item.Key
                    }
                });

                me.model(model);
            });
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
            this.model({}, false);
        },
        rendered: function (app) {
            var me = this;
            app.ext.dynamicTab(this.$el);
            this.requestData(app);
            this.$('.data-validate-form').kendoValidator({
                errorTemplate: '<span title="#=message#"><i class="fa fa-exclamation-circle"></i></span>',
                validate: function (e, ee, eee) {
                    debugger;
                }

            });

            this.$('[data-dynamic=main] [data-toggle="tab"]').on('shown.bs.tab', function(e) {
                var idx = $(e.target).closest('.nav-item').index();
                me.model().set('tabIndex', idx);
            });
        },
        prevHandler: function () {
            this.$('[data-dynamic=main]').find('.active').prev().find('[data-toggle=tab]').tab('show');
        },
        nextHandler: function () {
            this.$('[data-dynamic=main]').find('.active').next().find('[data-toggle=tab]').tab('show');
        }
    };
});
