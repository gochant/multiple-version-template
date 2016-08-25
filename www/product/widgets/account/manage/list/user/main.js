define([
    'text!./index.html'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
            autoResize: true,
            autoAction: true,
            url: {
                query: 'g:[this].registrationBook.query'
            }
        },
        resize: function () {
            this.list().resize();
        },
        modelBound: function () {
            this.query();
        },
        query: function () {
            this.model('source').filter([{
                field: "zoneCode",
                operator: "eq",
                value: this.attr('zoneKey')
            }]);
        },
        list: function () {
            return this.instance('[data-role=grid]');
        },
        isSelected: function () {
            var rows = this.list().select();
            return rows.length === 0 ? false : rows.length;
        },
        initAttr: function (app) {
            // 初始化数据
            this.attr({
                name: 'zoneKey',
                source: 'global'
            });

            var url = this.url('query');
            this.model({
                source: app.store.remoteComplexSource(url)
            }, false);
        },
        listen: function () {
            this.listenTo(this, 'attr-changed', function(name, value) {
                if (name === 'zoneKey') {
                    this.query();
                }
            });
        },
        refreshHandler: function (e, app) {
            this.query();
        },
        detailHandler: function (e, app) {
            var me = this;
            app.kendoUtil.confirmSelected(this.list(), function (item) {
                me.widgetWindow('ndcbjyq-query-detail-registration_book', {
                    _source: 'ndcbjyq',
                    id: item.ID
                }, {
                    full: true,
                    type: 'modal',
                    template: me.$('#modal-template').html(),
                    options: {
                        title: '登记簿详情'
                    }
                });
                // wnd.core.maximize();
            });
        }
    };
});
