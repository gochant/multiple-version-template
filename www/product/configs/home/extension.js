define([
    '../../extensions/infrastructure/index',
    '../../extensions/ndcbjyq/url',
    '../../extensions/components/zoneSelector',
    '../../extensions/test'
], function () {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.use(args);
    }
});