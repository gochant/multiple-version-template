define(function () {

    return function (app) {
        var _ = app.core._;

        app.modelUtil || (app.modelUtil = {});

        /**
         * 对模型数据进行计算
         * @param {object} modelDefine - 当前模型定义
         * @param {object} data - 需要计算的数据
         * @param {object} context - 上下文模型定义
         * @returns {object} 计算后数据 
         */
        app.modelUtil.calculate = function (modelDefine, data, context) {
            // 筛选计算字段
            var fields = _.pickBy(modelDefine.fields, function (field) {
                return field.calculate;
            });

            _.each(fields, function (field, name) {
                data[name] = field.calculate.call(data, context, app);
            });

            return data;
        }

        /**
         * 获取模型默认值
         * @param {object} modelDefine - 模型定义
         * @returns {object} 模型默认值对象 
         */
        app.modelUtil.getDefault = function (modelDefine) {
            var result = {};
            _.each(modelDefine.fields, function (def, name) {
                result[name] = def.defaultValue || null;
            });
            return result;
        };
    };
});
