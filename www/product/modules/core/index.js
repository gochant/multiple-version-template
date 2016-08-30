define([
    './extensions/_combine',
    './configs/meta',
    './configs/page',
], function theFunc(extension, meta, page) {
    return function (app) {
        app.model.apply(theFunc, arguments);
    };
});