define([
], function () {


    return function(app) {
        var _ = app.core._;
        var $ = app.core.$;

        // model define

        app.view.base.getContextModelDefine = function () {
            return app.modelProvider[this.options._source];
        }

        app.view.base.getModelDefine = function () {
            var contextModel = this.getContextModelDefine();
            return contextModel && contextModel[this.options.modelName];
        }
    };
});
