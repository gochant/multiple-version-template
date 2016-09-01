// 模板扩展
define([], function () {
    return function (app) {
        var _ = app.core._;

        app.backendApi = app.provider.create({
            _preprocess: function (data) {
                _.each(data.api, function (config, key) {
                    if (_.isString(config)) {
                        config = {
                            url: config
                        }
                    }
                    var r = /([\w|-|\\|\/]*)\s?([\w|-|\\|\/]*)\s?([\w|-|\\|\/]*)/.exec(config.url);
                    config.url = data.domain + r[1];
                    config.type = config.type || r[2] || 'get';
                    config.dataType = config.dataType || r[3] || 'json';

                    data.api[key] = config;
                })

                return data;
            }
        });

        app.backendApi.add('default', {
            domain: '',
            resuable: false,
            api: {}
        });

    };
});
