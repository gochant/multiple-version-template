define(function () {

    return function (app) {
        app.formValidation || (app.formValidation = app.provider.create());
        
        // default: html5 native data form validation
        app.formValidation.add('default', {
            init: function () { },
            getValidator: function () { },
            onValidate: function ($form, errors, e) {
                var formName = $form.attr('data-validate-form');
                var $tag = $('.form-invalid-tag[data-for=' + formName + ']');
                if (errors === 0) {
                    $tag.text(errors).removeClass('fadeInRight').addClass('animated fadeOutRight');
                } else {
                    $tag.text(errors).removeClass('fadeOutRight').addClass('animated fadeInRight');
                }
            },
            validate: function ($form) {
                var result = $form.get(0).checkValidity();
                var errors = $form.find(':invalid').length;
                this.onValidate($form, errors);
                return result;
            }
        });

        app.formValidation.add('jqv', {

        });

        app.formValidation.add('kendo', {

        });

        app.formValidationProvider || (app.formValidationProvider = {});

        app.formValidationProvider.basic = {
            _onValidate: function ($form, errors, e) {
                var formName = $form.attr('data-validate-form');
                var $tag = $('.form-invalid-tag[data-for=' + formName + ']');
                if (errors === 0) {
                    $tag.text(errors).removeClass('fadeInRight').addClass('animated fadeOutRight');
                } else {
                    $tag.text(errors).removeClass('fadeOutRight').addClass('animated fadeInRight');
                }
            }
        };

        // facade
        app.formValidationProvider.get = function (name) {
            var validation = this[name];
            return $.extend({}, this.basic, validation);
        }

        // 'jquery validation' validation engine 
        app.formValidationProvider.jqv = {
            _initValidator: function ($form) {
                var me = this;
                $form.validate({
                    ignore: ".ignore",
                    invalidHandler: function (e, validator) {
                        var errors = validator.numberOfInvalids();
                        me._onValidate($form, errors, e);
                    }
                });
            },
            _getValidator: function ($form) {
                return $form.data('validator');
            },
            _validateForm: function ($form) {
                var validator = this._getValidator($form);
                var result = validator.valid();
                if (result === true) {
                    this._onValidate($form, 0, {});
                }
                return result;
            }
        }

        // 'kendo-ui-core' validation engine
        app.formValidationProvider.kendo = {
            _initValidator: function ($form) {
                var me = this;
                $form.kendoValidator({
                    errorTemplate: '<span title="#=message#"><i class="fa fa-exclamation-circle"></i></span>',
                    validate: function (e) {
                        var $form = e.sender.element;
                        var errors = $form.find('.k-invalid').length;
                        me._onValidate($form, errors, e);
                    }
                });
            },
            _getValidator: function ($form) {
                return this.instance($form);
            },
            _validateForm: function ($form) {
                var validator = this._getValidator($form);
                var result = validator.validate();
                return result;
            }
        };
    };
});
