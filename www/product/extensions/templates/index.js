define([
    './mixin.tpl',
    './modal-box-layout.tpl',
    './query-list-layout.tpl'
], function (mixin, layout1, layout2) {
    return function (app) {
        app.tpl || (app.tpl = {});

        var locals = {
            mixin: app.tpl
        }

        mixin(locals);
        layout1(locals);
        layout2(locals);

        app.tpl = locals.mixin;
    }
});
