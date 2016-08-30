define([
], function () {
    return function (base, app) {
        base._extend({
            options: {
                store
            },
            configs: {
                stores: {
                    '@@user=>list*': ['read']
                },
                methods: {
                    store: function (name) {
                        if(name == null){
                            name = this._defaultStore;
                        }
                        return this.model(name);
                    }
                }
            });

        base._extendMethod('_initProps', function () {
            this._store = {};
        })
    }
});
