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
                    '@@user=>list*': {
                        behaviors: ['autoRead', 'fillData']
                    }
                }
            },
            methods: {
                store: function (name) {
                    if (name == null) {
                        name = this._defaultStore;
                    }
                    return this.model(name);
                }
            }
        });

        base._extendMethod('_listen', function () {
            this.listenTo(this, 'modelInit', function(){
                var me = this;
                _.each(this.stores, function(config, name){
                    var store = app.storeProvider.get(name, this.options._source);
                    if (config.behaviors) {
                        _.each(config.behaviors, function (behavior) {
                            if (typeof behavior === 'string') {
                                behavior = app.behaviorProvider.get(behavior);
                                behavior.call(me, store);
                            }
                        });
                    }
                });
            });
            // this._store = {};
        })
    }
});
