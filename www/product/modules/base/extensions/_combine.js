define([
    './base/zoneSelector',
    './common/autoReport',
    './common/configProvider',
    './common/loading',
    './providers/options',
    //'./providers/window',
    './utils/dataUtil',
    './utils/domUtil',
    './utils/modelUtil',
    './utils/parseUtil',
    './utils/storeUtil',
    // './viewExt/_combine'
], function () {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.use(args);
    };
});