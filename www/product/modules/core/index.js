define([
    './configs/meta',
    './configs/page',
    './extensions/_combine'
], function () {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.use(args);
    };
});