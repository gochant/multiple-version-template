define(function () {

    return function (app) {
        var _ = app.core._;

        app.storeUtil || (app.storeUtil = {});

        //--
        // 统一 remote DataSource、local DataSource 和 Observable Array 的数据操作接口

        // 新增
        app.storeUtil.add = function (store, data, url) {
            // 是 datasource 对象
            if (store.page) {
                // 是 remote datasource
                if (store.options.transport) {

                } else {
                    store.insert(0, data);
                }
            } else {
                store.unshift(data);
            }
        }

        // 删除
        app.storeUtil.remove = function (store, data, url) {
            if (store.page) {
                if (store.options.transport) {

                } else {
                }
            } else {
            }
        }

        // 修改
        app.storeUtil.modify = function (data, url) {

        }
    };
});
