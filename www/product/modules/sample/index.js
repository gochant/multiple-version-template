define([
    './configs/backendApi',
    './configs/model',
    './configs/page',
    './configs/meta'
], function theFunc(backendApi, model, page, meta) {
    return function (app) {
        app.module.setup({
            backendApi: backendApi,
            model: model,
            page: page,
            meta: meta
        });
    };
});