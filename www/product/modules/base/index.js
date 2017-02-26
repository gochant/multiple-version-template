define([
    './extensions/_combine',
    './configs/meta',
    './configs/page',
], function theFunc(extension, meta, page) {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.module.setup({
            extension: extension,
            meta: meta,
            page: page
        });
    };
});