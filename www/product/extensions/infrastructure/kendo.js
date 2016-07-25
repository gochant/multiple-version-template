define([
], function () {

    return function (app) {

        var _ = app.core._;
        var $ = app.core.$;

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
        app.view.base._windowInstance = function ($el, options, view) {

            if (options.type === 'modal') {
                var wnd = {
                    element: $el,
                    config: options,
                    close: function () {
                        this.element.modal('hide');
                    },
                    destroy: function () {
                    },
                    center: function () {
                    },
                    /**
                     * 打开对话框
                     */
                    open: function () {
                        this.element.modal('show');
                    },
                    rendered: function (view) {
                        
                    },
                    setOptions: function (opt) {
                    }
                };

                if (options.destroyedOnClose) {
                    $el.modal().on('hidden.bs.modal', function() {
                        view._destroyWindow(options.name);
                    });
                }

                wnd.core = $el.data('bs.modal');

                return wnd;
            }
            if (options.type === 'dialog') {
                return oldWindowInstance.call(this, $el, options, view);
            }

            var dlgOptions = options.options;

            dlgOptions.modal = true;
            $el.kendoWindow(dlgOptions);
            var dlg = $el.data('kendoWindow');
            if (options.destroyedOnClose) {
                dlg.bind('close', function () {
                    view._destroyWindow(options.name);
                });
            }
            if (options.full) {
                dlg.bind('open', function () {
                    dlg.maximize();
                });
            }
            dlg.rendered = function (view) {
                this.element.find('.fn-s-loading').remove();
            }

            dlg.config = options;
            dlg.core = dlg;

            return dlg;

        }
    };
});
