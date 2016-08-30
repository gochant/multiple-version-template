// 模板扩展
define(['./base/apiDataSource'], function (ApiDataSource) {
    return function (app) {
        var _ = app.core._;
        var backendApi = app.backendApi;
        var DataSource = kendo.data.DataSource;
        var extend = app.core.$.extend;
        var each = app.core.$.each;

        app.store || (app.store = {});

        var store = app.store;

        store.model.IDFIELD = 'id';


        store.backendSource = function (backendApi) {
            return store.source({
                pageSize: 20,
                page: 1,
                serverPaging: true,
                serverSorting: true,
                serverFiltering: true,
                schema: {
                    //type: 'json',
                    model: store.model(),
                    data: 'data',
                    total: 'total'
                },
                transport: {
                    read: {
                        url: url,
                        type: 'POST',
                        dataType: "json",
                        contentType: "application/json; charset=utf-8"
                    },
                    parameterMap: function (data, type) {
                        if (type === "read") {
                            return JSON.stringify(data);
                        }
                        return data;
                    }
                }
            });
        }

    };
});
