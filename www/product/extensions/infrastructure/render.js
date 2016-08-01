define([
    'assets/runtime'
], function (pug) {

    window.pug = pug;

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

            var contextModel = app.modelProvider[this.options._source];
            if (this.options.templateEngine === 'pug') {
                var result = compiled(_.extend({},{
                   // mixin: app.pugMixin,
                    // output: app.pugOutput,
                    options: this.options,
                    globalModel: app.modelProvider,
                    contextModel: contextModel,
                    model: contextModel && contextModel[this.options.modelName]
                }));
                //app.pugOutput.html = '';
                return result;
            }

            return oldExecuteTemplate.apply(this, Array.prototype.slice.call(arguments));
        }
    };
});
