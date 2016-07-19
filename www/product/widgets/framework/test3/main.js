define([
    'ver!framework-test2@framework',
    'text!./index.html',
    'css!./index.css'
], function (test, tpl) {

    var base = test.obj || {};

    base.template = tpl;

    return base;
});
