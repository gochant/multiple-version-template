define(function () {

    return function (app) {
        // 数据转换 provider
        var _ = app.core._;

        /**
         * parse 提供者
         * @class parseProvider
         */
        app.parseUtil || (app.parseUtil = {});

        app.parseUtil.toSelectList = function (valueKey, nameKey) {
            return function (list) {
                var result = _.map(list, function (item) {
                    return {
                        name: item[nameKey],
                        value: item[valueKey]
                    }
                });
                // result.unshift({ name: '---请选择---', value: '' });
                return result;
            }
        }

        app.parseUtil.kvToSelectList = app.parseUtil.toSelectList('Key', 'Value');
    };
});
