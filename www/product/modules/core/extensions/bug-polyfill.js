define(function () {

    return function (app) {
        // 修复 lodash 或 underscore 没有的方法
        if (!_.any) {
            _.any = _.some;
        }
    };
});
