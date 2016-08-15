define(function () {

    return function (app) {
        var _ = app.core._;

        app.coreUtil || (app.coreUtil = {});

        app.coreUtil.randomString = function (store, data, url) {
            return Math.random().toString(36).substring(7);
        }

        app.coreUtil.isFalsy = function (o) {
            return o == false;
        }
    };
});
