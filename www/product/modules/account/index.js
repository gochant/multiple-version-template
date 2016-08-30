define([
    './configs/backendApi',
    './configs/model',
    './configs/page',
    './configs/meta'
], function theFunc(backendApi, model, page, meta) {
    return function (app) {
        app.model.apply(theFunc, arguments);
    };
});