define([
    'ver!base-frame-nav-_page',
    'text!./index.html'
], function (ctor, tpl) {
    var base = ctor.export();
    base.template = tpl;
    return base;
});
