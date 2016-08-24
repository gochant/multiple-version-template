define([
    '../../extensions/infrastructure/index',
    '../../extensions/components/zoneSelector',
    '../../extensions/ndcbjyq/index'
], function () {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.use(args);

    };
});