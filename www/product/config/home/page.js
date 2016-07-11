define([
    '../../page/geo'
], function () {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.page.add(args);
    }
});