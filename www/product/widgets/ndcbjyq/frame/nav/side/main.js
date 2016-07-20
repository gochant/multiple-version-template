define([
    'ver!core-frame-sidebar@core',
    'text!./index.html'
], function (ctor, tpl) {
    var base = ctor.obj;

    base.template = tpl;

    return base;
});
