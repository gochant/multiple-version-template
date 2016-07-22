define([
], function () {

    return function (app) {

        var _ = app.core._;

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


        var oldWindowInstance = app.view.base._windowInstance;
        app.view.base._windowInstance = function ($el, config, view) {
            var me = this;
            if (config.type === 'modal') {
                return oldWindowInstance($el, config, destroy);
            } else {
                config.options.modal = true;
                config.type || (config.type = 'widget');//修改this.window里面没有配置type的情况
                $el.kendoWindow(config.options);
                var dlg = $el.data('kendoWindow');
                //if (config.type !== 'normal' && (config.children || config.widgetOpt || config.viewOpt)) {
                if (config.destroyedOnClose) {
                    dlg.bind('close', function () {
                        view._destroyWindow(config.name);
                    });
                }
                if (config.options.full) {
                    dlg.bind('open', function() {
                        dlg.maximize();
                    });
                }
                dlg.rendered = function (view) {
                    this.element.find('.fn-s-loading').remove();
                }

                dlg.config = config;
                dlg.core = dlg;
                return dlg;
            }
        }
    };
});
