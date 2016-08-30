define([
], function () {

    return function (app) {



        app.optionsProvider.add('store.default', {
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
    };
});
