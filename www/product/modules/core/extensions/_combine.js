define([
    './base/apiDataSource',
    './base/bug-polyfill',
    './base/zoneSelector',
    './appExt/autoReport',
    './appExt/backendApi',
    './appExt/configProvider',
    './appExt/coreExt',
    './appExt/loading',
    './appExt/module',
    './appExt/store',
    './appExt/storeProvider',
    //'./appExt/windowProvider',
    './utils/dataUtil',
    './utils/domUtil',
    './utils/modelUtil',
    './utils/parseUtil',
    './utils/storeUtil'
], function () {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.use(args);
    };
});