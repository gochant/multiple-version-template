define([
], function (pug) {

    return function (app) {
        var _ = app.core._;
        var $ = app.core.$;
        var kendo = app.core.kendo || window.kendo;


        // url provider
        function getProp(obj, desc) {
            var arr = desc.split(".");
            while (arr.length && (obj = obj[arr.shift()]));
            return obj;
        }
        var originalUrl = app.view.base.url;
        app.view.base.url = function (url) {
            var result = originalUrl.call(this, url);
            if (result.indexOf('g:') > -1) {
                var prop = result.replace('g:', '').replace('[this]', this.options._source);
                result = getProp(app.urlProvider, prop);
            }
            return result;
        }

        var originalDefaultListen = app.view.base._defaultListen;
        app.view.base._defaultListen = function () {
            originalDefaultListen.apply(this, Array.prototype.slice.call(arguments));
            this.listenTo(this, 'rendered', function () {
                var me = this;
                if (this.options.read) {
                    var configs = this._invoke(this.options.read);
                    if (!_.isArray(configs)) {
                        configs = [configs];
                    }
                    var promises = _.map(configs, function (config) {
                        return app.request.getJSONCross(me.url(config.url), config.params);
                    });

                    var len = promises.length;
                    app.request.getBundle.apply(me, promises).done(function () {
                        var args = Array.prototype.slice.call(arguments, 0, len);
                        _.each(args, function (resp, i) {
                            var config = configs[i];
                            if (config.map) {
                                var map = config.map;
                                if (!_.isArray(map)) {
                                    map = [map];
                                }
                                _.each(map, function (m, i) {
                                    var val = app.core.util.getter(resp, m.from);
                                    if (m.parse) {
                                        var parse = _.bind(m.parse, me);
                                        val = parse(val);
                                    }
                                    me.model().set(m.to, val);
                                });

                            }

                        });
                    });
                }
            });
        }








        // viewHelper

        app.viewHelper || (app.viewHelper = {});

        app.viewHelper.form = {
            validate: function () {
                var me = this;
                var result = true;
                var $ = this.options.sandbox.app.core.$;
                var deferred = $.Deferred();
                this.$('[data-validate-form]').each(function (i, el) {
                    var validator = me.instance($(el));
                    result = validator.validate();
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
            }
        };

    };
});
