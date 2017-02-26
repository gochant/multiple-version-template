/**
 * 应用入口文件
 */

define([
    // 该单页面需要加载的功能模块
    '../../modules/base/index',
    '../../modules/sample/index'
], function () {
    var modules = Array.prototype.slice.call(arguments);
    return {
        // 应用配置
        config: {
            // 主页名称
            homePage: 'sample_manage_user'
        },
        // 初始化完成钩子
        init: function (app) {
            app.use(modules);
        },
        // 应用启动后钩子
        launch: function (app) {
        }
    }
})