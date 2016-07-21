define([
    'text!./index.html'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
            autoResize: true
        },
        resize: function () {
            this.instance('[data-role=grid]').resize();
        },
        initAttr: function () {
            // 初始化数据
            this.model({
                hehe: []
            }, false);
        }
    };
});
