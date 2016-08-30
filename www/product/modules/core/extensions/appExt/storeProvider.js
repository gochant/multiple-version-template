// 模板扩展
define([], function () {
    return function (app) {
        var _ = app.core._;
        var kendo = app.core.kendo;
        var backendApi = app.backendApi;
        var DataSource = kendo.data.DataSource;
        var extend = app.core.$.extend;
        var each = app.core.$.each;
        var parentGetMethod = app.providerBase.get;

        app.storeProvider = app.provider.create({
            defaultSetting: function () {

            },
            get: function (name, context) {
                var store = this._call(parentGetMethod, arguments);
                // 1. 从后端上下文获取
                // 2. 从纯前端 Id 获取
                if (store == null) {
                    // 从当前上下文获取后台存储
                    if (/^@/.test(name)) {
                        var apiName = name.substr(1).replace(/^@/, context).replace('[this]', context);
                        var api = backendApi.get(apiName);
                        store = store.backendApiSource(api);
                        if (api.reusable) {
                            this.add(name, store);
                        }
                    }
                }

                return store;
            }
        });

        app.storeProvider.operatorMapping = {
            'create': 'add',
            'read': 'read',
            'update': 'update',
            'delete': 'remove'
        }


        app.storeHandler = function () { }

    };
});
