// 模板扩展
define([], function () {
    return function (app) {

        var extend = app.core.$.extend;
        var map = app.core.$.map;
        var _ = app.core._;
        var store = app.store;
        var whenSingleResult = app.core.whenSingleResult;

        store.model.IDFIELD = 'id';

        store.backendApiSource = function (options) {
            return new kendo.data.ApiDataSource(options);
        }

        function StoreHandler(stores, view) {
            this._pool = stores;
            this._view = view;
        }

        StoreHandler.prototype = {
            constructor: StoreHandler,
            get: function (name) {
                // 如果不传名称，获取第一个值
                if (name == null) {
                    return this._pool[_.keys(this._pool)[0]];
                } else {
                    return this._pool[name];
                }
            },
            getAll: function () {
                return this._pool;
            },
            exec: function (cmdName) {
                var me = this;
                var queue = map(this._pool, function (store, name) {
                    var cmd = store._config.commands[cmdName];
                    if (typeof cmd === 'string') {
                        cmd = app.methodProvider.get('store.' + cmd);
                        if (cmd != null) {
                            return cmd.call(this, me._view);
                        }
                    }
                });

                return whenSingleResult.apply(null, queue);
            }
        }

        store.createHandler = function (stores, view) {
            return new StoreHandler(stores, view);
        }
    };
});
