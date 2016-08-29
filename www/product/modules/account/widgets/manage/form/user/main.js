define([
    'text!./index.html'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
            autoResize: true,
            autoAction: true,
           // enableValidation: false,
            url: {
                query: 'g:[this].registrationBook.query'
            }
        },
        //rendered: function () {
        //    $.validator.unobtrusive.parse(this.$('form'));
        //},
        saveHandler: function () {
            this.validate();
        }
    };
});
