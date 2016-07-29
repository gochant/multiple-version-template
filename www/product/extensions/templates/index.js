define([
    './mixin.tpl',
    './modal-box-layout.tpl',
    './query-list-layout.tpl'
], function (mixin, layout1, layout2) {
    return function (app) {
        app.pugMixin || (app.pugMixin = {});
        app.pugOutput || (app.pugOutput = { html: '' });
        var locals = {
            mixin: app.pugMixin,
            output: app.pugOutput
        }

        mixin(locals);
        layout1(locals);
        layout2(locals);

        app.pugMixin = locals.mixin;
    }
});
