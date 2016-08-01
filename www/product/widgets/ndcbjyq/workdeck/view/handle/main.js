define([
    'text!./index.html'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
            autoAction: true
        },
        initialRegistrationHandler: function (e, app) {
            // 打开窗口
            this.widgetWindow('ndcbjyq-workdeck-form-initial_registration', null,
                app.configProvider.fullModal());
        }
    }
});
