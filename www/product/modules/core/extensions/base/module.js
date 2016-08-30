define([], function () {
    return function (app) {
        var _ = app.core._;
        var getParameterNames = app.core.util.getParameterNames;

        app.module.apply = function (func, args) {
            var names = getParameterNames(func);
            var config = {};

            _.each(names, function (name, i) {
                config[name] = args[i];
            });

            _.each(config, function (conf, name) {
                if (name === 'extension') {
                    app.use(conf);
                }
                if (name === 'backendApi') {
                    app.backendApi.add(conf);
                }
                if (name === 'meta') {
                    app.module.add(conf.name, config);
                }
                if (name === 'model') {
                    app.modelProvider || (app.modelProvider = {});
                    _.extend(app.modelProvider, conf);
                }
                if (name === 'page') {
                    app.page.add(conf);
                }
                if (name === 'url') {
                    app.urlProvider || (app.urlProvider = {});
                    _.extend(app.urlProvider, conf);
                }
            })
        }
    }
})