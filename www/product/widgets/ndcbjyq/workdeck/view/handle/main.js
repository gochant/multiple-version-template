define([
    'text!./index.html'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
            autoAction: true
        },
        initialRegistrationHandler: function () {
            var me = this;
            // 打开窗口
            this.widgetWindow('ndcbjyq-workdeck-form-initial_registration', {
                _source: 'ndcbjyq'
            }, {
                type: 'modal',
                template: me.$('#modal-template').html()
            });
        }
    }
});
