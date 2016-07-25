define([
    'text!./index.html'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
            url: {
                query: 'g:[this].registrationBook.detail'
            }
        }

    };
});
