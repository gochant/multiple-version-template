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
                value: "5117021002010001"
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
            var url = this.url('query');
            this.model({
                source: app.data.remoteComplexSource(url)
            }, false);
        },
        refreshHandler: function (e, app) {
            this.query();
        },
        detailHandler: function (e, app) {
            var me = this;
            app.kendoUtil.confirmSelected(this.list(), function (item) {
                var wnd = me.widgetWindow('ndcbjyq-query-detail-registration_book', {
                    _source: 'ndcbjyq',
                    id: item.ID
                }, {
                    full: true,
                    type: 'modal',
                    template: $('#modal-template').html(),
                    options: {
                        title: '登记簿详情'
                    }
                });
                // wnd.core.maximize();
            });
        }
    };
});
