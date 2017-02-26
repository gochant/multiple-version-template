define(function () {

    return function (app) {
        var _ = app.core._;
        var kendo = app.core.kendo || window.kendo;

        app.dataUtil || (app.dataUtil = {});

        /**
         * 从选择列表中获取指定值的显示文本
         * @param {Array} selectList - 选择列表 
         * @param {number|string} value - 值 
         * @returns {string} 显示文本 
         */
        app.dataUtil.getSelectListDisplay = function (selectList, value) {
            var selected = _.find(selectList, function (item) {
                return item.value === value;
            });
            return selected ? selected.name : null;
        }

    };
});
