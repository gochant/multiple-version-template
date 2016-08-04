define(function () {

    return function (app) {
        var _ = app.core._;
        var kendo = app.core.kendo || window.kendo;

        app.dataSourceHandler || (app.dataSourceHandler = {});

        //--
        // 统一 remote DataSource、local DataSource 和 Observable Array 的数据操作接口

        // 新增
        app.dataSourceHandler.add = function (dataSource, data, url) {
            // 是 datasource 对象
            if (dataSource.page) {
                // 是 remote datasource
                if (dataSource.options.transport) {

                } else {
                    dataSource.insert(0, data);
                }
            } else {
                dataSource.unshift(data);
            }
        }

        // 删除
        app.dataSourceHandler.remove = function (dataSource, data, url) {
            if (dataSource.page) {
                if (dataSource.options.transport) {

                } else {
                }
            } else {
            }
        }

        // 修改
        app.dataSourceHandler.modify = function (data, url) {

        }
    };
});
