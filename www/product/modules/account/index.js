define([
    './configs/backendApi',
    './configs/model',
    './configs/page',
    './configs/meta'
], function theFunc(backendApi, model, page, meta) {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.module.setup(theFunc, args);
    };
});