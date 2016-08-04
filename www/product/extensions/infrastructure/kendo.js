define([
    'kendo-ui-pro',
    'kendo-ui-pro-culture',
    'kendo-ui-pro-messages'
], function () {

    return function (app) {

        var _ = app.core._;
        var $ = app.core.$;
        var kendo = app.core.kendo || window.kendo;

        kendo.culture('zh-CN');

        // date 绑定
        kendo.data.binders.date = kendo.data.Binder.extend({
            init: function (element, bindings, options) {
                kendo.data.Binder.fn.init.call(this, element, bindings, options);

                this._change = $.proxy(this.change, this);

                $(this.element).on('change', this._change);

            },

            refresh: function () {

                var date = this.bindings.date.get();
                var dateTxt;
                if (!date) {
                    dateTxt = "";
                } else {
                    if (_.isString(date)) {
                        date = kendo.parseDate(date);
                    }
                    var format = $(this.element).data('format') ||
                     kendo._extractFormat('yyyy/MM/dd');
                    dateTxt = kendo.toString(date, format);
                }
                if ('value' in this.element) {
                    this.element.value = dateTxt;
                } else {
                    this.element.innerHTML = dateTxt;
                }
            },
            change: function () {
                var value = this.element.value;
                this.bindings.date.set(value);
            }
        });

        app.kendoUtil || (app.kendoUtil = {});

        // 获取选中的项（支持 kendoui 的 listview 和 grid）
        app.kendoUtil.getSelectedItem = function (list, toJSON) {
            if (toJSON == null) toJSON = true;
            var source = list.dataSource;
            var items = _.map(list.select(), function (el) {
                // grid 有 dataItem 方法
                if (list.dataItem) {
                    return list.dataItem($(el));
                } else {
                    var uid = $(el).data().uid;
                    if (source.getByUid) {
                        return source.getByUid(uid);
                    } else {
                        return _.find(source, function (item) {
                            return item.uid === uid;
                        });
                    }
                }
            });
            if (toJSON) {
                items = _[_.invokeMap ? 'invokeMap' : 'invoke'](items, 'toJSON');
            }
            return items.length === 0 ? null : (items.length === 1 ? items[0] : items);
        };

        // 获取选中项的 id
        app.kendoUtil.getSelectedId = function (list) {
            var dataItem = app.kendoUtil.getSelectedItem(list);
            if (_.isArray(dataItem)) {
                return _.map(dataItem, function (item) {
                    return item.id;
                })
            }
            return dataItem === null ? dataItem : dataItem.id;
        };

        app.kendoUtil.confirmSelected = function (list, callback) {
            var item = app.kendoUtil.getSelectedItem(list);
            if (item == null) {
                app.notify.warn('未选择任何数据！');
            } else {
                callback.call(this, item);
            }
        }


    };
});
