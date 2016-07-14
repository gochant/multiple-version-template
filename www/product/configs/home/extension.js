define([
    '../../extensions/test',
    '../../extensions/kendo-mvvm'
], function () {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.use(args);
    }
});