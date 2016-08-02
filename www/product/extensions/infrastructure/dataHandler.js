define(function () {

    return function (app) {
        var _ = app.core._;
        var kendo = app.core.kendo || window.kendo;

        app.dataHandler || (app.dataHandler = {});
        app.dataSourceHandler || (app.dataSourceHandler = {});
        app.modelHandler || (app.modelHandler = {});


        app.dataHandler.pickEnumName = function (selectedValue, enumList) {
            var selected = _.find(enumList, function(item) {
                return item.value === selectedValue;
            });
            return selected ? selected.name : null;
        }

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
        app.dataSourceHandler.remove = function (data, url) {
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

        app.modelHandler.calculate = function (modelDefine, data, context) {
            var fields = _.pickBy(modelDefine.fields, function (field) {
                return field.calculate;
            });

            _.each(fields, function(field, name) {
                data[name] = field.calculate.call(data, context, app);
            });

            return data;
        }
    };
});
