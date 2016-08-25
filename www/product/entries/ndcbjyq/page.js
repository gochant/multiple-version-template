define([
    '../../configs/pages/_common',
    '../../configs/pages/ndcbjyq'
], function () {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        args.forEach(function (arg) {
            app.page.add(arg);
        });
    }
});