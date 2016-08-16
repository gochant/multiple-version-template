define([
], function () {


    return function (app) {
        var _ = app.core._;
        var $ = app.core.$;
        // viewHelper

        app.viewExt || (app.viewExt = {});

        app.viewExt.form = function (base, app) {
            // hook view _activeUI
            var originalActiveUI = base._activeUI;

            var ext = {
                options: {
                    enableValidation: true
                },
                methods: $.extend({
                    validate: function () {
                        var me = this;
                        var result = true;
                        var $ = this.options.sandbox.app.core.$;
                        var deferred = $.Deferred();
                        this.$('[data-validate-form]').each(function (i, el) {
                            result = me._validateForm($(el));
                        });
                        if (result) {
                            deferred.resolve();
                        } else {
                            deferred.reject();
                        }
                        return deferred.promise();
                    },
                    save: function (data) {
                        if (data == null) {
                            data = this.model('data');
                        }
                        this.trigger('saved', data);
                    },
                    _activeUI: function () {
                        var me = this;
                        this._call(originalActiveUI, arguments);

                        if (this.options.validateEngine) {
                            this.$('[data-validate-form]').each(function (i, form) {
                                me._initValidator($(form));
                            });
                        }
                    }
                }, app.formValidationProvider.get('jqv'))
            }

            base._extend(ext);
        }

    };
});
