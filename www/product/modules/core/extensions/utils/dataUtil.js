define(function () {

    return function (app) {
        var _ = app.core._;
        var kendo = app.core.kendo || window.kendo;

        app.dataUtil || (app.dataUtil = {});

        /**
         * ��ѡ���б��л�ȡָ��ֵ����ʾ�ı�
         * @param {Array} selectList - ѡ���б� 
         * @param {number|string} value - ֵ 
         * @returns {string} ��ʾ�ı� 
         */
        app.dataUtil.getSelectListDisplay = function (selectList, value) {
            var selected = _.find(selectList, function (item) {
                return item.value === value;
            });
            return selected ? selected.name : null;
        }

    };
});
