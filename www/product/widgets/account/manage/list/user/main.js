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
        staticModel: function (app) {
            return {
                users: app.store.source({
                    data: [{

                    }]
                })
        }
        }
    };
});
