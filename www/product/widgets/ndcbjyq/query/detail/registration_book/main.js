define([
    'text!./index.html'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
            url: {
                query: 'g:[this].registrationBook.detail'
            }
        },
        rendered: function (app) {
            var me = this;
            app.ext.dynamicTab(this.$el);
            app.request.getJSON(this.url('query'), {
                id: this.options.id
            }).done(function (resp) {
                if (resp.success) {
                    me.model({
                        data: resp.data
                    });
                }
            });
        }

    };
});
