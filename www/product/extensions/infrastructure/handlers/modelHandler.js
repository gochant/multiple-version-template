define(function () {

    return function (app) {
        var _ = app.core._;
        var kendo = app.core.kendo || window.kendo;

        app.modelHandler || (app.modelHandler = {});

        // 对模型进行计算
        app.modelHandler.calculate = function (modelDefine, data, context) {
            var fields = _.pickBy(modelDefine.fields, function (field) {
                return field.calculate;
            });

            _.each(fields, function (field, name) {
                data[name] = field.calculate.call(data, context, app);
            });

            return data;
        }

        // 获取模型默认值
        app.modelHandler.getDefault = function (modelDefine) {
            var result = {};
            _.each(modelDefine.fields, function (def, name) {
                result[name] = def.defaultValue || null;
            });
            return result;
        };
    };
});
