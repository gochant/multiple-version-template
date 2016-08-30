// 模板扩展
define(['./apiDataSource'], function (ApiDataSource) {
    return function (app) {

        var extend = app.core.$.extend;
        var store = app.store;

        store.model.IDFIELD = 'id';

        store.backendApiSource = function (api, options) {
            return new ApiDataSource(extend(true, options, {
                transport: api
            }));
        }

    };
});
