define([
    '../../extensions/infrastructure/index',
    '../../extensions/components/zoneSelector',
    '../../extensions/ndcbjyq/model',
    '../../extensions/ndcbjyq/url'
], function () {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.use(args);

    };
});