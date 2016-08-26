define([
], function () {


    return function(app) {
        var _ = app.core._;
        var $ = app.core.$;

        app.view.base._call = function (func, args) {
            func.apply(this, Array.prototype.slice.call(args));
        }
    };
});
