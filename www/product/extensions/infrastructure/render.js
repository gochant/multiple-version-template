define(function () {

    return function (app) {
        var _ = app.core._;
        var kendo = app.core.kendo || window.kendo;

        var oldRenderTemplate = app.view.base._renderTemplate;
        app.view.base._renderTemplate = function (template) {
            if (_.isFunction(template)) {
               this.options.templateEngine = 'pug';
            }
            return oldRenderTemplate.apply(this, Array.prototype.slice.call(arguments));
        }

        var oldExecuteTemplate = app.view.base._executeTemplate;
        app.view.base._executeTemplate = function (compiled) {

            if (this.options.templateEngine === 'pug') {
                var result = compiled(_.extend({}, this.options, {
                   // mixin: app.pugMixin,
                   // output: app.pugOutput,
                    model: this.options
                }));
                //app.pugOutput.html = '';
                return result;
            }

            return oldExecuteTemplate.apply(this, Array.prototype.slice.call(arguments));
        }
    };
});
