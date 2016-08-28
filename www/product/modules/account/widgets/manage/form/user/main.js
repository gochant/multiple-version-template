define([
    'text!./index.html'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
            autoResize: true,
            autoAction: true,
            url: {
                query: 'g:[this].registrationBook.query'
            }
        },

        saveHandler: function () {

        }
    };
});
