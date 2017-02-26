define([
], function () {
    return function (base, app) {
        var _ = app.core._;
        base._extend({
            options: {
                //store
            },
            configs: {
                stores: {
                }
            },
            methods: {

            }
        });

        base._extendMethod('_listen', function () {
        })
    }
});
