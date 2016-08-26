define([
    './configs/model',
    './configs/page',
    './configs/meta'
], function () {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.use(args);
    };
});