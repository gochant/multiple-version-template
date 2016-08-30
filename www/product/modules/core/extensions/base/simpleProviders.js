define(function () {

    return function (app) {
        var $ = app.core.$;

        app.optionsProvider || (app.optionsProvider = app.provider.create());

        app.behaviorProvider || (app.behaviorProvider = app.provider.create());

        app.configProvider.fullModal = function () {
            return {
                type: 'modal',
                template: $('#tpl-modal-full').html()
            };
        };

        app.configProvider.normalModal = function () {
            return {
                type: 'modal',
                template: $('#tpl-modal').html()
            };
        };

        app.configProvider.modal = function (size) {
            return {
                type: 'modal',
                template: $('#tpl-modal-' + size).html()
            };
        };
    };
});
