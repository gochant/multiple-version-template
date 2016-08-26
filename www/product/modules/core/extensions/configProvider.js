define(function () {

    return function (app) {
        var $ = app.core.$;

        app.configProvider || (app.configProvider = {});

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
    };
});
