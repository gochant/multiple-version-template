define([
    'text!./index.html'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
            bindBlock: true
        },
        initAttr: function () {
            this.model({
                data: {
                    PetitionName: 'xxx'
                }
            }, false);
        },
        rendered: function (app) {
            app.ext.dynamicTab(this.$el);
        }
    };
});
