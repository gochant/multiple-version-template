define([
    './configs/meta',
    './configs/model',
    './configs/page',
    './configs/url'
], function () {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.use(args);
    };
});