// 模板扩展
define([], function () {
    return function (app) {
        var _ = app.core._;
        var kendo = app.core.kendo;
        var extend = app.core.$.extend;

        var parentGetMethod = app.providerBase.get;
        app.storeProvider = app.provider.create({
            get: function (name, context) {
                var store = this._call(parentGetMethod, arguments);
                if (store == null) {
                    if (/^@/.test(name)) {
                        // 创建 backend api store
                        var parent = context + '.';
                        var apiName = name.substr(1).replace(/^@/, parent).replace('[this]', parent);
                        var backendApi = app.backendApi.get(apiName);
                        var options = app.optionsProvider.get('store.default');

                        store = app.store.backendApiSource(extend(true, {}, options, backendApi));

                        if (backendApi.reusable) {
                            this.add(name, store);
                        }
                    }
                }

                return store;
            }
        });

    };
});
