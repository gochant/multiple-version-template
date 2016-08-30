define(function () {

    return function (app) {
        var _ = app.core._;
        var kendo = app.core.kendo || window.kendo;

        var ApiDataSource = DataSource.extend({
            init: function (options) {

                options.transport = extend({}, options.transport, options.api);

                DataSource.fn.init.call(this, extend(true, {}, {

                }, options));

                this._customMethods();
            },
            options: {
                name: 'ApiDataSource'
            },
            _customMethods: function () {
                var me = this;
                each(this.api, function (key, api) {
                    me[key + 'Api'] = function (options) {
                        this._accessApi(key, options);
                    }
                })
            },
            _accessApi: function (name, options) {
                return ajax(this.transport.setup(options, name));
            },
            readOne: function (data) {
                var me = this;
                var deferred = $.Deferred();

                this.read(data).done(function () {
                    var data = this._flatData(this._data);
                    if (data.length === 0) {
                        deferred.reject();
                    } else {
                        deferred.resolve(data[0]);
                    }
                }).fail(function () {
                    deferred.reject();
                });

                return deferred.promise();
            },
            remove: function () {

            },
        });

        kendo.data.ApiDataSource = ApiDataSource;

        return ApiDataSource;
    };
});
