define([
    './providers/modelProvider',
    './providers/urlProvider'
], function () {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.use(args);
    }
});
