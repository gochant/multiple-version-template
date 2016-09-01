define([
    './configs/meta',
    './configs/model',
    './configs/page',
    './configs/url'
], function theFunc(meta, model, page, url) {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.module.setup(theFunc, args);
    };
});